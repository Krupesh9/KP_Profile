# Profile review guide

Nothing in this update has been committed or pushed.

## Versions

- `index.html` — the balanced AI + Power Platform profile promoted for GitHub Pages.
- `profile-v2.html` — a backward-compatible review URL that redirects to the canonical root page, preserving query strings and section anchors.
- The original checked-in profile remains available in Git `HEAD` until a version is approved.

### Current profile redesign

- Light theme is the default, with a persistent icon-only control for switching to the dark theme.
- The header now follows the earlier live profile closely: stacked KP identity, rounded navigation tray, white active tab, and compact moon/sun control.
- Once the hero portrait scrolls out of view, the KP badge changes to the same profile photograph so Krupesh remains visually identifiable throughout the page.
- Tablet and mobile navigation now use an icon-only hamburger aligned at the far right; the menu closes after a destination is selected.
- Google Fonts: **Plus Jakarta Sans** for display text and **Source Sans 3** for body copy.
- Static AI-color gradients on major headings; only the role title animates.
- Tall, narrow portrait with no dark inner border, a subtle 180-degree Gemini Aurora edge animation, and minimal ambient glow.
- AI/Copilot and Generative AI badges, the verified Green Card EAD line, and the email/phone/LinkedIn pills now use the same icon-led visual language as the earlier live profile.
- Contact pills size to their content, use larger icons, and wrap cleanly without horizontal overflow.
- Eight animated proof counters now include 125+ completed projects, 200+ dedicated AI agents, 30+ Power Apps/canvas apps, 50+ Power Automate optimizations, and 1,200+ SharePoint sites migrated.
- The equal-size blue detailed-resume download and white one-page-profile view actions now sit beneath the technology-ecosystem statement instead of competing with the hero identity and contact controls.
- The eight icon-led proof counters display as two rows of four on desktop and four rows of two on mobile.
- Six full project stories each show a description, five achievement bullets, technology tags, and a project-image carousel.
- Every project can open a responsive image gallery with thumbnails, previous/next controls, keyboard navigation, and 90-degree rotation.
- Experience cards retain the useful date-pill, company-logo, role, and achievement hierarchy from the earlier live profile, now with industry labels and multiple bullets for every employer.
- Skills now include dedicated API integration, REST/GraphQL, Angular, responsive UI architecture, and UI/UX experience-design ratings.
- Technology and contact sections use light Gemini Aurora surfaces so official marks and action controls remain clear.
- Dark mode reuses the former profile's proven `invert(1) hue-rotate(180deg)` treatment for company and experience marks, while keeping the logo containers transparent instead of placing visible white boxes behind them.
- Dark-theme technology labels, the LinkedIn icon, and the education panel now use dedicated high-contrast colors rather than inheriting unsuitable light-theme values.
- Direct links such as `#work` and `#experience` re-align after dynamic content loads on desktop and mobile.
- The production portrait is optimized from a 4.3 MB source to a 76 KB display asset, and a lightweight SVG favicon prevents the browser from downloading the full portrait twice.
- Below-fold project and company imagery loads lazily; the gallery traps keyboard focus, restores it on close, and keeps all controls at least 44×44 pixels.
- The new one-page resume is a responsive full-page HTML artifact with rounded cards, an Ayden-inspired left profile rail, a clear right experience column, rated skills, project impact, and ATS-readable text. Its verified Letter PDF is one page.

The former checked-in profile is preserved on the Git branch `old-version`; the approved profile is released from `2026` and promoted to `main`.

## V2 color scheme

V2 now uses one fixed **Gemini Aurora Professional** scheme:

- Light professional foundations by default, with a polished dark-theme counterpart.
- Google-inspired blue, violet, magenta, and warm orange accents.
- Static gradients on important headings and rating bars.
- Animation limited to the role title and portrait aura/ring.
- No palette selector; the only appearance control is the icon-only light/dark switch.

## Public downloads

The HTML profile exposes exactly two primary actions:

- `resume/Krupesh_Patel_AI_and_Power_Platform_Resume_V2.pdf`
- `resume/Krupesh_Patel_AI_and_Power_Platform_One_Page_V2.html` (with PDF download/print actions inside)

The dynamic cover letter remains a private local artifact. It is ignored by Git and is not linked or published through either public HTML page.

## Regression status

The V2 profile was exercised at desktop (1440×1000), tablet (834×1112), and mobile (390×844) sizes in both light and dark themes. The current run reports:

- No browser-console errors, broken images, horizontal overflow, or low-contrast text failures.
- No visible clipped text and no interactive targets below 44×44 pixels.
- Working theme switch, desktop navigation, mobile hamburger navigation, scroll-aware header portrait, project carousel, gallery navigation, image rotation, resume download, and one-page profile link.
- A fail-closed browser test now rejects releases for broken assets, contrast failures, clipped text, undersized controls, dark-theme logo tiles, incorrect résumé-action sizing or placement, redirect breakage, or failed interactions.
- Official company marks retain their proportions and remain readable in both themes without the oversized white logo boxes shown in the earlier dark-theme review.

## Rollback

Because the work is uncommitted, the checked-in original can be restored at any time. Do not run a restore until the desired version is confirmed, because it would discard the current working drafts of the same files.

## Rebuild documents

Run `tools/build_resumes.py` with the bundled workspace Python runtime. It rebuilds the detailed Word resume, Ayden-inspired one-page Word resume, and private dynamic cover-letter template. The two earlier one-page builders remain in the script for rollback; the current entry point uses `build_one_page_resume_ayden()`. The PDFs in `resume/` were generated through the document render-and-verify workflow.
