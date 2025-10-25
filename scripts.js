document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Mobile menu
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });


    // Set default theme to light if no theme is saved
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        html.classList.remove('dark');
        themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('dark')) {
            html.classList.remove('dark');
            themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
            localStorage.setItem('theme', 'light');
        } else {
            html.classList.add('dark');
            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
            localStorage.setItem('theme', 'dark');
        }
    });

    // Pill navigation
    const navLinks = document.querySelectorAll('.nav-link');
    const navMarker = document.getElementById('nav-marker');
    const navMenu = document.getElementById('nav-menu');

    function moveMarker(element) {
        if (!element || !navMarker) return;
        navMarker.style.width = `${element.offsetWidth}px`;
        navMarker.style.left = `${element.offsetLeft}px`;
        navMarker.style.height = `${element.offsetHeight}px`;
        navMarker.style.top = `${element.offsetTop}px`;
        navLinks.forEach(link => link.classList.remove('active'));
        element.classList.add('active');
    }

    // Active nav link on scroll
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Adjust 72px for header height
            if (pageYOffset >= sectionTop - 72) { 
                current = section.getAttribute('id');
            }
        });

        const activeLink = navMenu.querySelector(`a[href*=${current}]`);
        moveMarker(activeLink);
    });

    // Initial marker position
    const initialActiveLink = navMenu.querySelector('a[href="#home"]');
    if (initialActiveLink) {
        moveMarker(initialActiveLink);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust for header height
                behavior: 'smooth'
            });
            // Update marker immediately on click
            moveMarker(link); 
        });
    });

    // Update marker position on window resize
    window.addEventListener('resize', () => {
        const activeLink = navMenu.querySelector('.nav-link.active');
        moveMarker(activeLink);
    });


    // Count-up animation
    const statsSection = document.getElementById('stats');
    const counters = statsSection.querySelectorAll('[data-count]');

    const countUp = (element) => {
        const target = +element.getAttribute('data-count');
        const duration = 2000; // 2 seconds
        const frameRate = 1000 / 60; // 60 fps
        const totalFrames = Math.round(duration / frameRate);
        let frame = 0;

        const counter = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(target * progress);
            
            if(element.dataset.count === "2"){
                 element.innerText = currentCount + 'B+';
            } else {
                 element.innerText = currentCount + '+';
            }

            if (frame === totalFrames) {
                clearInterval(counter);
            }
        }, frameRate);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                counters.forEach(counter => {
                    countUp(counter);
                });
                observer.disconnect(); // Animate only once
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);

    // Mouse light effect
    document.addEventListener('mousemove', (e) => {
        document.body.style.setProperty('--mouse-x', `${e.clientX}px`);
        document.body.style.setProperty('--mouse-y', `${e.clientY}px`);
    });

    // Project Carousels
    document.querySelectorAll('.project-carousel').forEach(carousel => {
        const inner = carousel.querySelector('.carousel-inner');
        const prevBtn = carousel.querySelector('.carousel-control-prev');
        const nextBtn = carousel.querySelector('.carousel-control-next');
        const indicatorsContainer = carousel.querySelector('.carousel-indicators');
        const items = inner.querySelectorAll('img');
        const totalItems = items.length;
        let currentIndex = 0;

        // Create indicators
        for (let i = 0; i < totalItems; i++) {
            const indicator = document.createElement('div');
            indicator.classList.add('w-3', 'h-3', 'rounded-full', 'bg-white/50', 'cursor-pointer');
            if (i === 0) indicator.classList.add('bg-white');
            indicator.addEventListener('click', () => showSlide(i));
            indicatorsContainer.appendChild(indicator);
        }
        const indicators = indicatorsContainer.querySelectorAll('div');

        function showSlide(index) {
            if (index < 0) {
                currentIndex = totalItems - 1;
            } else if (index >= totalItems) {
                currentIndex = 0;
            } else {
                currentIndex = index;
            }
            inner.style.transform = `translateX(-${currentIndex * 100}%)`;
            indicators.forEach((dot, i) => {
                if (i === currentIndex) {
                    dot.classList.add('bg-white');
                    dot.classList.remove('bg-white/50');
                } else {
                    dot.classList.remove('bg-white');
                    dot.classList.add('bg-white/50');
                }
            });
        }

        prevBtn.addEventListener('click', () => showSlide(currentIndex - 1));
        nextBtn.addEventListener('click', () => showSlide(currentIndex + 1));

        showSlide(0); // Initialize first slide
    });
});
