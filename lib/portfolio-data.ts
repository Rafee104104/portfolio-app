export type Theme = "light" | "dark";

export type NavLink = {
  name: string;
  href: string;
};

export type DetailItem = {
  label: string;
  value: string;
};

export type EducationItem = {
  degree: string;
  institution: string;
  years: string;
  result: string;
};

export type SkillGroup = {
  category: string;
  icon: string;
  summary: string;
  list: string[];
};

export type ExperienceItem = {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  side: "left" | "right";
};

export type ProjectItem = {
  title: string;
  tech: string[];
  desc: string;
  demoUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
};

export type ResearchItem = {
  title: string;
  authors: string;
};

export type CertificateItem = {
  title: string;
  description: string;
  link?: string;
};

export type ReferenceItem = {
  name: string;
  title: string;
  contact: string;
};

export const personalData = {
  name: "Tasnim Munawar Rafee",
  title: "Full-Stack Software Engineer",
  roles: [
    "Full-Stack Software Engineer",
    "Full Stack Developer and Software Support",
    ".NET Core and C# Developer",
    "Next.js and React.js Developer",
    "IT Support Executive",
    "PHP Laravel Developer",
  ],
  location: "Dhaka, Bangladesh",
  fullAddress: "358/1, Khandokar Road, Shyampur, Jurain, Dhaka 1204",
  phone: "+8801744127891",
  email: "tasnimmunawarrafee@gmail.com",
  githubHandle: "Rafee104104",
  githubUrl: "https://github.com/Rafee104104",
  linkedinUrl: "https://www.linkedin.com/in/tasnim-munawar-rafee/",
  youtubeUrl: "https://www.youtube.com/@TasnimMunawarRafee",
  portfolioUrl: "https://portfolio-app-lac-seven.vercel.app/",
  dateOfBirth: "28th August 2000",
  nationality: "Bangladeshi",
  maritalStatus: "Married",
  imagePath: "/2.jpg",
  avatarPath: "/D.N.107880.jpg",
  profileSummary:
    "Dedicated novice in computer science and engineering, possessing a moderate proficiency in programming and development tools, along with a basic understanding of data science and machine learning. Competent in a variety of abilities ranging from fundamental to intermediate. Eager to learn and adapt new skills, with a recognized moderate level of critical thinking, logical reasoning and problem-solving skillset.",
};

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export const heroStats: DetailItem[] = [
  { label: "Portfolio Projects", value: "7" },
  { label: "Primary Focus", value: "Full Stack + Support" },
  { label: "Location", value: "Dhaka" },
];

export const personalDetails: DetailItem[] = [
  { label: "Date of Birth", value: personalData.dateOfBirth },
  { label: "Nationality", value: personalData.nationality },
  { label: "Marital Status", value: personalData.maritalStatus },
];

export const education: EducationItem[] = [
  {
    degree: "B.Sc. in Computer Science and Engineering",
    institution: "Ahsanullah University of Science and Technology",
    years: "2020-2024",
    result: "CGPA: 3.005 / 4.00",
  },
  {
    degree: "H.S.C in Science",
    institution: "Kabi Nazrul Govt. College",
    years: "2017-2019",
    result: "GPA: 4.42 / 5.00",
  },
  {
    degree: "Dakhil (Equivalent S.S.C.) in Science",
    institution: "Tamirul Millat Kamil Madrasah",
    years: "2015-2017",
    result: "GPA: 5.00 / 5.00",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Programming Languages",
    icon: "code",
    summary: "Core syntax, algorithms, scripting, and backend fundamentals.",
    list: ["C", "C#", "C++", "Python", "Java", "Javascript", "PHP"],
  },
  {
    category: "Databases",
    icon: "database",
    summary: "Relational queries, schema work, and practical data handling.",
    list: ["Oracle PL/SQL", "MS SQL Server", "SQL Lite", "MySQL"],
  },
  {
    category: "Frameworks",
    icon: "layer",
    summary: "Framework-driven UI and server development workflows.",
    list: ["iGraphics", "ASP .Net Core MVC", "Bootstrap", "Laravel", "Tailwind", "Svelte.js", "React.js", "Next.js", "Node.js"],
  },
  {
    category: "Web Development",
    icon: "server",
    summary: "Responsive pages, scripting, server-side PHP, and practical web workflows.",
    list: ["HTML5", "CSS3"],
  },
  {
    category: "Version Control System",
    icon: "gear",
    summary: "Versioning and repository workflows for daily development.",
    list: ["Git", "Github", "Github Desktop"],
  },
  {
    category: "Miscellaneous",
    icon: "gear",
    summary: "Office, design, documentation, and productivity tools.",
    list: ["MS Office", "MS Excel", "Adobe Photoshop & Illustrator", "LaTeX"],
  },
  {
    category: "Tools",
    icon: "gear",
    summary: "Practical delivery tools for API testing, coordination, and data workflows.",
    list: ["Postman API", "Slack", "Prisma ORM", "Git", "Github", "Github Desktop"],
  },
];

export const qualities = [
  "Teamwork",
  "Time Management",
  "Problem Solving",
  "Work Ethic",
  "Critical Thinking",
  "Creativity",
  "Adaptability",
  "Logical Reasoning",
  "Communication",
];

export const languages = ["Bengali (Native)", "English"];

export const experience: ExperienceItem[] = [
  {
    title: "Full Stack Developer and Software Support",
    company: "Beta Solution",
    duration: "May 2026 - Present",
    location: "Hazi Badsha Mia Rd, Signboard",
    description:
      "Build and support enterprise software solutions with .NET Core, Oracle Forms 6i, Oracle APEX, Oracle PL/SQL, and C#. Develop integrated modules and database-driven applications, extract machine data, import it into company databases using .NET Core and C#, and build company websites with Next.js, TypeScript, Tailwind CSS, Node.js, and React.js.",
    side: "right",
  },
  {
    title: "Backend Software Engineer Intern",
    company: "Shamsul Alam",
    duration: "January 2026 - April 2026",
    location: "House D, 36 Zakir Hossain Road, Dhaka 1205",
    description:
      "PHP Laravel Web Development Intern role from DeshIT_BD Company. Responsibilities include delivering PHP Laravel tasks on time with clean, efficient, and scalable code following best practices. Communicate regularly with the team, attend meetings punctually, and share progress or blockers. Collaborate with developers, managers, and QA, follow coding standards, and proactively improve performance, security, and overall system quality.",
    side: "left",
  },
  {
    title: "IT Support Executive",
    company: "Mercy General Hospital D.Lab & Consultation Centre",
    duration: "August 2024 - December 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Worked on the hospital's third-party software application and hardware support, communicated with patients and staff for proper software support management, created the company website using Next.js, TypeScript and Tailwind CSS, deployed it on Netlify, managed the hospital Facebook page, and maintained the Google Maps location.",
    side: "right",
  },
  {
    title: "Intern Full-Stack Developer",
    company: "Hannan Satopay (Meta Craftlab)",
    duration: "June 1, 2024 - July 12, 2024",
    location: "Mumbai, India",
    description:
      "Developed web applications using Svelte.js and Svelte Kit, optimized speed and efficiency. Leveraged Postman for thorough API testing and integration for seamless data interchange. Ensured data accuracy and consistency in database management tasks with SQL Lite using Prisma.",
    side: "left",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "The_Food",
    tech: ["HTML", "CSS", "Bootstrap 4", "XAMPP Server"],
    desc: "Online e-commerce food ordering website for browsing restaurants and managing order flows.",
    demoUrl: "https://youtu.be/IV2lqj7Qt4A?si=xE6CgkPlw9s2bOOI",
    githubUrl: `https://github.com/${personalData.githubHandle}/The_Food`,
  },
  {
    title: "Quick_Notes",
    tech: ["Svelte.js", "IndexedDB", "Prisma ORM", "Tailwind CSS"],
    desc: "Daily note-taking app with offline-friendly storage and an eye-catchy interface.",
    demoUrl: "https://fs.blabigo.org/s/3hSTK293",
    githubUrl: `https://github.com/${personalData.githubHandle}/Quick_Notes`,
  },
  {
    title: "Photopia",
    tech: ["SvelteKit", "Prisma ORM", "HTML5", "Tailwind CSS"],
    desc: "Instagram-inspired app where people can post pictures with filters and optional text captions.",
    demoUrl: "https://fs.blabigo.org/s/rHl1AhbB",
    githubUrl: `https://github.com/${personalData.githubHandle}/Photopia`,
  },
  {
    title: "Responsive Design Tester",
    tech: ["Svelte.js", "SvelteKit", "HTML5", "Tailwind CSS"],
    desc: "Tool for testing website responsiveness across practical device resolutions.",
    demoUrl: "https://fs.blabigo.org/s/htVX1PDU",
    githubUrl: `https://github.com/${personalData.githubHandle}/Responsive-Website-Tester`,
  },
  {
    title: "Portfolio-App",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    desc: "Personal portfolio website with responsive sections, clean motion, and live deployment.",
    liveUrl: personalData.portfolioUrl,
    githubUrl: `https://github.com/${personalData.githubHandle}/portfolio-app`,
  },
  {
    title: "MercyGeneralHospital",
    tech: ["Next.js", "React.js", "Tailwind CSS", "TypeScript"],
    desc: "Hospital landing page with hospital details, contact information, and location information.",
    liveUrl: "https://mercy-general-hospital.vercel.app",
    githubUrl: `https://github.com/${personalData.githubHandle}/MercyGeneralHospital`,
  },
  {
    title: "Fingerprint_Data_Transporter",
    tech: [".Net Core", "C#", "Forms", "Worker Service", "Oracle"],
    desc: "Receives fingerprint data from ZKT fingerprint devices and exports it to an Oracle database through both command-line worker service and Windows Forms systems.",
    githubUrl: `https://github.com/${personalData.githubHandle}/FingerPrint__32Bit_Production_Complete`,
  },
];

export const research: ResearchItem[] = [
  {
    title: "A Comprehensive Study on Bengali Music Genre Classification Utilizing Ensemble Approach",
    authors: "Authors: Mohammad Tanveer Shams, Syeda Farhana Ali, et al.",
  },
];

export const certificates: CertificateItem[] = [
  {
    title: "Internship Certificate",
    description:
      "This is to certify that he has successfully completed a three-month internship as a Backend Developer Intern (PHP / Laravel) at DeshIT-BD, demonstrating strong dedication, technical proficiency, and excellent performance in web application development using PHP and Laravel.",
  },
  {
    title: "Certificate - Summer Internship Program 2024",
    description:
      "During the internship, the intern actively embraced new learning opportunities and effectively tackled assigned tasks, demonstrating exceptional full stack development skills while collaborating with their team members.",
    link: "https://verify.netcredential.com/q6a4VAd2Ts",
  },
  {
    title: "LoR - Summer Internship Program 2024",
    description:
      "This certifies the Full Stack Developer Intern demonstrated responsibility, sincerity, a willingness to learn, and enthusiasm for new challenges, consistently delivering their best.",
    link: "https://verify.netcredential.com/q6a4djVmUW",
  },
  {
    title: "Mastering Svelte Fundamentals",
    description:
      "This badge verifies completion of Mastering Svelte Fundamentals, part of the Summer Internship Program 2024, covering dynamic and responsive web applications using Svelte with Tailwind CSS.",
  },
  {
    title: "Mastering SvelteKit Fundamentals",
    description:
      "This badge verifies completion of Mastering SvelteKit Fundamentals, part of the Summer Internship Program 2024, covering scalable full-stack applications using SvelteKit with database integration using Prisma.",
  },
];

export const references: ReferenceItem[] = [
  {
    name: "Md Asadullah",
    title: "Managing Director, Beta Solution",
    contact: "asadullah.db@gmail.com | 01839959080",
  },
  {
    name: "Shamsul Alam",
    title: "Chief Executive Officer, DeshIT_BD",
    contact: "info@deshit-bd.com | +8801537570379",
  },
  {
    name: "Dr. Enamul Haque",
    title: "Managing Director, Mercy General Hospital D.Lab & Consultation Centre",
    contact: "eh4700834@gmail.com | +8801331283123",
  },
  {
    name: "Hannan Satopay",
    title: "Chief Executive Officer, Meta Craftlab",
    contact: "hannan@craftlab.ai | +919969297408",
  },
  {
    name: "Dr. Kazi A. Kalpoma",
    title: "Professor, Ahsanullah University of Science and Technology",
    contact: "kalpoma@aust.edu | +8801819127854",
  },
];
