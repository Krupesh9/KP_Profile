document.addEventListener('DOMContentLoaded', () => {

    // --- THEME TOGGLE --- //
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    if (localStorage.getItem('theme') === 'dark') {
        html.classList.add('dark');
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
        themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    }
    themeToggle.addEventListener('click', () => {
        html.classList.toggle('dark');
        if (html.classList.contains('dark')) {
            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
            localStorage.setItem('theme', 'dark');
        } else {
            themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
            localStorage.setItem('theme', 'light');
        }
    });

    // --- MOBILE MENU --- //
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    mobileMenuButton.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));

    // --- PILL NAVIGATION --- //
    const navLinks = document.querySelectorAll('.nav-link');
    const navMarker = document.getElementById('nav-marker');
    const navMenu = document.getElementById('nav-menu');
    const sections = document.querySelectorAll('section');

    function moveMarker(element) {
        if (!element || !navMarker) return;
        navMarker.style.width = `${element.offsetWidth}px`;
        navMarker.style.left = `${element.offsetLeft}px`;
        navMarker.style.height = `${element.offsetHeight}px`;
        navMarker.style.top = `${element.offsetTop}px`;
        navLinks.forEach(link => link.classList.remove('active'));
        element.classList.add('active');
    }

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (pageYOffset >= section.offsetTop - 72) { 
                current = section.getAttribute('id');
            }
        });
        const activeLink = navMenu.querySelector(`a[href*=${current}]`);
        moveMarker(activeLink);
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.querySelector(link.getAttribute('href'));
            window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
            moveMarker(link); 
        });
    });

    window.addEventListener('resize', () => moveMarker(navMenu.querySelector('.nav-link.active')));
    moveMarker(navMenu.querySelector('a[href="#home"]'));

    // --- STATS COUNT-UP --- //
    const statsSection = document.getElementById('stats');
    const counters = statsSection.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            counters.forEach(counter => {
                const target = +counter.dataset.count;
                let current = 0;
                const increment = target / 100;
                const update = () => {
                    if (current < target) {
                        current += increment;
                        counter.innerText = `${Math.ceil(current)}${counter.dataset.count.includes('B') ? 'B+' : '+'}`;
                        requestAnimationFrame(update);
                    }
                };
                update();
            });
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    observer.observe(statsSection);

    // --- CLIENT LOGO SCROLLER --- //
    const logosContainer = document.querySelector(".logos-slide");
    if (logosContainer) {
        const totalWidth = Array.from(logosContainer.children).reduce((w, c) => w + c.offsetWidth + (parseInt(getComputedStyle(c).marginRight) * 2), 0);
        logosContainer.style.width = `${totalWidth}px`;
        const animationDuration = totalWidth / 100; 
        logosContainer.style.animation = `scroll ${animationDuration}s linear infinite`;
    }

    // --- DYNAMIC DATA LOADING --- //
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log('Data fetched successfully:', data);
            populateSkills(data.skills);
            populateProjects(data.projects);
            populateExperience(data.experience);
            populateCertifications(data.certifications);
            populateEducation(data.education);
        })
        .catch(error => console.error('Error fetching data:', error));

    function populateSkills(skills) {
        console.log("Populating skills...");
        const skillsContainer = document.getElementById('skills-container');
        skills.forEach(skillCategory => {
            const div = document.createElement('div');
            div.className = `p-6 rounded-xl border bg-${skillCategory.color}-50 dark:bg-${skillCategory.color}-900/50 border-${skillCategory.color}-200 dark:border-${skillCategory.color}-800`;
            div.innerHTML = `
                <h3 class="font-bold text-lg flex items-center gap-2 mb-4 text-${skillCategory.color}-800 dark:text-${skillCategory.color}-300">
                    <i class="bi ${skillCategory.icon}"></i> ${skillCategory.category}
                </h3>
                <div class="flex flex-wrap gap-2">
                    ${skillCategory.skills.map(skill => `<span class="bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-sm font-medium px-3 py-1 rounded-full">${skill}</span>`).join('')}
                </div>
            `;
            skillsContainer.appendChild(div);
        });
    }

    function populateProjects(projects) {
        console.log("Populating projects...");
        const imageSwiperWrapper = document.querySelector('.project-image-swiper .swiper-wrapper');
        const detailsSwiperWrapper = document.querySelector('.project-details-swiper .swiper-wrapper');

        projects.forEach(project => {
            // Populate Image Carousel
            project.images.forEach(imgUrl => {
                const slide = document.createElement('div');
                slide.className = 'swiper-slide';
                slide.innerHTML = `<img src="${imgUrl}" alt="${project.title}" class="w-full h-full object-cover">`;
                imageSwiperWrapper.appendChild(slide);
            });

            // Populate Details Carousel
            const detailsSlide = document.createElement('div');
            detailsSlide.className = 'swiper-slide';
            detailsSlide.innerHTML = `
                <div class="bg-white dark:bg-slate-800 p-8 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg h-full flex flex-col">
                    <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">${project.company} - <span class="text-blue-600 dark:text-blue-400">${project.period}</span></p>
                    <h3 class="text-2xl font-bold mt-2">${project.title}</h3>
                    <p class="text-slate-600 dark:text-slate-400 mt-3 text-sm flex-grow">${project.description}</p>
                    <div class="flex flex-wrap gap-2 mt-4">
                        ${project.tags.map(tag => `<span class="bg-slate-100 dark:bg-slate-700 text-xs font-semibold px-3 py-1 rounded-full">${tag}</span>`).join('')}
                    </div>
                    <ul class="mt-4 space-y-2 text-sm">
                        ${project.highlights.map(highlight => `<li class="flex items-start gap-2"><i class="bi bi-check-circle-fill text-green-500 mt-1"></i><span>${highlight}</span></li>`).join('')}
                    </ul>
                </div>
            `;
            detailsSwiperWrapper.appendChild(detailsSlide);
        });

        const detailsSwiper = new Swiper('.project-details-swiper', {
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            effect: 'fade',
            fadeEffect: { crossFade: true },
            pagination: {
                el: '.project-pagination',
                type: 'fraction',
            },
            navigation: {
                nextEl: '.project-next',
                prevEl: '.project-prev',
            },
        });

        const imageSwiper = new Swiper('.project-image-swiper', {
            loop: true,
            autoplay: { delay: 5000, disableOnInteraction: false },
            effect: 'creative',
            creativeEffect: {
                prev: { translate: ['-20%', 0, -1], rotate: [0, 0, -2] },
                next: { translate: ['100%', 0, 0] },
            },
            thumbs: {
                swiper: detailsSwiper
            }
        });

        detailsSwiper.controller.control = imageSwiper;
        imageSwiper.controller.control = detailsSwiper;
    }

    function populateExperience(experience) {
        console.log("Populating experience...");
        const experienceContainer = document.getElementById('experience-container');
        experience.forEach(job => {
            const div = document.createElement('div');
            div.className = 'relative flex items-start mb-12';
            div.innerHTML = `
                <div class="hidden md:flex flex-col items-center w-24 text-right bg-slate-100 dark:bg-slate-800 p-2 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                    <span class="text-slate-600 dark:text-slate-300 text-xs font-medium">${job.period.split(' - ')[0]}</span>
                    <i class="bi bi-arrow-down text-slate-400 dark:text-slate-500 text-lg"></i>
                    <span class="text-blue-700 dark:text-blue-300 text-xs font-medium">${job.period.split(' - ')[1]}</span>
                </div>
                <div class="absolute left-[calc(1rem+0.25rem)] md:left-[calc(6rem+0.25rem)] -translate-x-1/2 z-10">
                    <div class="bg-white dark:bg-slate-800 border-2 border-blue-600 w-14 h-14 rounded-full flex items-center justify-center">
                        <i class="bi ${job.icon} text-3xl text-blue-600"></i>
                    </div>
                </div>
                <div class="pl-10 md:pl-12 w-full">
                    <div class="bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg flex justify-between items-start gap-4">
                        <div class="text-left">
                            <div class="md:hidden text-xs font-bold text-slate-500 dark:text-slate-400 mb-2">${job.period}</div>
                            <h3 class="font-bold text-lg text-slate-900 dark:text-white">${job.title}</h3>
                            <p class="text-slate-600 dark:text-slate-400 font-semibold mb-3">${job.company}</p>
                            <ul class="list-disc pl-5 text-sm text-slate-500 dark:text-slate-400 space-y-1">
                                ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
                            </ul>
                        </div>
                        <img src="${job.logo}" alt="${job.company} Logo" class="w-24 h-auto object-contain hidden sm:block">
                    </div>
                </div>
            `;
            experienceContainer.appendChild(div);
        });
    }

    function populateCertifications(certifications) {
        console.log("Populating certifications...");
        const certContainer = document.getElementById('certifications-container');
        certifications.forEach(cert => {
            const div = document.createElement('div');
            div.className = 'bg-slate-50 dark:bg-slate-700/50 p-4 rounded-lg flex items-center justify-between';
            div.innerHTML = `
                <div class="flex items-center gap-4">
                    <i class="bi bi-patch-check-fill text-blue-600 text-2xl"></i>
                    <p class="font-semibold">${cert.name}</p>
                </div>
                <span class="text-xs font-semibold bg-slate-200 dark:bg-slate-600 px-2 py-1 rounded-full">${cert.year}</span>
            `;
            certContainer.appendChild(div);
        });
    }

    function populateEducation(education) {
        console.log("Populating education...");
        const educationContainer = document.getElementById('education-container');
        education.forEach((edu, index) => {
            const div = document.createElement('div');
            div.innerHTML = `
                <h4 class="font-bold text-lg">${edu.degree}</h4>
                <p class="text-slate-600 dark:text-slate-400">${edu.university}</p>
                <span class="inline-block bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400 text-xs font-semibold px-2 py-1 rounded-full mt-2">${edu.details}</span>
            `;
            educationContainer.appendChild(div);
            if (index < education.length - 1) {
                const border = document.createElement('div');
                border.className = 'border-t border-slate-200 dark:border-slate-700 my-4';
                educationContainer.appendChild(border);
            }
        });
    }
});
