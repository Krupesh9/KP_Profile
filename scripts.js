document.addEventListener('DOMContentLoaded', () => {

    const portfolioData = {
        "skills": [
            {
                "category": "Power Platform",
                "icon": "bi-lightning-charge-fill",
                "color": "purple",
                "skills": ["Power Apps", "Power Automate", "Power BI", "Dataverse", "AI Agents", "RPA", "Power Pages"]
            },
            {
                "category": "Cloud & Azure",
                "icon": "bi-cloud-fill",
                "color": "blue",
                "skills": ["Azure Functions", "Logic Apps", "Azure DevOps", "On-Prem Gateway", "API Management"]
            },
            {
                "category": "SharePoint & M365",
                "icon": "bi-microsoft-teams",
                "color": "green",
                "skills": ["SharePoint Online", "SP2013", "SPFx", "Dynamics 365", "MS Teams", "Graph API"]
            },
            {
                "category": "Programming",
                "icon": "bi-code-slash",
                "color": "slate",
                "skills": ["C#", "SQL", "JavaScript", "TypeScript", "Angular", "React", "Node.js"]
            },
            {
                "category": "RPA & Automation",
                "icon": "bi-robot",
                "color": "cyan",
                "skills": ["UiPath", "Power Automate RPA", "K2", "Nintex", "Alteryx", "Document Processing"]
            },
            {
                "category": "Integration & APIs",
                "icon": "bi-plug-fill",
                "color": "amber",
                "skills": ["REST APIs", "SAP S4/HANA", "ServiceNow", "DocuSign", "Salesforce", "IRS API"]
            }
        ],
        "experience": [
            {
                "company": "Hunt Oil Company",
                "period": "Apr 2023 - Current",
                "title": "Senior Solution Architect",
                "logo": "./companyLogo/huntLogo.png",
                "icon": "bi-buildings-fill",
                "responsibilities": [
                    "Setup and governed multiple Power Platform environments.",
                    "Created reusable Power Apps components for rapid development.",
                    "Developed a Master Data Management solution for vendor onboarding.",
                    "Automated vendor creation in SAP S4/HANA via OpenInvoice integration.",
                    "Built complex document templates with DocuSign.",
                    "Managed a team of 3 developers and established Power Pipelines for CI/CD."
                ]
            },
            {
                "company": "Live Nation / Ticketmaster",
                "period": "Oct 2022 - Mar 2023",
                "title": "Lead Application Architect",
                "logo": "companyLogo/liveNation.png",
                "icon": "bi-ticket-perforated-fill",
                "responsibilities": [
                    "Led a team of 3 to learn Power Platform fundamentals.",
                    "Automated data extraction from DocuSign templates into Dataverse.",
                    "Created a new supplier intake process using Power Apps with multi-tier approvals.",
                    "Developed Canvas Power Apps for business owners to manage and automate tasks.",
                    "Built Power BI reports for vendor submission tracking and status updates."
                ]
            },
            {
                "company": "Wells Fargo Bank",
                "period": "Dec 2022 - Oct 2023",
                "title": "Lead Application Architect",
                "logo": "companyLogo/wellsFargo.png",
                "icon": "bi-bank2",
                "responsibilities": [
                    "Established governance and site structure for the migration of 1200+ SP2013 sites.",
                    "Created a new site intake process with Power Apps and Power Automate.",
                    "Managed an offshore team for migration and development tasks.",
                    "Used Sharegate/AvePoint to migrate and schedule site migrations.",
                    "Deployed custom SPFx Mega Menu, Footer, and Banner solutions."
                ]
            },
            {
                "company": "Bravo Tech (Hunt Consolidated, Inc.)",
                "period": "Oct 2021 - Dec 2022",
                "title": "Lead Application Developer",
                "logo": "./companyLogo/huntLogo.png",
                "icon": "bi-gear-wide-connected",
                "responsibilities": [
                    "Developed RPA processes using UiPath to extract data from utility statements.",
                    "Scraped PDF data from DocuSign to generate reports and notifications.",
                    "Maintained a compliance tracker SharePoint App using Power Apps & Flow.",
                    "Used Figma to create mockups and demonstrate functionality to end-users."
                ]
            },
            {
                "company": "American Airlines Inc.",
                "period": "Jun 2018 - Oct 2021",
                "title": "Lead Application Developer",
                "logo": "companyLogo/aaLogo.png",
                "icon": "bi-airplane-fill",
                "responsibilities": [
                    "Led UI technical solutions throughout the entire product lifecycle.",
                    "Created an application to communicate with Flights Ops via J8 Message, saving $2B a year.",
                    "Integrated Bootstrap to K2 Forms for responsive UI without server integration.",
                    "Created common look and feel for K2 Applications and SharePoint 2013.",
                    "Delivered the New A/C Parts setup system using K2, used by twenty groups."
                ]
            }
        ],
        "certifications": [
            {
                "name": "Power Platform Architect",
                "year": "2024"
            },
            {
                "name": "Power Platform Developer",
                "year": "2024"
            },
            {
                "name": "UiPath Certified RPA Developer",
                "year": "2022"
            },
            {
                "name": "Nintex Workflow Pro Certified",
                "year": "2021"
            },
            {
                "name": "K2 Certified Architect",
                "year": "2021"
            },
            {
                "name": "Microsoft SharePoint Developer",
                "year": "2014"
            }
        ],
        "education": [
            {
                "degree": "Master of Science, Computer Science",
                "university": "University of Bridgeport, CT",
                "details": "GPA: 3.76/4.0 - 2011"
            },
            {
                "degree": "Bachelor of Engineering, Information Technology",
                "university": "BVM Engineering College, S.P. University, Gujarat, India",
                "details": "GPA: 6.77/10.0 - 2008"
            }
        ],
        "projects": [
            {
                "company": "Hunt Oil Company",
                "period": "2023-Present",
                "title": "Master Data Management & Vendor Onboarding",
                "description": "A comprehensive Master Data Management solution for vendor onboarding, including validation with IRS and Bank of America APIs, and automated vendor creation in SAP S4/HANA.",
                "tags": ["Power Platform", "SAP S4/HANA", "DocuSign", "IRS API"],
                "highlights": [
                    "Integrated with IRS and Bank of America APIs for vendor validation.",
                    "Real-time, automated vendor creation in SAP S4/HANA.",
                    "Reduced vendor onboarding time significantly through automation."
                ],
                "images": ["https://placehold.co/1280x720/3b82f6/ffffff?text=MDM+Solution", "https://placehold.co/1280x720/6366f1/ffffff?text=SAP+Integration"]
            },
            {
                "company": "Hunt Oil Company",
                "period": "2023-Present",
                "title": "RPA Migration - UiPath to Power Platform",
                "description": "Migrated over 30 UiPath RPA processes to Power Platform RPA in under two months, achieving significant cost savings and improving auditability with Work Queues.",
                "tags": ["Power Automate RPA", "UiPath", "Work Queue", "AI Processing"],
                "highlights": [
                    "Saved over $40K annually by migrating from UiPath to Power Platform.",
                    "Completed the migration of 30+ processes in less than 2 months.",
                    "Implemented Work Queues for enhanced auditing and process tracking."
                ],
                "images": ["https://placehold.co/1280x720/ec4899/ffffff?text=RPA+Migration", "https://placehold.co/1280x720/8b5cf6/ffffff?text=Power+Automate"]
            },
            {
                "company": "Live Nation",
                "period": "2022-2023",
                "title": "Supplier Management Automation",
                "description": "Developed a new supplier intake process using Power Apps with a multi-tier approval workflow, and automated data extraction from DocuSign into Dataverse.",
                "tags": ["Power Apps", "Power Automate", "Dataverse", "Power BI"],
                "highlights": [
                    "Streamlined supplier intake with a new Power App and approval workflow.",
                    "Led and trained a team of 3 on Power Platform fundamentals.",
                    "Automated data extraction from DocuSign templates into Dataverse."
                ],
                "images": ["https://placehold.co/1280x720/22c55e/ffffff?text=Supplier+Intake", "https://placehold.co/1280x720/14b8a6/ffffff?text=Live+Nation+Dashboard"]
            },
            {
                "company": "Wells Fargo",
                "period": "2022-2023",
                "title": "SharePoint Migration & Automation",
                "description": "Led the migration of over 1200 SharePoint 2013 sites to SharePoint Online, establishing governance, automating site intake, and managing a large offshore team.",
                "tags": ["SharePoint", "Power Apps", "Sharegate", "SPFx"],
                "highlights": [
                    "Successfully managed the migration of over 1200 SharePoint sites.",
                    "Established a robust governance and site structure for SharePoint Online.",
                    "Deployed custom SPFx solutions for a unified and branded user experience."
                ],
                "images": ["https://placehold.co/1280x720/f97316/ffffff?text=SharePoint+Migration", "https://placehold.co/1280x720/eab308/ffffff?text=Wells+Fargo+Portal"]
            },
            {
                "company": "American Airlines",
                "period": "2018-2021",
                "title": "Flight Ops Communication & K2 Modernization",
                "description": "Created a critical application for Flight Ops to prevent overfly incidents, saving the company $2B annually, and modernized legacy K2 forms with responsive UI.",
                "tags": ["K2", "Bootstrap", "SQL", "Angular"],
                "highlights": [
                    "Saved an estimated $2B per year by eliminating overfly events.",
                    "Rebuilt legacy K2 forms with a modern, responsive Bootstrap interface.",
                    "Delivered a new A/C Parts setup system used by 20 different groups."
                ],
                "images": ["https://placehold.co/1280x720/ef4444/ffffff?text=Flight+Ops+App", "https://placehold.co/1280x720/dc2626/ffffff?text=K2+Modernization"]
            }
        ]
    };

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
    populateSkills(portfolioData.skills);
    populateProjects(portfolioData.projects);
    populateExperience(portfolioData.experience);
    populateCertifications(portfolioData.certifications);
    populateEducation(portfolioData.education);

    function populateSkills(skills) {
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
        let currentProject = 0;
        const projectImageContainer = document.getElementById('project-image-container');
        const projectDetailsContainer = document.getElementById('project-details-container');

        function showProject(index) {
            const project = projects[index];
            projectImageContainer.innerHTML = `<img src="${project.images[0]}" alt="${project.title}" class="w-full h-full object-cover">`;
            projectDetailsContainer.innerHTML = `
                <p class="text-sm font-semibold text-slate-500 dark:text-slate-400">${project.company} - <span class="text-blue-600 dark:text-blue-400">${project.period}</span></p>
                <h3 class="text-2xl font-bold mt-2">${project.title}</h3>
                <p class="text-slate-600 dark:text-slate-400 mt-3 text-sm flex-grow">${project.description}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                    ${project.tags.map(tag => `<span class="bg-slate-100 dark:bg-slate-700 text-xs font-semibold px-3 py-1 rounded-full">${tag}</span>`).join('')}
                </div>
                <ul class="mt-4 space-y-2 text-sm">
                    ${project.highlights.map(highlight => `<li class="flex items-start gap-2"><i class="bi bi-check-circle-fill text-green-500 mt-1"></i><span>${highlight}</span></li>`).join('')}
                </ul>
                <div class="flex items-center justify-between mt-6">
                    <button id="prev-project" class="bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white rounded-full w-12 h-12 flex items-center justify-center transition shadow-md">
                        <i class="bi bi-arrow-left text-2xl"></i>
                    </button>
                    <div class="text-center text-sm font-semibold text-slate-500 dark:text-slate-400">${index + 1} / ${projects.length}</div>
                    <button id="next-project" class="bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white rounded-full w-12 h-12 flex items-center justify-center transition shadow-md">
                        <i class="bi bi-arrow-right text-2xl"></i>
                    </button>
                </div>
            `;

            document.getElementById('prev-project').addEventListener('click', () => {
                currentProject = (currentProject - 1 + projects.length) % projects.length;
                showProject(currentProject);
            });

            document.getElementById('next-project').addEventListener('click', () => {
                currentProject = (currentProject + 1) % projects.length;
                showProject(currentProject);
            });
        }

        showProject(0);
    }

    function populateExperience(experience) {
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