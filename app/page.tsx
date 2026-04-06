"use client";

import Image from "next/image";
import React, { useState, useEffect, useSyncExternalStore } from 'react';

// --- INJECTED STYLES ---
// We add a <style> tag directly for animations that aren't in standard Tailwind:
// 1. Typewriter cursor
// 2. Slide-in-from-left animation
// 3. Slide-in-from-right animation

const AnimationStyles = () => (
  // Use a standard <style> tag to inject global keyframes and classes.
  // This avoids the React warning about non-boolean attributes 'jsx' and 'global'.
  <style>{`
    @keyframes typing-blink {
      0%, 100% { border-color: transparent; }
      50% { border-color: currentColor; }
    }

    .typewriter-cursor::after {
      content: '|';
      display: inline-block;
      margin-left: 0.15em;
      animation: typing-blink 1s infinite;
    }

    @keyframes slide-in-left {
      from {
        opacity: 0;
        transform: translateX(-100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slide-in-right {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-slide-in-left {
      animation: slide-in-left 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    .animate-slide-in-right {
      animation: slide-in-right 0.7s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }

    /* Target elements that are not yet visible */
    .initial-hidden {
      opacity: 0;
    }
  `}</style>
);


// --- DATA EXTRACTED FROM LATEST CV (20251108) ---

const personalData = {
  name: "Tasnim Munawar Rafee",
  title: "Software Developer | CSE Graduate",
  location: "Dhaka, Bangladesh",
  fullAddress: "358/1, Khandokar Road, Shyampur, Jurain, Dhaka 1204",
  phone: "+8801744127891",
  email: "tasnimmunawarrafee@gmail.com",
  githubHandle: "Rafee104104",
  githubUrl: "https://github.com/Rafee104104",
  // Assumed LinkedIn URL based on name
  linkedinUrl: "https://linkedin.com/in/tasnim-munawar-rafee",
  imagePath: "/D.N.107880.jpg",
  profileSummary: "Dedicated novice in computer science and engineering, possessing a moderate proficiency in programming and development tools, along with a basic understanding of data science and machine learning. Competent in a variety of abilities ranging from fundamental to intermediate. Eager to learn and adapt new skills, with a recognized moderate level of critical thinking, logical reasoning and problem-solving skillset."
};

const education = [
  { 
    degree: "B.Sc. in Computer Science and Engineering", 
    institution: "Ahsanullah University of Science and Technology", 
    years: "2020-2024", 
    result: "CGPA: 3.005 / 4.00" 
  },
  { 
    degree: "H.S.C in Science", 
    institution: "Kabi Nazrul Govt. College", 
    years: "2017-2019", 
    result: "GPA: 4.42 / 5.00" 
  },
];

const skills = [
  { category: "Programming Languages", list: "C, C++, Python, Java, Javascript" },
  { category: "Web Development", list: "HTML, CSS, PHP, Javascript, Svelte.js, Node.js" },
  { category: "Databases", list: "Oracle PL/SQL, MS SQL Server, SQL Lite" },
  { category: "Frameworks", list: "iGraphics, ASP.Net MVC, Bootstrap" },
  { category: "Version Control", list: "Git, Github, Github Desktop" },
  { category: "Tools", list: "Postman API, Slack, Jira, Prisma ORM" }, // Prisma ORM moved here per new CV
  { category: "Miscellaneous", list: "MS Office, MS Excel, Adobe Photoshop & Illustrator, LaTeX" },
];

const qualities = [
  "Teamwork", "Time Management", "Problem Solving", "Work Ethic", 
  "Critical Thinking", "Creativity", "Adaptability", "Logical Reasoning", "Communication"
];

type Experience = {
  title: string;
  company: string;
  duration: string;
  location: string;
  description: string;
  side: "left" | "right";
};

const experience: Experience[] = [
  {
    title: "Backend Software Engineer Intern",
    company: "Shamsul Alam",
    duration: "January 2026 - Present",
    location: "House D, 36 Zakir Hossain Road, Dhaka 1205",
    description: "PHP Laravel Web Development Intern role from DeshIT_BD Company. Responsibilities include delivering PHP Laravel tasks on time with clean, efficient, and scalable code following best practices. Communicate regularly with the team, attend meetings punctually, and share progress or blockers. Collaborate with developers, managers, and QA, follow coding standards, and proactively improve performance, security, and overall system quality.",
    side: "right"
  },
  {
    title: "IT Support Executive",
    company: "Mercy General Hospital D.Lab & Consultation Centre",
    duration: "Aug 2024 - Present",
    location: "Dhaka, Bangladesh",
    description: "Worked as an IT Support Executive on the hospital's third-party software application and hardware support. Communication with patient and others for proper management of the software support.",
    side: "left"
  },
  {
    title: "Intern Full-Stack Developer",
    company: "Hannan Satopay (Meta Craftlab)",
    duration: "Jun 2024 - Jul 2024",
    location: "Mumbai, India",
    description: "Developed web applications using Svelte.js and Svelte Kit, optimized speed and efficiency. Leveraged Postman for thorough API testing and integration for seamless data interchange. Ensured data accuracy and consistency in database management tasks with SQL Lite using Prisma.",
    side: "right"
  }
];

const projects = [
  { 
    title: "Photopia (Instagram Clone)", 
    tech: "SvelteKit, Prisma ORM, HTML5, Tailwind CSS", 
    desc: "It's basically an Instagram clone, where people can post their picture with filters and along with some text for the post if they want.",
    link: `https://github.com/${personalData.githubHandle}/Photopia`
  },
  { 
    title: "Responsive Design Tester", 
    tech: "Svelte.js, SvelteKit, HTML5, Tailwind CSS", 
    desc: "We can test a website's responsiveness by applying various resolutions.",
    link: `https://github.com/hannansatopay/devstar/tree/main/src/routes/(tools)/responsive-design-tester`
  },
  { 
    title: "Quick_Notes", 
    tech: "Svelte.js, IndexedDB, Prisma ORM, Tailwind CSS", 
    desc: "It's an app to create notes for day-to-day life with an eye-catchy UI.",
    link: `https://github.com/${personalData.githubHandle}/Quick_Notes`
  },
  { 
    title: "TICKETZY (Movie Ticket Management)", 
    tech: "SQL & Java", 
    desc: "A movie ticket management system enables ticket sellers to manage customer records, track available movies, and allocate seats by date and theater number.",
    link: `https://github.com/janakmallik/Movie-Ticket-Management-System`
  },
  { 
    title: "Run For Your Life (Pacman-like Game)", 
    tech: "C++, iGraphics Framework", 
    desc: "Run for your life is a Game like Pacman. But here you can chase the ghost.",
    link: `https://github.com/${personalData.githubHandle}/Run-For-Your-Life`
  },
  { 
    title: "The_Food (E-commerce)", 
    tech: "HTML, CSS, Bootstrap 4, XAMPP Server, PHP", 
    desc: "An online E-commercial website based on an online food ordering system across many restaurants.",
    link: `https://github.com/${personalData.githubHandle}/The_Food`
  },
];

const research = [
  {
    title: "A Comprehensive Study on Bengali Music Genre Classification Utilizing Ensemble Approach",
    authors: "Authors: Mohammad Tanveer Shams, Syeda Farhana Ali, et al."
  }
];

const references = [
  {
    name: "Dr. Kazi A. Kalpoma",
    title: "Professor, Ahsanullah University of Science and Technology",
    contact: "kalpoma@aust.edu | +8801819127854"
  },
  {
    name: "Dr. Enamul Haque",
    title: "Managing Director, Mercy General Hospital D.Lab & Consultation Centre",
    contact: "eh4700834@gmail.com | +8801331283123"
  }
];

type Theme = "light" | "dark";


// --- REACT ICONS (for simplicity) ---

const IconGitHub = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const IconLinkedIn = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" {...props}>
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const IconSun = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8.66-13.66-.7.7M4.04 19.96l-.7.7M21 12h-1M4 12H3m16.96 7.96-.7-.7M4.04 4.04l-.7-.7M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const IconMoon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

const IconMenu = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const IconClose = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);


// --- CUSTOM HOOK: useTypewriter ---

const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (text) {
      setIsTyping(true);
      setDisplayText(''); // Reset on text change
      let i = 0;
      const timer = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.substring(0, i + 1));
          i++;
        } else {
          clearInterval(timer);
          setIsTyping(false);
        }
      }, speed);

      return () => clearInterval(timer);
    }
  }, [text, speed]);

  return { displayText, isTyping };
};


// --- CUSTOM HOOK: useScrollAnimation ---

const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const animationClass = entry.target.getAttribute('data-animation');
            if (animationClass) {
              entry.target.classList.add(animationClass);
            }
            observer.unobserve(entry.target); // Animate only once
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the element is visible
      }
    );

    const targets = document.querySelectorAll('.initial-hidden');
    targets.forEach((target) => observer.observe(target));

    return () => targets.forEach((target) => observer.unobserve(target));
  }, []);
};


// --- SECTION COMPONENTS ---

const Section = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <section id={id} className="py-12 sm:py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--text-primary)] text-center mb-8 sm:mb-12">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const HeroSection = () => {
  // Typewriter effect for the name
  const { displayText: typedName, isTyping } = useTypewriter(personalData.name, 100);

  return (
    <section id="hero" className="bg-[var(--hero-bg)] py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8 lg:gap-12">
        <div className="md:w-1/3 flex justify-center">
          <Image
            src={personalData.imagePath}
            alt={personalData.name}
            width={256}
            height={256}
            priority
            className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-full object-cover border-8 border-[var(--image-border)] shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--text-primary)] mb-4 min-h-[5.5rem] sm:min-h-[7rem] md:min-h-[5rem] break-words">
            <span className={isTyping ? 'typewriter-cursor' : ''}>{typedName}</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-[var(--accent)] font-medium mb-8">
            {personalData.title}
          </p>
          <div className="flex items-center justify-center md:justify-start gap-5 sm:gap-6">
            <a 
              href={personalData.linkedinUrl}
              target="_blank" rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-transform duration-300 hover:scale-125"
              aria-label="LinkedIn Profile"
            >
              <IconLinkedIn className="w-8 h-8" />
            </a>
            <a 
              href={personalData.githubUrl}
              target="_blank" rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-transform duration-300 hover:scale-125"
              aria-label="GitHub Profile"
            >
              <IconGitHub className="w-8 h-8" />
            </a>
            <a 
              href={`mailto:${personalData.email}`}
              className="text-[var(--text-muted)] hover:text-red-500 transition-transform duration-300 hover:scale-125"
              aria-label="Send Email"
            >
              <IconMail className="w-9 h-9" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

const themeStorageKey = "portfolio-theme";
const themeChangeEvent = "portfolio-theme-change";

const getThemeSnapshot = (): Theme => {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem(themeStorageKey);

  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getServerThemeSnapshot = (): Theme => "light";

const subscribeToTheme = (onStoreChange: () => void) => {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const handleStorage = (event: StorageEvent) => {
    if (event.key === themeStorageKey) {
      onStoreChange();
    }
  };
  const handleMediaChange = () => {
    if (!window.localStorage.getItem(themeStorageKey)) {
      onStoreChange();
    }
  };

  window.addEventListener(themeChangeEvent, onStoreChange);
  window.addEventListener("storage", handleStorage);
  mediaQuery.addEventListener("change", handleMediaChange);

  return () => {
    window.removeEventListener(themeChangeEvent, onStoreChange);
    window.removeEventListener("storage", handleStorage);
    mediaQuery.removeEventListener("change", handleMediaChange);
  };
};

const setStoredTheme = (theme: Theme) => {
  window.localStorage.setItem(themeStorageKey, theme);
  window.dispatchEvent(new Event(themeChangeEvent));
};


// --- MAIN APP COMPONENT ---

export default function App() {
  // Custom hook to trigger scroll animations
  useScrollAnimation();

  const theme = useSyncExternalStore(subscribeToTheme, getThemeSnapshot, getServerThemeSnapshot);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDark = theme === "dark";
  const containerClasses = "bg-[var(--page-bg)] text-[var(--text-primary)]";
  const cardClasses = "bg-[var(--surface)] text-[var(--text-primary)] shadow-lg ring-1 ring-[var(--border)] transition-all duration-300 hover:bg-[var(--surface-hover)] hover:scale-[1.03]";
  const navLinkClasses = "text-[var(--text-secondary)] hover:bg-[var(--surface-hover)] hover:text-[var(--text-primary)] px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const controlButtonClasses = "inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-primary)] shadow-sm transition hover:bg-[var(--surface-hover)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]";

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    document.documentElement.style.colorScheme = theme;
  }, [isDark, theme]);

  return (
    <div className={`${theme} ${containerClasses} min-h-screen font-sans transition-colors duration-500`}>
      <AnimationStyles />
      <header className="bg-[var(--header-bg)] backdrop-blur-md sticky top-0 z-50 border-b border-[var(--border)] transition-all duration-300 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="min-w-0 flex-shrink">
              <a href="#" className="block max-w-[13rem] truncate text-lg sm:max-w-none sm:text-2xl font-bold text-[var(--text-primary)]">
                {personalData.name}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden lg:flex lg:items-center lg:space-x-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className={navLinkClasses}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
              <button
                type="button"
                onClick={() => setStoredTheme(isDark ? "light" : "dark")}
                className={controlButtonClasses}
                aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                aria-pressed={isDark}
              >
                {isDark ? <IconSun className="h-5 w-5" /> : <IconMoon className="h-5 w-5" />}
              </button>
              <button
                type="button"
                onClick={() => setIsMenuOpen((current) => !current)}
                className={`${controlButtonClasses} lg:hidden`}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                aria-label="Toggle navigation menu"
              >
                {isMenuOpen ? <IconClose className="h-5 w-5" /> : <IconMenu className="h-5 w-5" />}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div id="mobile-menu" className="lg:hidden border-t border-[var(--border)] pb-4">
              <div className="flex flex-col gap-2 pt-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`${navLinkClasses} text-base`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
      
      <main>
        <HeroSection />

        {/* About Section */}
        <Section id="about" title="About Me">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-base sm:text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
              {personalData.profileSummary}
            </p>
            <div>
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">Personal Qualities</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {qualities.map((quality) => (
                  <span
                    key={quality}
                    className="bg-[var(--chip-bg)] text-[var(--chip-text)] text-sm font-medium px-4 py-2 rounded-full shadow-sm"
                  >
                    {quality}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Section>
        
        {/* Skills Section */}
        <Section id="skills" title="Technical Skills">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className={`${cardClasses} p-5 sm:p-6 rounded-2xl`}>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--accent)] mb-4">{skillGroup.category}</h3>
                <p className="text-[var(--text-primary)]">{skillGroup.list}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((proj) => (
              <div key={proj.title} className={`${cardClasses} p-5 sm:p-6 rounded-2xl flex flex-col`}>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">{proj.title}</h3>
                <p className="text-[var(--accent)] text-sm mb-4 font-medium">{proj.tech}</p>
                <p className="text-[var(--text-primary)] mb-6 flex-grow">{proj.desc}</p>
                <a 
                  href={proj.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-[var(--accent-contrast)] bg-[var(--accent)] hover:bg-[var(--accent-hover)] transition-all duration-300 transform hover:scale-105"
                >
                  <IconGitHub className="w-4 h-4" />
                  View Code
                </a>
              </div>
            ))}
          </div>
        </Section>

        {/* Experience Section */}
        <Section id="experience" title="Professional Experience">
          <div className="max-w-3xl mx-auto space-y-8 relative">
            {/* The timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-[var(--timeline)] -translate-x-1/2"></div>
            
            {experience.map((job, index) => {
              const isRightAligned = job.side === "right";

              return (
                <div key={index} className="relative pl-10 md:pl-0">
                  <div className={`absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-4 h-4 ${index === 0 ? 'bg-[var(--accent)]' : 'bg-[var(--timeline)]'} rounded-full border-4 border-[var(--image-border)]`}></div>
                  <div className={`md:flex ${isRightAligned ? 'md:flex-row-reverse' : 'md:flex-row'} items-center`}>

                    {/* Card: Aligns left or right */}
                    <div className={`md:w-[calc(50%-0.5rem)] ${isRightAligned ? 'md:pl-4' : 'md:pr-4'}`}>
                      <div
                        className={`${cardClasses} p-6 rounded-2xl initial-hidden`}
                        data-animation={isRightAligned ? 'animate-slide-in-right' : 'animate-slide-in-left'}
                      >
                        <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">{job.title}</h3>
                        <p className="text-lg text-[var(--accent)] font-semibold">{job.company}</p>
                        <p className="text-sm text-[var(--text-muted)] mb-3">{job.duration} | {job.location}</p>
                        <p className="text-[var(--text-primary)]">{job.description}</p>
                      </div>
                    </div>

                    {/* Spacer: Fills the other half on desktop */}
                    <div className="hidden md:block md:w-[calc(50%-0.5rem)]"></div>

                  </div>
                </div>
              );
            })}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-8">
            {education.map((edu) => (
              <div key={edu.degree} className={`${cardClasses} p-5 sm:p-6 rounded-2xl text-center`}>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)]">{edu.degree}</h3>
                <p className="text-lg text-[var(--accent)] font-semibold">{edu.institution}</p>
                <p className="text-sm text-[var(--text-muted)] mb-2">{edu.years}</p>
                <p className="text-[var(--text-primary)] font-medium">{edu.result}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Research Section */}
        <Section id="research" title="Research">
          <div className="max-w-3xl mx-auto">
            {research.map((pub) => (
              <div key={pub.title} className={`${cardClasses} p-5 sm:p-6 rounded-2xl`}>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3">{pub.title}</h3>
                <p className="text-[var(--text-muted)] italic">{pub.authors}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact & References Section */}
        <Section id="contact" title="Contact & References">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6 lg:gap-12">
            
            {/* Contact Info */}
            <div className={`${cardClasses} p-5 sm:p-8 rounded-2xl break-words`}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6 text-center">Get In Touch</h3>
              <div className="space-y-4">
                <p className="text-base sm:text-lg text-[var(--text-primary)]">
                  <span className="font-semibold text-[var(--accent)]">Email:</span>
                  <a href={`mailto:${personalData.email}`} className="block break-all hover:underline sm:ml-2 sm:inline">{personalData.email}</a>
                </p>
                <p className="text-base sm:text-lg text-[var(--text-primary)]">
                  <span className="font-semibold text-[var(--accent)]">Phone:</span>
                  <a href={`tel:${personalData.phone}`} className="hover:underline sm:ml-2">{personalData.phone}</a>
                </p>
                <p className="text-base sm:text-lg text-[var(--text-primary)]">
                  <span className="font-semibold text-[var(--accent)]">Address:</span>
                  <span className="sm:ml-2">{personalData.fullAddress}</span>
                </p>
                <p className="text-base sm:text-lg text-[var(--text-primary)]">
                  <span className="font-semibold text-[var(--accent)]">GitHub:</span>
                  <a href={personalData.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:underline sm:ml-2">{personalData.githubHandle}</a>
                </p>
                <p className="text-base sm:text-lg text-[var(--text-primary)]">
                  <span className="font-semibold text-[var(--accent)]">LinkedIn:</span>
                  <a href={personalData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:underline sm:ml-2">Tasnim Munawar Rafee</a>
                </p>
              </div>
            </div>

            {/* References */}
            <div className={`${cardClasses} p-5 sm:p-8 rounded-2xl`}>
              <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6 text-center">References</h3>
              <div className="space-y-6">
                {references.map((ref) => (
                  <div key={ref.name}>
                    <h4 className="text-xl font-semibold text-[var(--text-primary)]">{ref.name}</h4>
                    <p className="text-[var(--accent)]">{ref.title}</p>
                    <p className="text-[var(--text-muted)] text-sm break-words">{ref.contact}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </Section>
      </main>

      <footer className="bg-[var(--surface)] border-t border-[var(--border)] py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-[var(--text-muted)]">
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
