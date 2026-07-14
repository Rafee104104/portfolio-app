export type NavigationItem = {
  readonly label: string;
  readonly href: `#${string}`;
};

export type ProjectLink = {
  readonly label: "Repository" | "Live site" | "Demo";
  readonly href: `https://${string}`;
};

export type Project = {
  readonly slug: string;
  readonly title: string;
  readonly category: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly links: readonly ProjectLink[];
};

export type CapabilityGroup = {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly items: readonly string[];
};

export type ExperienceEntry = {
  readonly role: string;
  readonly company: string;
  readonly period: string;
  readonly location: string;
  readonly summary: string;
  readonly highlights: readonly string[];
};

export type EducationEntry = {
  readonly degree: string;
  readonly institution: string;
  readonly period: string;
  readonly result: string;
};

export type CredentialKind = "Internship" | "Certificate" | "Recommendation";

export type Credential = {
  readonly title: string;
  readonly issuer: string;
  readonly year: string;
  readonly kind: CredentialKind;
  readonly description: string;
  readonly href?: `https://${string}`;
};

export type ResearchEntry = {
  readonly title: string;
  readonly authors: string;
  readonly paperUrl: `https://${string}`;
};

export const personal = {
  name: "Tasnim Munawar Rafee",
  initials: "TMR",
  title: "Full-Stack Software Engineer",
  location: "Dhaka, Bangladesh",
  currentPosition: "Full-Stack Developer & Software Support at Beta Solution",
  summary:
    "Early-career full-stack software engineer with hands-on experience building and supporting web, desktop, and database-driven applications. Comfortable working across Next.js, React, TypeScript, .NET Core, C#, PHP, Laravel, and Oracle PL/SQL. Project experience includes integrating fingerprint devices with Oracle, developing hospital and business websites, and deploying applications through Vercel and Netlify. Brings practical problem-solving, clear communication, and a steady learning mindset to junior software engineering roles.",
  portraitPath: "/Tasnim-Munawar-Rafee.jpg",
  email: "tasnimmunawarrafee@gmail.com",
  emailHref: "mailto:tasnimmunawarrafee@gmail.com",
  phone: "+880 1744 127891",
  phoneHref: "tel:+8801744127891",
  githubUrl: "https://github.com/Rafee104104",
  linkedinUrl: "https://www.linkedin.com/in/tasnim-munawar-rafee/",
  youtubeUrl: "https://www.youtube.com/@TasnimMunawarRafee",
  siteUrl: "https://www.rafeeportfolio.com",
  referencesNote: "Professional references are available on request.",
} as const;

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "Profile", href: "#profile" },
  { label: "Contact", href: "#contact" },
] as const satisfies readonly NavigationItem[];

export const projects = [
  {
    slug: "fingerprint-data-transporter",
    title: "Fingerprint Data Transporter",
    category: "Device and database integration",
    description:
      "Receives fingerprint records from ZKT devices and exports them to Oracle through desktop and background-service workflows.",
    technologies: [".NET Core", "C#", "Windows Forms", "Worker Service", "Oracle"],
    links: [
      {
        label: "Repository",
        href: "https://github.com/Rafee104104/FingerPrint__32Bit_Production_Complete",
      },
      { label: "Demo", href: "https://youtu.be/0_pHG7Fchbo" },
    ],
  },
  {
    slug: "beta-solution-website",
    title: "Beta Solution Website",
    category: "Business website",
    description:
      "Business website with an Oracle-backed, Zod-validated contact form; Hostinger DNS and Vercel CI/CD deployment.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Oracle PL/SQL", "Zod"],
    links: [{ label: "Live site", href: "https://www.betasolutionbd.com/" }],
  },
  {
    slug: "mercy-general-hospital",
    title: "Mercy General Hospital",
    category: "Healthcare website",
    description:
      "Responsive hospital website presenting services, facility details, contacts, and location access.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Repository", href: "https://github.com/Rafee104104/MercyGeneralHospital" },
      { label: "Live site", href: "https://mercy-general-hospital.vercel.app/" },
    ],
  },
  {
    slug: "quick-notes",
    title: "Quick Notes",
    category: "Productivity application",
    description:
      "Everyday note-taking application with local data handling and a clean responsive interface.",
    technologies: ["Svelte", "IndexedDB", "Prisma ORM", "Tailwind CSS"],
    links: [
      { label: "Repository", href: "https://github.com/Rafee104104/Quick_Notes" },
      { label: "Demo", href: "https://fs.blabigo.org/s/3hSTK293" },
    ],
  },
  {
    slug: "photopia",
    title: "Photopia",
    category: "Photo-sharing application",
    description:
      "Photo-sharing application where users publish filtered images with accompanying text.",
    technologies: ["SvelteKit", "Prisma ORM", "Tailwind CSS", "HTML5"],
    links: [
      { label: "Repository", href: "https://github.com/Rafee104104/Photopia" },
      { label: "Demo", href: "https://fs.blabigo.org/s/rHl1AhbB" },
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    category: "Professional portfolio",
    description:
      "Personal portfolio presenting software projects, technical skills, and professional background.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    links: [
      { label: "Repository", href: "https://github.com/Rafee104104/portfolio-app" },
      { label: "Live site", href: "https://portfolio-app-lac-seven.vercel.app/" },
    ],
  },
] as const satisfies readonly Project[];

export const capabilityGroups = [
  {
    id: "frontend",
    title: "Frontend",
    description: "Responsive, component-driven interfaces across modern React and Svelte ecosystems.",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Svelte",
      "SvelteKit",
      "Tailwind CSS",
      "Bootstrap",
      "HTML",
      "CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Server-side and business application development across .NET, PHP, and JavaScript runtimes.",
    items: ["C#", ".NET Core", "ASP.NET Core MVC", "PHP", "Laravel", "Node.js", "Java"],
  },
  {
    id: "data-integration",
    title: "Data and integration",
    description: "Relational data work and practical integrations between business systems, databases, and devices.",
    items: [
      "Oracle PL/SQL",
      "Oracle APEX",
      "Oracle Forms 6i",
      "SQL Server",
      "SQLite",
      "MySQL",
      "MongoDB",
      "Prisma ORM",
      "ZKT device integration",
    ],
  },
  {
    id: "delivery-foundations",
    title: "Delivery and foundations",
    description: "Version control, API testing, validation, deployment, and foundational programming.",
    items: ["Git", "GitHub", "Postman", "Vercel", "Netlify", "CI/CD", "Zod", "C", "C++", "Python"],
  },
] as const satisfies readonly CapabilityGroup[];

export const experience = [
  {
    role: "Full-Stack Developer & Software Support",
    company: "Beta Solution",
    period: "May 2026 — Present",
    location: "Dhaka, Bangladesh",
    summary: "Builds and supports enterprise software and web systems spanning .NET, Oracle, and Next.js.",
    highlights: [
      "Build and support enterprise software with .NET Core, C#, Oracle Forms 6i, Oracle APEX, and Oracle PL/SQL.",
      "Develop integrated, database-driven modules and workflows that move device data into company databases.",
      "Build company websites with Next.js, React, TypeScript, Tailwind CSS, and Node.js.",
    ],
  },
  {
    role: "Backend Software Engineer Intern",
    company: "DeshIT-BD",
    period: "January 2026 — April 2026",
    location: "Dhaka, Bangladesh",
    summary: "Completed a backend development internship focused on PHP and Laravel delivery practices.",
    highlights: [
      "Delivered PHP and Laravel tasks with attention to clean, maintainable code and agreed timelines.",
      "Collaborated with developers, managers, and QA through regular progress and blocker communication.",
      "Followed team coding standards while contributing to performance, security, and overall software quality.",
    ],
  },
  {
    role: "IT Support Executive",
    company: "Mercy General Hospital D.Lab & Consultation Centre",
    period: "August 2024 — December 2025",
    location: "Dhaka, Bangladesh",
    summary: "Supported the hospital's daily software, hardware, website, and digital-presence needs.",
    highlights: [
      "Supported third-party software applications and hardware used by hospital staff.",
      "Communicated with patients and staff to resolve day-to-day software support needs.",
      "Built the hospital website with Next.js, TypeScript, and Tailwind CSS, and maintained its Facebook page and Google Maps listing.",
    ],
  },
  {
    role: "Full-Stack Developer Intern",
    company: "Meta Craftlab",
    period: "June 2024 — July 2024",
    location: "Mumbai, India (Remote)",
    summary: "Worked across Svelte applications, API testing, and database-backed product development.",
    highlights: [
      "Developed responsive web applications with Svelte and SvelteKit.",
      "Used Postman for API testing and integration workflows.",
      "Worked with SQLite and Prisma ORM to maintain data accuracy and consistency.",
    ],
  },
] as const satisfies readonly ExperienceEntry[];

export const education = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Ahsanullah University of Science and Technology",
    period: "2020–2024",
    result: "CGPA 3.005 / 4.00",
  },
  {
    degree: "Higher Secondary Certificate in Science",
    institution: "Kabi Nazrul Government College",
    period: "2017–2019",
    result: "GPA 4.42 / 5.00",
  },
] as const satisfies readonly EducationEntry[];

export const credentials = [
  {
    title: "Backend Developer Internship",
    issuer: "DeshIT-BD",
    year: "2026",
    kind: "Internship",
    description: "Three-month backend development internship focused on PHP and Laravel.",
  },
  {
    title: "Summer Internship Program",
    issuer: "Meta Craftlab",
    year: "2024",
    kind: "Internship",
    description: "Full-stack development internship program covering product delivery and team collaboration.",
  },
  {
    title: "Letter of Recommendation",
    issuer: "Meta Craftlab",
    year: "2024",
    kind: "Recommendation",
    description: "Recommendation issued following the 2024 full-stack development internship.",
  },
  {
    title: "Mastering Svelte Fundamentals",
    issuer: "Meta Craftlab",
    year: "2024",
    kind: "Certificate",
    description: "Credential covering dynamic, responsive application development with Svelte and Tailwind CSS.",
    href: "https://verify.netcredential.com/q6a4VAd2Ts",
  },
  {
    title: "Mastering SvelteKit Fundamentals",
    issuer: "Meta Craftlab",
    year: "2024",
    kind: "Certificate",
    description: "Credential covering full-stack SvelteKit applications and database integration with Prisma ORM.",
    href: "https://verify.netcredential.com/q6a4djVmUW",
  },
] as const satisfies readonly Credential[];

export const research = [
  {
    title: "A Comprehensive Study on Bengali Music Genre Classification Utilizing Ensemble Approach",
    authors: "Mohammad Tanveer Shams, Syeda Farhana Ali, et al.",
    paperUrl: "https://drive.google.com/file/d/1vaZmrn9zler5KOm3Hcf3QrS1bYs_pjHZ/view?usp=sharing",
  },
] as const satisfies readonly ResearchEntry[];

export const strengths = [
  "Teamwork",
  "Time management",
  "Problem-solving",
  "Work ethic",
  "Critical thinking",
  "Creativity",
  "Adaptability",
  "Logical reasoning",
  "Communication",
] as const;

export const languages = ["Bengali (native)", "English"] as const;
