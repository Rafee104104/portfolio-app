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
  link: string;
  linkLabel?: string;
};

export type ResearchItem = {
  title: string;
  authors: string;
};

export type CertificateItem = {
  title: string;
  description: string;
  link: string;
};

export type ReferenceItem = {
  name: string;
  title: string;
  contact: string;
};

export const personalData = {
  name: "Tasnim Munawar Rafee",
  title: "Full Stack Software Engineer",
  roles: [
    "Full Stack Software Engineer",
    "Backend Web Developer",
    "IT Support Executive",
    "MERN Stack Portfolio Builder",
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
  { label: "Portfolio Projects", value: "7+" },
  { label: "Primary Stack", value: "MERN" },
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
    list: ["C", "C++", "Python", "Java", "JavaScript", "PHP"],
  },
  {
    category: "Web Development",
    icon: "react",
    summary: "Responsive interfaces, API-connected pages, and modern app routes.",
    list: ["HTML5", "CSS", "JavaScript", "Svelte.js", "Node.js", "PHP"],
  },
  {
    category: "MERN & Backend",
    icon: "server",
    summary: "Server-side structure, database-driven features, and API testing.",
    list: ["MongoDB-ready", "Express.js", "React", "Node.js", "Postman API"],
  },
  {
    category: "Databases",
    icon: "database",
    summary: "Relational queries, schema work, and practical data handling.",
    list: ["Oracle PL/SQL", "MS SQL Server", "SQL Lite", "Prisma ORM"],
  },
  {
    category: "Frameworks",
    icon: "layer",
    summary: "Framework-driven UI and server development workflows.",
    list: ["Next.js", "Laravel", "ASP.Net MVC", "Bootstrap", "iGraphics"],
  },
  {
    category: "Tools",
    icon: "gear",
    summary: "Daily engineering tools for versioning, design, and delivery.",
    list: ["Git", "GitHub", "GitHub Desktop", "Slack", "Jira", "MS Excel"],
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
    title: "Backend Software Engineer Intern",
    company: "Shamsul Alam",
    duration: "January 2026 - Present",
    location: "House D, 36 Zakir Hossain Road, Dhaka 1205",
    description:
      "PHP Laravel Web Development Intern role from DeshIT_BD Company. Responsibilities include delivering PHP Laravel tasks on time with clean, efficient, and scalable code following best practices. Communicate regularly with the team, attend meetings punctually, and share progress or blockers. Collaborate with developers, managers, and QA, follow coding standards, and proactively improve performance, security, and overall system quality.",
    side: "right",
  },
  {
    title: "IT Support Executive",
    company: "Mercy General Hospital D.Lab & Consultation Centre",
    duration: "August 2024 - December 2025",
    location: "Dhaka, Bangladesh",
    description:
      "Worked as an IT Support Executive on the hospital's third-party software application and hardware support. Communication with patient and others for proper management of the software support.",
    side: "left",
  },
  {
    title: "Intern Full-Stack Developer",
    company: "Hannan Satopay (Meta Craftlab)",
    duration: "June 1, 2024 - July 12, 2024",
    location: "Mumbai, India",
    description:
      "Developed web applications using Svelte.js and Svelte Kit, optimized speed and efficiency. Leveraged Postman for thorough API testing and integration for seamless data interchange. Ensured data accuracy and consistency in database management tasks with SQL Lite using Prisma.",
    side: "right",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Portfolio",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    desc: "Portfolio website built with a componentized Next.js route, animated sections, and responsive Tailwind UI.",
    link: "https://github.com/Rafee104104/portfolio-app",
  },
  {
    title: "Photopia",
    tech: ["SvelteKit", "Prisma ORM", "HTML5", "Tailwind CSS"],
    desc: "Instagram-inspired app where people can post pictures with filters and optional text captions.",
    link: `https://github.com/${personalData.githubHandle}/Photopia`,
  },
  {
    title: "Responsive Design Tester",
    tech: ["Svelte.js", "SvelteKit", "HTML5", "Tailwind CSS"],
    desc: "Tool for testing website responsiveness across practical device resolutions.",
    link: "https://github.com/hannansatopay/devstar/tree/main/src/routes/(tools)/responsive-design-tester",
  },
  {
    title: "Quick_Notes",
    tech: ["Svelte.js", "IndexedDB", "Prisma ORM", "Tailwind CSS"],
    desc: "Daily note-taking app with offline-friendly storage and an eye-catchy interface.",
    link: `https://github.com/${personalData.githubHandle}/Quick_Notes`,
  },
  {
    title: "TICKETZY",
    tech: ["SQL", "Java"],
    desc: "Movie ticket management system for customer records, movie schedules, and seat allocation.",
    link: "https://github.com/janakmallik/Movie-Ticket-Management-System",
  },
  {
    title: "Run For Your Life",
    tech: ["C++", "iGraphics Framework"],
    desc: "Pacman-like game where the player can chase the ghost instead of only running away.",
    link: `https://github.com/${personalData.githubHandle}/Run-For-Your-Life`,
  },
  {
    title: "The_Food",
    tech: ["HTML", "CSS", "Bootstrap 4", "XAMPP", "PHP"],
    desc: "Online food ordering platform for browsing restaurants and managing order flows.",
    link: `https://github.com/${personalData.githubHandle}/The_Food`,
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
];

export const references: ReferenceItem[] = [
  {
    name: "Dr. Kazi A. Kalpoma",
    title: "Professor, Ahsanullah University of Science and Technology",
    contact: "kalpoma@aust.edu | +8801819127854",
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
    name: "Shamsul Alam",
    title: "Chief Executive Officer, DeshIT_BD",
    contact: "info@deshit-bd.com | +8801537570379",
  },
];
