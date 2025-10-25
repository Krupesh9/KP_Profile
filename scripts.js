document.addEventListener('DOMContentLoaded', () => {

    // --- Icon Replacement ---
    if (window.lucide) {
        lucide.createIcons();
    }

    // --- Neon Light Effect ---
    const lightEffect = document.querySelector('.background-light-effect');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth * 100;
        const y = e.clientY / window.innerHeight * 100;
        document.documentElement.style.setProperty('--light-x', `${x}%`);
        document.documentElement.style.setProperty('--light-y', `${y}%`);
    });

    // --- Mobile Menu ---
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Scroll Animations ---
    const sections = document.querySelectorAll('.section');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Dynamic Content Loading ---
    const experienceContainer = document.querySelector('#experience .space-y-8');
    const projectsContainer = document.querySelector('#projects .grid');

    const experienceData = [
        {
            date: 'Apr 2023 - Current',
            title: 'Sr. Solution Architect',
            company: 'Hunt Oil Company, Dallas, TX',
            description: 'Architected and governed multiple Power Platform environments, creating custom components for rapid development. Delivered a complete Master Data Management (MDM) solution with vendor onboarding, including IRS/Bank of America validation and integration with OpenInvoice & SAP S4/HANA. Migrated 30+ UiPath RPA processes to Power Platform RPA in under 2 months, saving over $40K annually. Managed and mentored a team of 3 Power Apps developers, establishing automated deployment pipelines.'
        },
        {
            date: 'Oct 2022 - Mar 2023',
            title: 'Lead Application Architect',
            company: 'Live Nation/Ticketmaster, Dallas, TX',
            description: 'Led a team of 3 to establish Power Platform environments and governance. Developed a new Supplier Intake process using Power Apps with multi-tier approval workflows and DocuSign integration for digital signatures. Created automation to extract data from DocuSign templates and populate Dataverse.'
        }
    ];

    const projectsData = [
        {
            title: 'Power Platform Solutions',
            description: 'A collection of custom Power Apps, Power Automate flows, and Power BI dashboards built to solve complex business problems, from vendor management to risk assessment.',
            tags: ['Power Apps', 'Power Automate', 'Dataverse', 'SAP S4/HANA']
        },
        {
            title: 'FAA-Approved J8 Message System',
            description: 'Developed a critical application for American Airlines Flight Ops to communicate with dispatchers, preventing overfly incidents and saving an estimated $2B annually. The system was approved by the FAA.',
            tags: ['K2', 'SQL', 'Alteryx', 'AngularJS']
        },
        {
            title: 'Master Data Management (MDM) & Vendor Onboarding',
            description: 'Built a complete MDM and vendor onboarding system for Hunt Oil Company, featuring validation against IRS and Bank of America, and full integration with OpenInvoice and SAP S4/HANA.',
            tags: ['Power Platform', 'DocuSign', 'SAP S4/HANA', 'Custom API']
        }
    ];

    experienceData.forEach(item => {
        const experienceItem = document.createElement('div');
        experienceItem.className = 'card p-6 sm:p-8';
        experienceItem.innerHTML = `
            <div class="text-sm font-medium text-slate-500 mb-1">${item.date}</div>
            <h4 class="text-lg font-bold text-white">${item.title}</h4>
            <h5 class="font-semibold text-sky-400">${item.company}</h5>
            <p class="mt-3 text-slate-400">${item.description}</p>
        `;
        experienceContainer.appendChild(experienceItem);
    });

    projectsData.forEach(item => {
        const projectItem = document.createElement('div');
        projectItem.className = 'card p-6 sm:p-8';
        projectItem.innerHTML = `
            <h4 class="text-lg font-bold text-white">${item.title}</h4>
            <p class="mt-2 text-slate-400">${item.description}</p>
            <div class="mt-3 flex flex-wrap gap-2">
                ${item.tags.map(tag => `<span class="skill-badge-sm">${tag}</span>`).join('')}
            </div>
        `;
        projectsContainer.appendChild(projectItem);
    });

});