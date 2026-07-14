# Master Build Prompt: Tasnim Munawar Rafee Portfolio

## Role

Act as a principal product designer, frontend architect, motion designer, accessibility specialist, and technical copywriter with 25 years of professional experience. Rewrite the existing repository into a complete production portfolio for Tasnim Munawar Rafee. Execute this prompt directly in the repository; do not return a concept-only answer.

## Outcome

Build a formal, classic, recruiter-friendly portfolio that feels individually authored. Position Tasnim as an early-career full-stack software engineer with practical experience across modern web products, .NET/C# business software, Oracle-backed systems, device-to-database integration, deployment, and software support.

The site must be calm, credible, precise, and human. It must not look like a generic AI-generated developer template or a gallery of disconnected UI effects.

## Source hierarchy

1. Treat `Tasnim_Munawar_Rafee_Professional_CV.pdf` as the authoritative content source.
2. Use the newer FlowCV PDF only for supplementary facts that do not conflict with the professional CV.
3. Do not invent metrics, impact, clients, testimonials, availability, team size, dates, screenshots, or links.
4. Keep the full street address, date of birth, nationality, marital status, and reference contacts off the public website.
5. Use the authentic `/Tasnim-Munawar-Rafee.jpg` portrait. Do not use `/2.jpg`, which has a visible synthetic retouch mark.

## Production stack

- Next.js 16.2.10 with App Router and Server Components by default
- React and React DOM 19.2.7
- TypeScript 5.9.3 in strict mode, selected as the latest production-safe version for current Next tooling
- Tailwind CSS and `@tailwindcss/postcss` 4.3.2 with CSS-first tokens
- Motion 12.42.2, imported from `motion/react`; do not also install `framer-motion`
- shadcn CLI 4.13.0 with the Radix base and source-owned components
- Unified `radix-ui` 1.6.2
- Lucide React 1.24.0
- next-themes 0.4.6

Align `eslint-config-next` with Next.js. Remove Font Awesome and obsolete custom animation/theme code when the replacement is complete.

## Architecture

- Keep `app/page.tsx` server-first.
- Put all resume content in one typed data module.
- Keep section components mostly server-rendered.
- Isolate theme, menu, tooltips, and animation in small client components.
- Build reusable primitives for section headings, motion reveals, external links, project cards, timeline items, and capability groups.
- Use `next/image` for the portrait and `next/font` for typography.
- Add shadcn Button, Badge, Card, Separator, Sheet, and Tooltip components.
- Install the requested `@skiper-ui/skiper40` registry item, retain its required attribution, and refactor its restrained underline-link pattern for correct internal/external behavior, focus visibility, and reduced motion.
- Keep dependencies lean. Do not install unrelated libraries only to claim they are present.

## Design direction

Create a light-first classic editorial system with a polished dark option.

- Warm ivory paper background, deep navy/ink text, muted stone borders, restrained oxblood accent, and subtle antique-gold detail
- A literary serif for display headings and a clean sans-serif for body/UI text
- Fine rules, balanced whitespace, strong typographic hierarchy, bookplate-style labels, restrained corner details, and disciplined grids
- Square-to-soft geometry, not excessive pills or glass panels
- Formal portrait framing with a subtle archival/editorial treatment
- Quiet technical linework or drafting-grid texture instead of neon blobs, auroras, particles, or generic purple gradients
- No fake terminal, typing gimmick, skill percentages, floating emoji, giant glow, stock imagery, or nested-card clutter

The default experience should resemble a considered professional profile or engineering dossier, not a SaaS dashboard.

## UI ecosystem mapping

Use the user's requested ecosystem selectively and cohesively:

- shadcn/ui and Radix: accessibility and structural primitives
- Skiper UI 40: understated animated text links, with attribution preserved
- Aceternity UI and Roadmap UI: inspiration for the career timeline, simplified into a classic editorial line
- Magic UI or React Bits: one shared viewport-reveal language, implemented through Motion rather than duplicate systems
- Launch UI and shadcn blocks: inspiration for the hero and contact composition
- Kokonut UI, Origin UI, Indie UI, LuxeUI, and BundUI: inspiration for compact card anatomy, badges, and restrained interactions
- Backseasy, Fancy Components, and Rombo: inspiration for one quiet background/motion treatment using local CSS and Motion

Do not force Cropper, Sortable, Tree View, AI Input, NativeWind, NativeWindUI, GlueStack, charts, file uploaders, or mobile-native components into a portfolio that has no functional need for them. Cohesion and accessibility take priority over component count.

## Page structure

### Global shell

- Sticky responsive header with a compact TMR monogram/wordmark
- Navigation for Work, Expertise, Experience, Profile, and Contact
- Theme toggle with an accessible tooltip
- Contact CTA
- Radix Sheet mobile navigation
- Motion scroll-progress indicator
- Skip-to-content link, visible focus states, correct anchor offsets, and 44px touch targets
- Responsive behavior from 320px phones through large desktops

### Hero

- Name: Tasnim Munawar Rafee
- Title: Full-Stack Software Engineer
- Location: Dhaka, Bangladesh
- Current signal: Full-Stack Developer & Software Support at Beta Solution
- Use this authoritative summary:

  "Early-career full-stack software engineer with hands-on experience building and supporting web, desktop, and database-driven applications. Comfortable working across Next.js, React, TypeScript, .NET Core, C#, PHP, Laravel, and Oracle PL/SQL. Project experience includes integrating fingerprint devices with Oracle, developing hospital and business websites, and deploying applications through Vercel and Netlify. Brings practical problem-solving, clear communication, and a steady learning mindset to junior software engineering roles."

- Primary actions: view selected work and email Tasnim
- Secondary actions: GitHub and LinkedIn
- Use `/Tasnim-Munawar-Rafee.jpg` with `next/image`
- Include one restrained motion graphic that connects web, application, and data layers; content must remain complete when reduced motion is enabled

### Selected work

Feature the professional CV's curated projects in this order. Show truthful role/context, technology, and verified links only.

1. Fingerprint Data Transporter
   - .NET Core, C#, Windows Forms, Worker Service, Oracle
   - Receives fingerprint records from ZKT devices and exports them to Oracle through desktop and background-service workflows.
   - Repository: https://github.com/Rafee104104/FingerPrint__32Bit_Production_Complete
   - Demo: https://youtu.be/0_pHG7Fchbo
2. Beta Solution Website
   - Next.js, React, TypeScript, Tailwind CSS, Oracle PL/SQL, Zod
   - Business website with an Oracle-backed, Zod-validated contact form; Hostinger DNS and Vercel CI/CD deployment.
   - Live: https://www.betasolutionbd.com/
3. Mercy General Hospital
   - Next.js, React, TypeScript, Tailwind CSS
   - Responsive hospital website presenting services, facility details, contacts, and location access.
   - Repository: https://github.com/Rafee104104/MercyGeneralHospital
   - Live: https://mercy-general-hospital.vercel.app/
4. Quick Notes
   - Svelte, IndexedDB, Prisma ORM, Tailwind CSS
   - Everyday note-taking application with local data handling and a clean responsive interface.
   - Repository: https://github.com/Rafee104104/Quick_Notes
   - Demo: https://fs.blabigo.org/s/3hSTK293
5. Photopia
   - SvelteKit, Prisma ORM, Tailwind CSS, HTML5
   - Photo-sharing application where users publish filtered images with accompanying text.
   - Repository: https://github.com/Rafee104104/Photopia
   - Demo: https://fs.blabigo.org/s/rHl1AhbB
6. Portfolio Website
   - Next.js, React, TypeScript, Tailwind CSS
   - Personal portfolio presenting software projects, technical skills, and professional background.
   - Repository: https://github.com/Rafee104104/portfolio-app
   - Live: https://portfolio-app-lac-seven.vercel.app/

Do not fabricate project screenshots. When none exist, use a deliberate typographic/diagrammatic card with a unique index, system label, and restrained technical motif.

### Expertise

Group capability by working domain, not percentage or badge clouds.

- Frontend: JavaScript, TypeScript, React, Next.js, Svelte, SvelteKit, Tailwind CSS, Bootstrap, HTML, CSS
- Backend: C#, .NET Core, ASP.NET Core MVC, PHP, Laravel, Node.js, Java
- Data and integration: Oracle PL/SQL, Oracle APEX, Oracle Forms 6i, SQL Server, SQLite, MySQL, MongoDB, Prisma ORM, ZKT device integration
- Delivery and foundations: Git, GitHub, Postman, Vercel, Netlify, CI/CD, Zod, C, C++, Python

### Experience

Build an accessible editorial timeline.

1. Beta Solution - Full-Stack Developer & Software Support - May 2026 to Present - Dhaka, Bangladesh
2. DeshIT-BD - Backend Software Engineer Intern - January 2026 to April 2026 - Dhaka, Bangladesh
3. Mercy General Hospital D.Lab & Consultation Centre - IT Support Executive - August 2024 to December 2025 - Dhaka, Bangladesh
4. Meta Craftlab - Full-Stack Developer Intern - June 2024 to July 2024 - Mumbai, India (Remote)

Use the professional CV's achievement bullets. Preserve early-career scope; improve grammar without inflating seniority.

### Profile, education, research, and credentials

- B.Sc. in Computer Science and Engineering, Ahsanullah University of Science and Technology, 2020-2024, CGPA 3.005/4.00
- Higher Secondary Certificate in Science, Kabi Nazrul Government College, 2017-2019, GPA 4.42/5.00
- Research: "A Comprehensive Study on Bengali Music Genre Classification Utilizing Ensemble Approach," Mohammad Tanveer Shams, Syeda Farhana Ali, et al.
- Paper: https://drive.google.com/file/d/1vaZmrn9zler5KOm3Hcf3QrS1bYs_pjHZ/view?usp=sharing
- Backend Developer Internship, DeshIT-BD (2026)
- Summer Internship Program, Meta Craftlab (2024)
- Letter of Recommendation, Meta Craftlab (2024)
- Mastering Svelte Fundamentals: https://verify.netcredential.com/q6a4VAd2Ts
- Mastering SvelteKit Fundamentals: https://verify.netcredential.com/q6a4djVmUW
- Languages: Bengali (native), English
- Strengths: teamwork, time management, problem-solving, work ethic, critical thinking, creativity, adaptability, logical reasoning, communication

### Contact

- Email: tasnimmunawarrafee@gmail.com
- Phone: +880 1744 127891
- GitHub: https://github.com/Rafee104104
- LinkedIn: https://www.linkedin.com/in/tasnim-munawar-rafee/
- YouTube: https://www.youtube.com/@TasnimMunawarRafee
- Location: Dhaka, Bangladesh

Finish with a decisive contact CTA and a concise footer. Mention that professional references are available on request; do not publish their details.

## Motion rules

- Use Motion for hero choreography, scroll progress, section reveals, timeline entry, project-card feedback, and one technical ambient visual.
- Prefer opacity and transform; animate wrappers rather than complex SVG paths.
- Keep timing restrained and consistent.
- Use `useReducedMotion` plus CSS fallbacks.
- Never hide essential content until JavaScript or intersection observers run.

## Copy rules

- Use concise, natural English with varied sentence rhythm.
- Remove phrases that describe the website technology instead of the person.
- Never call the candidate a novice.
- Never fabricate experience, outcomes, or confidence claims.
- Use consistent technical spelling: TypeScript, JavaScript, GitHub, SQLite, ASP.NET Core, .NET Core.

## SEO, privacy, and accessibility

- Add title template, description, canonical URL, keywords, Open Graph, and Twitter metadata.
- Use `https://www.rafeeportfolio.com` as the canonical site origin while preserving the repository's CNAME.
- Add `robots.ts`, `sitemap.ts`, a custom Open Graph image, and Person/WebSite JSON-LD.
- Use semantic landmarks and one H1.
- Ensure keyboard navigation, accessible names, sufficient contrast, visible focus, reduced motion, and no horizontal overflow.
- Do not publicly render private CV-only details or reference contacts.

## Acceptance criteria

The implementation is complete only when:

1. The visible site is substantially redesigned and rewritten from the authoritative professional CV.
2. The design is formal, classic, responsive, and coherent rather than template-like.
3. shadcn/Radix primitives, Skiper40-derived links, Motion, Lucide, Tailwind, and Next.js are installed and actually used.
4. Mobile navigation, theme switching, external links, email/phone actions, and section anchors work.
5. Sensitive CV-only fields are absent from public UI and metadata.
6. Core content remains visible with JavaScript delays or reduced motion.
7. ESLint, strict TypeScript checking, and `next build` pass.
8. Desktop and mobile screenshots are visually reviewed and obvious overflow, contrast, and console issues are corrected.
9. README documents the stack, design rationale, attribution, and local commands.
10. Existing unrelated user work is preserved.
