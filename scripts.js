if ("scrollRestoration" in history) history.scrollRestoration = "manual";

const v2Data = {
    technologyLogos: [
        { name: "Model Context Protocol", icon: "assets/tech-logos/mcp.svg" },
        { name: "Microsoft Agent 365", icon: "assets/tech-logos/agent-365.svg" },
        { name: "Copilot Studio", icon: "assets/tech-logos/copilot-studio.svg" },
        { name: "Power Platform", icon: "assets/tech-logos/power-platform.svg" },
        { name: "Power Apps", icon: "assets/tech-logos/power-apps.svg" },
        { name: "Power Automate", icon: "assets/tech-logos/power-automate.svg" },
        { name: "Azure AI / Foundry", icon: "assets/tech-logos/azure-ai-foundry.svg" },
        { name: "Foundry Agent Service", icon: "assets/tech-logos/azure-agent-service.svg" },
        { name: "Claude", icon: "assets/tech-logos/claude.ico" },
        { name: "SharePoint", icon: "assets/tech-logos/sharepoint.svg" },
        { name: "Power BI", icon: "assets/tech-logos/power-bi.svg" },
        { name: "Azure DevOps", icon: "assets/tech-logos/azure-devops.svg" }
    ],
    skillGroups: [
        {
            title: "Power Platform & Microsoft 365",
            icon: "assets/tech-logos/power-platform.svg",
            skills: [
                ["Solution architecture", 5],
                ["Power Apps", 5],
                ["Power Automate", 5],
                ["Power Automate RPA", 5],
                ["SharePoint / Microsoft 365", 5],
                ["Dataverse", 4.5],
                ["Copilot Studio", 4.5],
                ["Power BI", 2.5]
            ]
        },
        {
            title: "AI, MCP & Agentic Engineering",
            icon: "assets/tech-logos/agent-365.svg",
            skills: [
                ["MCP SDK & server integration", 5],
                ["AI agents & orchestration", 4.5],
                ["Agent SDK patterns", 4],
                ["Enterprise knowledge retrieval", 4.5],
                ["Prompt design & grounding", 4.5],
                ["Azure AI / Foundry", 4],
                ["Claude / Codex engineering", 4.5],
                ["Autonomous workflows", 4]
            ]
        },
        {
            title: "Integration, Cloud & Delivery",
            icon: "assets/tech-logos/azure-devops.svg",
            skills: [
                ["Enterprise API integration", 5],
                ["REST / GraphQL APIs", 4],
                ["Governance, DLP & security", 5],
                ["Azure DevOps & CI/CD", 4.5],
                ["Azure Functions / Logic Apps", 4],
                ["C# / .NET", 4.5],
                ["SQL / data integration", 4.5],
                ["Python", 4]
            ]
        },
        {
            title: "UI Engineering & Experience Design",
            icon: "assets/tech-logos/power-apps.svg",
            skills: [
                ["UI/UX solution design", 4.5],
                ["Responsive interface architecture", 5],
                ["JavaScript / TypeScript", 4.5],
                ["Angular development", 4],
                ["React / SPFx development", 4],
                ["Figma & rapid prototyping", 4],
                ["Adaptive Cards", 4.5],
                ["Unified Power Apps UI", 5]
            ]
        }
    ],
    projects: [
        {
            type: "AI + Enterprise Integration",
            title: "Enterprise MCP SDK and agent ecosystem",
            description: "A repeatable platform for connecting AI clients and agents to enterprise tools without turning every integration into a one-off project.",
            highlights: [
                "Onboarded 10+ MCP servers across ServiceNow, Tanium, SharePoint Lists, Microsoft 365 reporting/licensing, Rapid7, Mimecast, SailPoint, Nutanix, and Palo Alto Panorama.",
                "Standardized authentication, permissions, schemas, logging, testing, error handling, and server lifecycle practices.",
                "Designed employee-onboarding orchestration, daily task execution, monitoring, reusable knowledge, and safe self-healing patterns.",
                "Created reusable onboarding templates and health-check patterns so new MCP integrations can move from prototype to supported service faster.",
                "Connected Copilot Studio, Agent SDK workflows, and AI engineering tools to governed enterprise actions with explicit human approval points."
            ],
            chips: ["MCP", "Agent SDK", "Copilot Studio", "Azure DevOps", "Security"],
            images: [
                { src: "projects/HuntWiki/Hunt Wiki - AI Agent.png", alt: "Hunt Wiki AI agent home experience" },
                { src: "projects/HuntWiki/Hunt Wiki - AI Agent - Prompt.png", alt: "Hunt Wiki AI agent prompt experience" },
                { src: "projects/HuntWiki/Hunt Wiki - AI Agent - Response.png", alt: "Hunt Wiki AI agent grounded response" },
                { src: "projects/HuntWiki/Hunt Wiki - AI Agent - Open Enrollment.png", alt: "Hunt Wiki open enrollment knowledge experience" }
            ]
        },
        {
            type: "Power Platform + Governance",
            title: "A faster, governed path from idea to enterprise app",
            description: "Reusable components, mobile-first UI, Power Platform MCP, code apps, AI-assisted engineering, and release automation that help teams deliver consistent solutions in weeks instead of months.",
            highlights: [
                "Created responsive app components, adaptive-card patterns, and a unified UI for makers and developers.",
                "Set environment strategy, DLP policies, security roles, connector controls, permissions, and automated promotion.",
                "Built reusable Claude and Codex skills so junior developers and interns can contribute with safer standards.",
                "Used Power Platform MCP and AI prompts to generate reports, flows, app scaffolding, and repeatable delivery assets.",
                "Combined mobile-first layouts, code apps, shared components, and automated reviews to reduce rework across projects."
            ],
            chips: ["Power Apps", "Power Automate", "Governance", "CI/CD", "Developer enablement"],
            images: [
                { src: "projects/ITPMO/IT PMO - Gantt View with Quick Filters.png", alt: "IT PMO Gantt view with quick filters" },
                { src: "projects/ITPMO/IT PMO - Box Integration in Power Apps.png", alt: "IT PMO Box integration inside Power Apps" },
                { src: "projects/ITPMO/IT PMO - Generative AI - Lesson Learned.png", alt: "IT PMO generative AI lessons learned experience" },
                { src: "projects/ITPMO/IT PMO - Genrative AI without Premium License.png", alt: "IT PMO generative AI experience without premium licensing" },
                { src: "projects/ITPMO/IT PMO - In App Help Page.png", alt: "IT PMO contextual in-app help page" }
            ]
        },
        {
            type: "Power Platform + ERP Integration",
            title: "Master data and vendor onboarding",
            description: "An end-to-end onboarding product spanning validation, approvals, document generation, signatures, and automated ERP vendor creation.",
            highlights: [
                "Connected IRS and Bank of America validation services.",
                "Integrated OpenInvoice, SAP S/4HANA, DocuSign, Dataverse, and Power Automate.",
                "Created a mobile-friendly experience for domestic and international vendor workflows.",
                "Added role-based administration, delegation of authority, task tracking, and audit-friendly process visibility.",
                "Reduced manual handoffs by bringing validation, approvals, document generation, signatures, and ERP creation into one product."
            ],
            chips: ["Power Platform", "SAP S/4HANA", "DocuSign", "APIs", "Dataverse"],
            images: [
                { src: "projects/MDM/Master Data Management (MDM - Home).png", alt: "Master Data Management application home page" },
                { src: "projects/MDM/MDM - Business Partners - Home with Process Flow.png", alt: "Business partner onboarding process flow" },
                { src: "projects/MDM/MDM - Admin Screen (IRS & BoA Validation).png", alt: "MDM administrator validation configuration" },
                { src: "projects/MDM/MDM - DocuSign Integration with Task, Data Extraction.png", alt: "MDM DocuSign task and data extraction integration" },
                { src: "projects/MDM/MDM - Delegation of Authority - Home.png", alt: "MDM delegation of authority home page" },
                { src: "projects/MDM/MDM - GL Account Home.png", alt: "MDM general ledger account experience" }
            ]
        },
        {
            type: "Automation Modernization",
            title: "UiPath to Power Automate RPA",
            description: "A rapid automation portfolio migration with stronger queue operations, recovery, tracking, and auditability.",
            highlights: [
                "Migrated 30+ processes in under two months.",
                "Delivered more than $40K in estimated annual savings.",
                "Introduced Work Queues for better monitoring, logging, and operational support.",
                "Standardized retries, exception handling, run history, ownership, and recovery steps for production support.",
                "Created a dashboard-led operating model so teams can see workload, status, failures, and business value in one place."
            ],
            chips: ["Power Automate RPA", "UiPath", "Work Queues", "Document processing"],
            images: [
                { src: "projects/RPA/RPA - Dashboard - Quick Start.png", alt: "RPA modernization dashboard and quick-start experience" }
            ]
        },
        {
            type: "SharePoint + Governance",
            title: "1,200+ SharePoint site migration and modernization",
            description: "Governance, information architecture, automated intake, reporting, and delivery coordination for a large SharePoint migration program.",
            highlights: [
                "Migrated and modernized 1,200+ SharePoint sites using governed information architecture and repeatable delivery patterns.",
                "Built Power Apps and Power Automate intake/approval workflows.",
                "Led migration execution, offshore coordination, SPFx modernization, and leadership reporting.",
                "Organized migration waves, exception handling, ownership, and governance decisions so business teams knew what happened next.",
                "Used operational dashboards and automated intake data to improve prioritization, readiness tracking, and stakeholder communication."
            ],
            chips: ["SharePoint Online", "ShareGate", "AvePoint", "SPFx", "Power BI"],
            images: [
                { src: "projects/ITPMO/IT PMO - Box Integration in Power Apps.png", alt: "Microsoft 365 modernization intake and Box integration experience" },
                { src: "projects/ITPMO/IT PMO - Gantt View with Quick Filters.png", alt: "Microsoft 365 program delivery timeline and filters" },
                { src: "projects/ITPMO/IT PMO - In App Help Page.png", alt: "Microsoft 365 modernization in-app guidance" }
            ]
        },
        {
            type: "Application Architecture + UX",
            title: "Operational applications at airline scale",
            description: "Responsive application architecture and reusable UI patterns for regulated workflows and cross-functional operational teams.",
            highlights: [
                "Created FAA-governed digital-signature and messaging workflows.",
                "Delivered an aircraft-parts setup system used by more than 20 groups.",
                "Built a Flight Ops application credited internally with approximately $2B in annual impact.",
                "Established reusable responsive UI and interaction patterns across K2, SharePoint, SQL, and integrated operational systems.",
                "Worked with cross-functional teams to turn complex regulated processes into clearer task flows, dashboards, and supportable experiences."
            ],
            chips: ["K2", "SharePoint", "SQL", "Alteryx", "Enterprise UX"],
            images: [
                { src: "projects/henassetmgmt/HEN Asset Mgmt - Home View with Cards.png", alt: "Enterprise asset management home page with cards" },
                { src: "projects/henassetmgmt/HEN Asset Mgmt - Admin.png", alt: "Enterprise asset management administration page" },
                { src: "projects/henassetmgmt/HEN Asset Mgmt - Editable Grid View - Parts.png", alt: "Enterprise asset management editable parts grid" },
                { src: "projects/henassetmgmt/HEN Asset Mgmt - Quick History View.png", alt: "Enterprise asset management quick history view" },
                { src: "projects/riskregister/IT Risk Register - Home Page.png", alt: "Enterprise IT risk register home page" }
            ]
        }
    ],
    experience: [
        {
            company: "Hunt Oil Company",
            industry: "Energy & Natural Resources",
            title: "Senior Solution Architect",
            period: "Apr 2023 - Present",
            logo: "companyLogo/huntLogo.png",
            bullets: [
                "Built an enterprise MCP SDK and onboarded 10+ servers across ITSM, security, identity, infrastructure, Microsoft 365, and business data platforms.",
                "Deliver Copilot Studio, Agent SDK, autonomous workflow, Power Platform, Azure integration, mobile application, governance, and CI/CD capabilities.",
                "Modernized enterprise MDM, vendor onboarding, SAP S/4HANA and OpenInvoice integration, DocuSign, IT portfolio management, and RPA operations."
            ]
        },
        {
            company: "Wells Fargo Bank",
            industry: "Banking & Financial Services",
            title: "Lead Application Architect",
            period: "Dec 2022 - Oct 2023",
            logo: "companyLogo/wellsFargo.png",
            bullets: [
                "Led governance, information architecture, and migration delivery for 1,200+ SharePoint 2013 sites moving to SharePoint Online.",
                "Built Power Apps and Power Automate intake, approval, scheduling, and leadership-reporting experiences.",
                "Led offshore delivery and migration coordination while modernizing navigation and shared user experiences through SPFx."
            ]
        },
        {
            company: "Live Nation / Ticketmaster",
            industry: "Live Entertainment & Ticketing",
            title: "Lead Application Architect",
            period: "Oct 2022 - Mar 2023",
            logo: "companyLogo/liveNation.png",
            bullets: [
                "Architected supplier onboarding with tiered approvals, Dataverse, Power Apps, Power Automate, and DocuSign.",
                "Automated DocuSign data extraction into Dataverse and created operational Power BI reporting for vendor status and adoption.",
                "Mentored a three-person team on Power Platform fundamentals, reusable solution patterns, and release practices."
            ]
        },
        {
            company: "Bravo Tech / Hunt Consolidated",
            industry: "Technology Consulting & Energy",
            title: "Lead Application Developer",
            period: "Oct 2021 - Dec 2022",
            logo: "companyLogo/BravoTech.svg",
            bullets: [
                "Delivered UiPath automation for utility statements and document workflows spanning DocuSign, PDF extraction, SQL, SharePoint, and Power Platform.",
                "Built compliance and contractor-management applications from stakeholder discovery and Figma prototypes through production delivery.",
                "Modernized and retired legacy K2 applications while documenting repeatable, supportable replacement patterns."
            ]
        },
        {
            company: "American Airlines",
            industry: "Aviation & Transportation",
            title: "Lead Application Developer",
            period: "Jun 2018 - Oct 2021",
            logo: "companyLogo/aaLogo.png",
            bullets: [
                "Led enterprise UX architecture for K2 and SharePoint products, creating reusable responsive themes and interaction patterns.",
                "Built a Flight Operations messaging application used to prevent overfly events and credited internally with approximately $2B in annual impact.",
                "Delivered FAA-governed workflows and an aircraft-parts setup system serving 20+ groups across SQL, Teradata, Alteryx, K2, and web technologies."
            ]
        },
        {
            company: "Range Resources",
            industry: "Energy & Natural Resources",
            title: "Senior SharePoint Developer",
            period: "Dec 2015 - Jul 2017",
            logo: "companyLogo/RRLogo.png",
            bullets: [
                "Designed SharePoint intranet architecture and reusable information-management patterns.",
                "Delivered mobile-first Nintex forms and workflows with signatures, geolocation, and field-friendly experiences."
            ]
        },
        {
            company: "Fannie Mae",
            industry: "Housing Finance & Financial Services",
            title: "Senior SharePoint Architect / Developer / UI Developer",
            period: "Aug 2014 - Dec 2015",
            logo: "companyLogo/FannieMaeLogo-2.png",
            bullets: [
                "Supported SharePoint 2007-to-2013 migration, approval workflows, and responsive enterprise UI modernization.",
                "Created iPad check-in experiences and reusable interface patterns for business-facing applications."
            ]
        },
        {
            company: "Institute for Intergovernmental Research / DHS",
            industry: "Government & Public Safety",
            title: "Senior SharePoint Developer / Administrator / Architect",
            period: "Aug 2013 - Jul 2014",
            logo: "companyLogo/IIRDHS.png",
            bullets: [
                "Owned NIEM.gov enhancements and hybrid SharePoint administration across search, ADFS integration, workflow, and platform support.",
                "Delivered custom solutions and operating documentation for a government and public-safety environment."
            ]
        },
        {
            company: "Bluetooth SIG",
            industry: "Technology Standards & Membership",
            title: "Senior Software Developer",
            period: "Feb 2013 - Jul 2013",
            logo: "companyLogo/BluetoothSIG.png",
            bullets: [
                "Redesigned bluetooth.org and established the supporting SharePoint architecture and farm-administration approach.",
                "Automated deployments and delivered navigation, voting, attendance, and member-experience features."
            ]
        },
        {
            company: "Lazard",
            industry: "Investment Banking & Financial Services",
            title: "Software Application Developer",
            period: "Apr 2012 - Feb 2013",
            logo: "companyLogo/LazardLogo.png",
            bullets: [
                "Built secure global document-management, metadata, and workflow solutions for enterprise collaboration.",
                "Created custom SharePoint components and repeatable PowerShell deployment practices."
            ]
        },
        {
            company: "Ernst & Young",
            industry: "Professional Services & Consulting",
            title: "Software Developer",
            period: "Jul 2011 - Apr 2012",
            logo: "companyLogo/EYLogo.png",
            bullets: [
                "Implemented SharePoint document automation, workflows, and publishing controls for enterprise delivery.",
                "Customized ribbon experiences and reusable components to simplify business processes and content operations."
            ]
        }
    ],
    credentials: [
        ["Microsoft Power Platform Solution Architect Expert", "2024"],
        ["Microsoft Power Platform Developer Associate", "Microsoft"],
        ["UiPath Certified RPA Developer", "2022"],
        ["Nintex Workflow Pro Certified", "2021"],
        ["K2 Certified Architect", "2021"],
        ["Microsoft SharePoint Developer Certifications", "2010 / 2013"]
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const siteHeader = document.querySelector(".site-header");
    const heroPortrait = document.querySelector(".portrait-card");
    const portraitObserver = new IntersectionObserver(entries => {
        siteHeader.classList.toggle("show-profile", !entries[0].isIntersecting);
    }, { threshold: .2 });
    portraitObserver.observe(heroPortrait);

    const themeToggle = document.getElementById("theme-toggle-v2");
    const themeColor = document.querySelector('meta[name="theme-color"]');
    function syncThemeControl() {
        const dark = document.documentElement.dataset.theme === "dark";
        themeToggle.setAttribute("aria-pressed", String(dark));
        themeToggle.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
        themeColor?.setAttribute("content", dark ? "#0b1427" : "#f4f7fc");
    }
    syncThemeControl();
    themeToggle.addEventListener("click", () => {
        const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
        document.documentElement.dataset.theme = next;
        localStorage.setItem("kp-profile-v2-theme", next);
        syncThemeControl();
    });

    const menuToggle = document.getElementById("menu-toggle-v2");
    const mobileNav = document.getElementById("mobile-nav-v2");
    function setMenuOpen(open) {
        mobileNav.classList.toggle("open", open);
        menuToggle.setAttribute("aria-expanded", String(open));
        menuToggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
    }
    menuToggle.addEventListener("click", () => {
        setMenuOpen(!mobileNav.classList.contains("open"));
    });
    mobileNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => setMenuOpen(false)));

    document.getElementById("technology-logo-grid").innerHTML = v2Data.technologyLogos.map(item => `
        <div class="technology-logo">
            <img src="${item.icon}" alt="" aria-hidden="true">
            <span>${item.name}</span>
        </div>
    `).join("");

    document.getElementById("skill-groups").innerHTML = v2Data.skillGroups.map(group => `
        <article class="skill-group reveal">
            <div class="skill-group-header"><img src="${group.icon}" alt="" aria-hidden="true"><h3>${group.title}</h3></div>
            ${group.skills.map(([name, score]) => `
                <div class="rating-item">
                    <div class="rating-label"><span>${name}</span><span>${score}/5</span></div>
                    <div class="rating-track" role="img" aria-label="${name}: ${score} out of 5"><div class="rating-fill" data-rating-width="${score * 20}%"></div></div>
                </div>
            `).join("")}
        </article>
    `).join("");

    const projectStories = document.getElementById("project-stories");
    const projectImageIndexes = v2Data.projects.map(() => 0);
    projectStories.innerHTML = v2Data.projects.map((project, index) => `
        <article class="project-story reveal" data-project-card="${index}">
            <div class="project-visual">
                <span class="project-index">${String(index + 1).padStart(2, "0")}</span>
                <img src="${project.images[0].src}" alt="${project.images[0].alt}" loading="lazy" decoding="async" data-project-image="${index}">
                <div class="project-image-controls" aria-label="${project.title} image controls">
                    <button type="button" data-project-previous="${index}" aria-label="Previous ${project.title} image" ${project.images.length === 1 ? "disabled" : ""}>←</button>
                    <button type="button" data-project-next="${index}" aria-label="Next ${project.title} image" ${project.images.length === 1 ? "disabled" : ""}>→</button>
                    <span data-project-count="${index}">1 / ${project.images.length}</span>
                    <button class="open-gallery" type="button" data-project-gallery="${index}">Open gallery ↗</button>
                </div>
            </div>
            <div class="project-copy">
                <p class="work-type">${project.type}</p>
                <h3>${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <ul>${project.highlights.map(item => `<li>${item}</li>`).join("")}</ul>
                <div class="chip-row">${project.chips.map(item => `<span>${item}</span>`).join("")}</div>
            </div>
        </article>
    `).join("");

    function updateProjectImage(projectIndex, requestedIndex) {
        const project = v2Data.projects[projectIndex];
        const imageIndex = (requestedIndex + project.images.length) % project.images.length;
        projectImageIndexes[projectIndex] = imageIndex;
        const card = projectStories.querySelector(`[data-project-card="${projectIndex}"]`);
        const image = card.querySelector(`[data-project-image="${projectIndex}"]`);
        image.src = project.images[imageIndex].src;
        image.alt = project.images[imageIndex].alt;
        card.querySelector(`[data-project-count="${projectIndex}"]`).textContent = `${imageIndex + 1} / ${project.images.length}`;
    }

    const galleryModal = document.getElementById("project-gallery");
    const galleryTitle = document.getElementById("gallery-title");
    const galleryImage = document.getElementById("gallery-image");
    const galleryCount = document.getElementById("gallery-count");
    const galleryThumbnails = document.getElementById("gallery-thumbnails");
    const galleryPrevious = galleryModal.querySelector("[data-gallery-previous]");
    const galleryNext = galleryModal.querySelector("[data-gallery-next]");
    const galleryDialog = galleryModal.querySelector(".gallery-dialog");
    const galleryClose = galleryModal.querySelector(".gallery-close");
    const pageSurfaces = document.querySelectorAll(".site-header, #mobile-nav-v2, main, footer");
    let galleryProjectIndex = 0;
    let galleryImageIndex = 0;
    let galleryRotation = 0;
    let galleryTrigger = null;

    function applyGalleryTransform() {
        if (!galleryImage.complete || !galleryImage.naturalWidth) return;
        const shellWidth = galleryImage.parentElement.clientWidth;
        const shellHeight = galleryImage.parentElement.clientHeight;
        galleryImage.style.transform = "none";
        const imageWidth = galleryImage.offsetWidth;
        const imageHeight = galleryImage.offsetHeight;
        const quarterTurn = galleryRotation % 180 !== 0;
        const scale = quarterTurn && imageWidth && imageHeight
            ? Math.min(1, shellWidth / imageHeight, shellHeight / imageWidth) * .98
            : 1;
        galleryImage.style.transform = `rotate(${galleryRotation}deg) scale(${scale})`;
    }

    function renderGalleryImage() {
        const project = v2Data.projects[galleryProjectIndex];
        const current = project.images[galleryImageIndex];
        galleryTitle.textContent = project.title;
        galleryImage.src = current.src;
        galleryImage.alt = current.alt;
        galleryImage.onload = applyGalleryTransform;
        if (galleryImage.complete && galleryImage.naturalWidth) requestAnimationFrame(applyGalleryTransform);
        galleryCount.textContent = `${galleryImageIndex + 1} / ${project.images.length}`;
        galleryPrevious.disabled = project.images.length === 1;
        galleryNext.disabled = project.images.length === 1;
        galleryThumbnails.querySelectorAll("[data-gallery-thumbnail]").forEach((button, index) => {
            button.setAttribute("aria-current", String(index === galleryImageIndex));
        });
    }

    function openGallery(projectIndex, imageIndex, trigger) {
        galleryProjectIndex = projectIndex;
        galleryImageIndex = imageIndex;
        galleryRotation = 0;
        galleryTrigger = trigger;
        const project = v2Data.projects[projectIndex];
        galleryThumbnails.innerHTML = project.images.map((image, index) => `
            <button class="gallery-thumbnail" type="button" data-gallery-thumbnail="${index}" aria-label="View image ${index + 1}: ${image.alt}">
                <img src="${image.src}" alt="" loading="lazy" decoding="async">
            </button>
        `).join("");
        galleryModal.hidden = false;
        document.body.classList.add("gallery-open");
        pageSurfaces.forEach(surface => { surface.inert = true; });
        renderGalleryImage();
        galleryClose.focus();
    }

    function closeGallery() {
        galleryModal.hidden = true;
        document.body.classList.remove("gallery-open");
        pageSurfaces.forEach(surface => { surface.inert = false; });
        galleryImage.removeAttribute("src");
        galleryTrigger?.focus();
    }

    function stepGallery(direction) {
        const project = v2Data.projects[galleryProjectIndex];
        galleryImageIndex = (galleryImageIndex + direction + project.images.length) % project.images.length;
        galleryRotation = 0;
        projectImageIndexes[galleryProjectIndex] = galleryImageIndex;
        updateProjectImage(galleryProjectIndex, galleryImageIndex);
        renderGalleryImage();
    }

    projectStories.addEventListener("click", event => {
        const previous = event.target.closest("[data-project-previous]");
        const next = event.target.closest("[data-project-next]");
        const open = event.target.closest("[data-project-gallery]");
        if (previous) {
            const projectIndex = Number(previous.dataset.projectPrevious);
            updateProjectImage(projectIndex, projectImageIndexes[projectIndex] - 1);
        } else if (next) {
            const projectIndex = Number(next.dataset.projectNext);
            updateProjectImage(projectIndex, projectImageIndexes[projectIndex] + 1);
        } else if (open) {
            const projectIndex = Number(open.dataset.projectGallery);
            openGallery(projectIndex, projectImageIndexes[projectIndex], open);
        }
    });

    galleryModal.addEventListener("click", event => {
        if (event.target.closest("[data-gallery-close]")) closeGallery();
        if (event.target.closest("[data-gallery-previous]")) stepGallery(-1);
        if (event.target.closest("[data-gallery-next]")) stepGallery(1);
        if (event.target.closest("[data-gallery-rotate]")) {
            galleryRotation = (galleryRotation + 90) % 360;
            renderGalleryImage();
        }
        const thumbnail = event.target.closest("[data-gallery-thumbnail]");
        if (thumbnail) {
            galleryImageIndex = Number(thumbnail.dataset.galleryThumbnail);
            galleryRotation = 0;
            updateProjectImage(galleryProjectIndex, galleryImageIndex);
            renderGalleryImage();
        }
    });

    document.addEventListener("keydown", event => {
        if (galleryModal.hidden) return;
        if (event.key === "Tab") {
            const focusable = [...galleryDialog.querySelectorAll('button:not(:disabled), a[href], [tabindex]:not([tabindex="-1"])')].filter(element => element.getClientRects().length);
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (event.shiftKey && (document.activeElement === first || !galleryDialog.contains(document.activeElement))) {
                last?.focus();
                event.preventDefault();
            } else if (!event.shiftKey && (document.activeElement === last || !galleryDialog.contains(document.activeElement))) {
                first?.focus();
                event.preventDefault();
            }
        }
        if (event.key === "Escape") closeGallery();
        if (event.key === "ArrowLeft") stepGallery(-1);
        if (event.key === "ArrowRight") stepGallery(1);
        if (event.key.toLowerCase() === "r") {
            galleryRotation = (galleryRotation + 90) % 360;
            renderGalleryImage();
        }
    });
    window.addEventListener("resize", () => { if (!galleryModal.hidden) applyGalleryTransform(); });

    const experienceList = document.getElementById("experience-list-v2");
    experienceList.innerHTML = v2Data.experience.map(item => `
        <article class="experience-item reveal">
            <div class="experience-mark"><img src="${item.logo}" alt="${item.company} logo" loading="lazy" decoding="async"></div>
            <div class="experience-body">
                <h3>${item.title}</h3>
                <p class="experience-company"><span>${item.company}</span><span class="experience-industry">${item.industry}</span></p>
                <ul>${item.bullets.map(bullet => `<li>${bullet}</li>`).join("")}</ul>
            </div>
            <div class="experience-period">${item.period}</div>
        </article>
    `).join("");

    document.getElementById("company-logo-grid").innerHTML = v2Data.experience.map(item => `
        <div class="company-logo-card reveal">
            <img src="${item.logo}" alt="${item.company} logo" loading="lazy" decoding="async">
            <strong>${item.company}</strong>
            <span>${item.industry}</span>
        </div>
    `).join("");

    document.getElementById("credential-list-v2").innerHTML = v2Data.credentials.map(([name, year], index) => `
        <div class="credential-row reveal"><span>${String(index + 1).padStart(2, "0")}</span><strong>${name}</strong><small>${year}</small></div>
    `).join("");
    document.getElementById("year-v2").textContent = new Date().getFullYear();

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const observerSupported = "IntersectionObserver" in window;
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".desktop-nav a");

    function updateCounters(animate) {
        document.querySelectorAll("[data-count-v2]").forEach(counter => {
            const target = Number(counter.dataset.countV2);
            if (!animate) {
                counter.textContent = target.toLocaleString();
                return;
            }
            const start = performance.now();
            const duration = reducedMotion ? 1 : 1000;
            function update(now) {
                const progress = Math.min((now - start) / duration, 1);
                counter.textContent = Math.round(target * (1 - Math.pow(1 - progress, 3))).toLocaleString();
                if (progress < 1) requestAnimationFrame(update);
            }
            requestAnimationFrame(update);
        });
    }

    if (observerSupported) {
        document.documentElement.classList.add("js-enhanced");
        const revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("visible");
                entry.target.querySelectorAll(".rating-fill").forEach(fill => { fill.style.width = fill.dataset.ratingWidth; });
                revealObserver.unobserve(entry.target);
            });
        }, { threshold: .1 });
        document.querySelectorAll(".reveal").forEach(item => revealObserver.observe(item));

        const counterObserver = new IntersectionObserver(entries => {
            if (!entries[0].isIntersecting) return;
            updateCounters(true);
            counterObserver.disconnect();
        }, { threshold: .4 });
        counterObserver.observe(document.getElementById("proof-counters"));

        const sectionObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navLinks.forEach(link => link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`));
            });
        }, { rootMargin: "-40% 0px -52%" });
        sections.forEach(section => sectionObserver.observe(section));
    } else {
        document.querySelectorAll(".reveal").forEach(item => item.classList.add("visible"));
        updateCounters(false);
    }

    requestAnimationFrame(() => document.querySelectorAll(".rating-fill").forEach(fill => { fill.style.width = fill.dataset.ratingWidth; }));

    function alignDeepLink() {
        if (!window.location.hash) return;
        const target = document.querySelector(window.location.hash);
        if (!target) return;
        const root = document.documentElement;
        const previousBehavior = root.style.scrollBehavior;
        const headerOffset = document.querySelector(".site-header")?.offsetHeight || 0;
        root.style.scrollBehavior = "auto";
        const targetTop = target.getBoundingClientRect().top + window.scrollY - headerOffset - 8;
        window.scrollTo(0, Math.max(0, targetTop));
        requestAnimationFrame(() => { root.style.scrollBehavior = previousBehavior; });
    }

    // Dynamic project and experience cards change document height after the browser's
    // initial hash jump. Re-align once the generated content has completed layout.
    requestAnimationFrame(() => requestAnimationFrame(alignDeepLink));
    window.setTimeout(alignDeepLink, 180);
    window.setTimeout(alignDeepLink, 750);
    window.addEventListener("load", alignDeepLink, { once: true });
    window.addEventListener("pageshow", () => window.setTimeout(alignDeepLink, 0));
    window.addEventListener("hashchange", alignDeepLink);
    document.fonts?.ready.then(alignDeepLink);

});
