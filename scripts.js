document.addEventListener('DOMContentLoaded', () => {

    console.log('Script loaded and DOMContentLoaded fired.');

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
                "category": "Artificial Intelligence",
                "icon": "bi-cpu-fill",
                "color": "red",
                "skills": ["AI Agents", "Machine Learning", "Natural Language Processing", "Generative AI (Claude, Gemini, ChatGPT 5)"]
            },
            {
                "category": "Microsoft Copilot Studio",
                "icon": "bi-robot",
                "color": "teal",
                "skills": ["Conversational AI", "Bot Development", "Custom Connectors", "Generative AI Integration"]
            },
            {
                "category": "Vibe Coding & Collaboration",
                "icon": "bi-people-fill",
                "color": "pink",
                "skills": ["Real-time Collaboration", "Interactive Development", "Pair Programming", "Code Sharing"]
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
                    "Architected and governed scalable Power Platform environments for enterprise solutions.",
                    "Spearheaded a reusable Power Apps component library to accelerate development.",
                    "Led the design of an MDM solution for streamlined vendor onboarding.",
                    "Orchestrated vendor creation automation in SAP S4/HANA via OpenInvoice.",
                    "Engineered complex DocuSign workflows for document generation and signing.",
                    "Directed a team of 3 developers, implementing CI/CD pipelines for Power Platform.",
                    "Pioneered modern development practices to foster a culture of innovation."
                ]
            },
            {
                "company": "Wells Fargo Bank",
                "period": "Dec 2022 - Oct 2023",
                "title": "Lead Application Architect",
                "logo": "./companyLogo/wellsFargo.png",
                "icon": "bi-bank2",
                "responsibilities": [
                    "Spearheaded governance and architecture for the migration of 1200+ SharePoint sites.",
                    "Innovated an automated site intake process with Power Apps and Power Automate.",
                    "Directed an offshore team for all migration and development activities.",
                    "Strategically used Sharegate/AvePoint for seamless site migrations.",
                    "Led the deployment of custom SPFx solutions for a unified user experience.",
                    "Championed modern SharePoint features and best practices to drive user adoption."
                ]
            },
            {
                "company": "Live Nation / Ticketmaster",
                "period": "Oct 2022 - Mar 2023",
                "title": "Lead Application Architect",
                "logo": "./companyLogo/liveNation.png",
                "icon": "bi-ticket-perforated-fill",
                "responsibilities": [
                    "Mentored and upskilled a team of 3 on Power Platform fundamentals.",
                    "Architected an automated solution to extract and sync DocuSign data into Dataverse.",
                    "Spearheaded a new supplier intake process with a multi-tier approval workflow.",
                    "Empowered business owners with intuitive Canvas Power Apps for task automation.",
                    "Delivered actionable insights with Power BI reports for vendor tracking.",
                    "Championed the Power Platform to solve complex business problems and drive innovation."
                ]
            },
            {
                "company": "Bravo Tech (Hunt Consolidated, Inc.)",
                "period": "Oct 2021 - Dec 2022",
                "title": "Lead Application Developer",
                "logo": "./companyLogo/TekSystems.png",
                "icon": "bi-gear-wide-connected",
                "responsibilities": [
                    "Engineered and deployed robust RPA processes with UiPath for data extraction.",
                    "Designed an intelligent data scraping solution for PDFs from DocuSign.",
                    "Architected a mission-critical compliance tracker with SharePoint and Power Platform.",
                    "Translated business requirements into high-fidelity mockups with Figma.",
                    "Provided technical leadership on automation best practices to drive innovation.",
                    "Collaborated with cross-functional teams to prioritize automation opportunities."
                ]
            },
            {
                "company": "American Airlines Inc.",
                "period": "Jun 2018 - Oct 2021",
                "title": "Lead Application Developer",
                "logo": "./companyLogo/aaLogo.png",
                "icon": "bi-airplane-fill",
                "responsibilities": [
                    "Directed the technical vision and execution of UI solutions across the product lifecycle.",
                    "Architected a mission-critical Flight Ops app, saving an estimated $2B annually.",
                    "Pioneered Bootstrap integration with K2 Forms for modern, responsive UIs.",
                    "Established a unified design language for all K2 and SharePoint applications.",
                    "Spearheaded the development of a new A/C Parts setup system used by 20+ groups.",
                    "Provided technical leadership and mentorship to a team of UI/UX developers."
                ]
            },
            {
                "company": "Range Resources",
                "period": "Dec 2015 - Jul 2017",
                "title": "Sr. SharePoint Developer",
                "logo": "./companyLogo/RRLogo.png",
                "icon": "bi-geo-alt-fill",
                "responsibilities": [
                    "Led the end-to-end SDLC for the SharePoint 2013 Intranet Portal.",
                    "Architected complex, mobile-friendly workflows and forms with Nintex.",
                    "Pioneered custom JavaScript and CSS solutions to extend Nintex Forms capabilities.",
                    "Engineered a novel solution for capturing digital signatures and geo-location.",
                    "Provided expert guidance on SharePoint and Nintex best practices.",
                    "Collaborated with stakeholders to translate business requirements into technical solutions."
                ]
            },
            {
                "company": "Fannie Mae",
                "period": "Aug 2014 - Dec 2015",
                "title": "Sr. SharePoint Architecture – Developer/Designer/Ui Developer",
                "logo": "./companyLogo/FannieMaeLogo-2.png",
                "icon": "bi-house-door-fill",
                "responsibilities": [
                    "Directed all SDLC phases for the SP2007 to SP2013 site migration and enhancement.",
                    "Led the successful migration of content and workflows with significant UI/UX upgrades.",
                    "Architected a mobile-first Check-In app for iPad to streamline event management.",
                    "Engineered a dynamic cascading drop-down menu solution with SharePoint Services.",
                    "Provided technical leadership on SharePoint best practices for platform modernization.",
                    "Collaborated with stakeholders to translate requirements into innovative solutions."
                ]
            },
            {
                "company": "Institute for Intergovernmental Research (IIR/DHS)",
                "period": "Aug 2013 - Jul 2014",
                "title": "Sr. SharePoint Developer/Administrator/Architect/Migration",
                "logo": "./companyLogo/IIRDHS.png",
                "icon": "bi-shield-fill-check",
                "responsibilities": [
                    "Led the management and enhancement of NIEM.gov and other key SharePoint 2013 projects.",
                    "Directed the end-to-end SDLC for SharePoint 2010 and 2013 projects.",
                    "Architected and administered hybrid SharePoint environments (Online and On-Premises).",
                    "Engineered advanced search configurations and query rules in SharePoint 2013.",
                    "Spearheaded Active Directory integration with SharePoint Online using ADFS 2.0.",
                    "Developed and deployed custom C#-based sandbox solutions and web parts.",
                    "Provided technical leadership in cleaning up legacy code and resolving site bugs."
                ]
            },
            {
                "company": "Bluetooth SIG (HQ)",
                "period": "Feb 2013 - Jul 2013",
                "title": "Sr. Software Developer",
                "logo": "./companyLogo/BluetoothSIG.png",
                "icon": "bi-bluetooth",
                "responsibilities": [
                    "Led all phases of the Agile SDLC as the lead SP 2013 Admin/Developer.",
                    "Architected and executed a complete redesign of the public-facing bluetooth.org.",
                    "Engineered new voting and attendance tracking functionalities in SharePoint.",
                    "Leveraged SharePoint 2013 for both internal and external-facing websites.",
                    "Provided technical leadership and strategic direction on SharePoint solutions.",
                    "Collaborated with stakeholders to translate requirements into technical solutions."
                ]
            },
            {
                "company": "Lazard",
                "period": "Apr 2012 - Feb 2013",
                "title": "Software Application Developer",
                "logo": "./companyLogo/LazardLogo.png",
                "icon": "bi-bar-chart-line-fill",
                "responsibilities": [
                    "Led the architecture and development of SharePoint 2010 solutions.",
                    "Engineered automated deployment of SharePoint environments with PowerShell.",
                    "Architected a robust system for creating Document Libraries and Document Sets.",
                    "Designed and developed complex, multi-level sequential workflows in VS2010 & SPD.",
                    "Provided technical leadership and expertise in SharePoint 2010 solutions.",
                    "Collaborated with stakeholders to translate requirements into technical designs."
                ]
            },
            {
                "company": "Ernst & Young LLP",
                "period": "Jul 2011 - Apr 2012",
                "title": "Software Developer",
                "logo": "./companyLogo/EYLogo.png",
                "icon": "bi-briefcase-fill",
                "responsibilities": [
                    "Played a key role in the implementation of SharePoint 2010 projects.",
                    "Leveraged advanced features like Word Automation Services and Document Sets.",
                    "Engineered extensive ribbon customizations using SP Object Model and CSOM.",
                    "Designed and developed complex, multi-stage workflows in Visual Studio 2010.",
                    "Spearheaded the integration of custom workflows with ribbon controls and content types.",
                    "Provided technical expertise on SharePoint 2010 development best practices."
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
                "title": "SharePoint Migration & Automation",
                "description": "Led the migration of over 1200 SharePoint 2013 sites to SharePoint Online, establishing governance, automating site intake, and managing a large offshore team.",
                "tags": ["SharePoint", "Power Apps", "Sharegate", "SPFx"],
                "highlights": [
                    "Successfully managed the migration of over 1200 SharePoint sites.",
                    "Established a robust governance and site structure for SharePoint Online.",
                    "Deployed custom SPFx solutions for a unified and branded user experience."
                ],
                "images": ["https://placehold.co/1280x720/f97316/ffffff?text=SharePoint+Migration", "https://placehold.co/1280x720/eab308/ffffff?text=Wells+Farto+Portal"]
            },
            {
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

    // Close mobile menu when a link is clicked
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });

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
        if (current) {
            const activeLink = navMenu.querySelector(`a[href*=${current}]`);
            if (activeLink) {
                moveMarker(activeLink);
            }
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetElement = document.querySelector(link.getAttribute('href'));
            window.scrollTo({ top: targetElement.offsetTop - 70, behavior: 'smooth' });
            moveMarker(link); 
        });
    });

    window.addEventListener('resize', () => {
        const activeLink = navMenu.querySelector('.nav-link.active');
        if (activeLink) {
            moveMarker(activeLink);
        }
    });
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
                        const isCostSavings = counter.previousElementSibling && counter.previousElementSibling.classList.contains('bi-piggy-bank');
            
                        const update = () => {
                            if (current < target) {
                                current += increment;
                                const displayValue = Math.ceil(current);
                                if (isCostSavings) {
                                    counter.innerText = `${displayValue}B+`;
                                } else {
                                    counter.innerText = `${displayValue}+`;
                                }
                                requestAnimationFrame(update);
                            } else {
                                if (isCostSavings) {
                                    counter.innerText = `${target}B+`;
                                } else {
                                    counter.innerText = `${target}+`;
                                }
                            }
                        };
                        update();
                    });
            observer.disconnect();
        }
    }, { threshold: 0.5 });
    if (statsSection) observer.observe(statsSection);

    // --- CLIENT LOGO SCROLLER --- //
    const logosContainer = document.querySelector(".logos-slide");
    if (logosContainer) {
        const totalWidth = Array.from(logosContainer.children).reduce((w, c) => w + c.offsetWidth + (parseInt(getComputedStyle(c).marginRight) * 2), 0);
        logosContainer.style.width = `${totalWidth}px`;
        const animationDuration = totalWidth / 400; 
        logosContainer.style.animation = `scroll ${animationDuration}s linear infinite`;
    }

    const scrollLeftButton = document.getElementById("scroll-left");
    const scrollRightButton = document.getElementById("scroll-right");
    const logos = document.getElementById("logos-container");

    if (logos && scrollLeftButton && scrollRightButton) {
        scrollLeftButton.addEventListener("click", () => {
            logos.scrollBy({ left: -300, behavior: 'smooth' });
            logosContainer.style.animationPlayState = 'paused';
            setTimeout(() => {
                logosContainer.style.animationPlayState = 'running';
            }, 5000);
        });

        scrollRightButton.addEventListener("click", () => {
            logos.scrollBy({ left: 300, behavior: 'smooth' });
            logosContainer.style.animationPlayState = 'paused';
            setTimeout(() => {
                logosContainer.style.animationPlayState = 'running';
            }, 5000);
        });

        logos.addEventListener('mouseenter', () => {
            logosContainer.style.animationPlayState = 'paused';
        });

        logos.addEventListener('mouseleave', () => {
            logosContainer.style.animationPlayState = 'running';
        });
    }

    // --- DYNAMIC DATA LOADING --- //
    console.log('Attempting to populate sections...');
    populateSkills(portfolioData.skills);
    populateProjects(portfolioData.projects);
    populateExperience(portfolioData.experience);
    populateCertifications(portfolioData.certifications);
    populateEducation(portfolioData.education);

    function populateSkills(skills) {
        const skillsContainer = document.getElementById('skills-container');
        if (!skillsContainer) return;
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
        let currentProjectIndex = 0;
        const imageContainer = document.getElementById('project-image-container');
        const detailsContainer = document.getElementById('project-details-container');

        if (!imageContainer || !detailsContainer) return;

        function renderProject(index) {
            const project = projects[index];
            
            imageContainer.innerHTML = `<img src="${project.images[0]}" alt="${project.title}" class="w-full h-full object-cover absolute inset-0">`;

            detailsContainer.innerHTML = `
                <h3 class="text-2xl font-bold mt-2">${project.title}</h3>
                <p class="text-slate-600 dark:text-slate-400 mt-3 text-sm flex-grow">${project.description}</p>
                <div class="flex flex-wrap gap-2 mt-4">
                    ${project.tags.map(tag => `<span class="bg-slate-100 dark:bg-slate-700 text-xs font-semibold px-3 py-1 rounded-full">${tag}</span>`).join('')}
                </div>
                <ul class="mt-4 space-y-2 text-sm project-highlights-list">
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
                currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
                renderProject(currentProjectIndex);
            });

            document.getElementById('next-project').addEventListener('click', () => {
                currentProjectIndex = (currentProjectIndex + 1) % projects.length;
                renderProject(currentProjectIndex);
            });
        }

        renderProject(currentProjectIndex);
    }

    function populateExperience(experience) {
        const experienceContainer = document.getElementById('experience-container');
        if (!experienceContainer) return;
        experience.forEach(job => {
            const div = document.createElement('div');
            div.className = 'relative mb-12';

            div.innerHTML = `
                <div class="hidden md:block absolute top-0 left-32 -translate-x-1/2 z-10">
                    <div class="job-icon bg-white dark:bg-slate-800 border-2 border-blue-600 w-14 h-14 rounded-full flex items-center justify-center">
                        <i class="bi ${job.icon} text-3xl text-blue-600"></i>
                    </div>
                </div>

                <div class="experience-card bg-white dark:bg-slate-800 p-6 rounded-xl border border-slate-200 dark:border-slate-700 shadow-lg">
                    <div class="flex justify-between items-start">
                        <div class="w-full text-left">
                            <div class="job-period bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-semibold px-3 py-1 rounded-md block w-40 text-center">
                                ${job.period.replace(' - ', ' &nbsp;&rarr;&nbsp; ')}
                            </div>
                            <h3 class="font-bold text-lg text-slate-900 dark:text-white mt-1">${job.title}</h3>
                            <p class="text-slate-600 dark:text-slate-400 font-semibold mb-3">${job.company}</p>
                        </div>
                        <img class="company-logo w-28 h-auto object-contain" src="${job.logo}" alt="${job.company} Logo">
                    </div>
                    <ul class="list-disc pl-5 text-sm text-slate-500 dark:text-slate-400 space-y-1 text-left">
                        ${job.responsibilities.map(r => `<li>${r}</li>`).join('')}
                    </ul>
                </div>
            `;
            experienceContainer.appendChild(div);
        });
    }

    function populateCertifications(certifications) {
        const certContainer = document.getElementById('certifications-container');
        if (!certContainer) return;
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
        if (!educationContainer) return;
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

    // --- STICKY PROFILE PHOTO IN HEADER --- //
    const mainProfilePhoto = document.querySelector('#home .gemini-glow-border img');
    const headerKpContainer = document.querySelector('header .flex.items-center.gap-2 > div');

    if (mainProfilePhoto && headerKpContainer) {
        const originalKpContent = headerKpContainer.innerHTML;
        const stickyProfilePhotoHtml = `<img src="${mainProfilePhoto.src}" alt="Krupesh Patel" class="w-10 h-10 object-contain rounded-md shadow-md transition-transform duration-300 zoom-150">`;

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        };

        const profilePhotoObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Main profile photo is in view, show 'KP'
                    headerKpContainer.innerHTML = originalKpContent;
                    headerKpContainer.classList.remove('p-0'); // Remove padding if added for image
                } else {
                    // Main profile photo is out of view, show sticky photo
                    headerKpContainer.innerHTML = stickyProfilePhotoHtml;
                    headerKpContainer.classList.add('p-0'); // Add padding if needed for image
                }
            });
        }, observerOptions);

        profilePhotoObserver.observe(mainProfilePhoto);
    }
});