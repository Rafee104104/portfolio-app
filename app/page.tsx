"use client";

import React, { useState } from 'react';

// --- DATA EXTRACTED FROM CV ---

const personalData = {
  name: "Tasnim Munawar Rafee",
  title: "Software Developer | CSE Graduate",
  location: "Dhaka, Bangladesh",
  fullAddress: "358/1, Khandokar Road, Shyampur, Jurain, Dhaka 1204",
  phone: "+8801744127891",
  email: "tasnimmunawarrafee@gmail.com",
  githubHandle: "Rafee104104",
  linkedinName: "Tasnim Munawar Rafee", // CV lists name, not a direct URL
  imagePath: "/D.N.107880.jpg", // Assumes image is in public folder
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
  { category: "Databases", list: "Oracle PL/SQL, MS SQL Server, SQL Lite using Prisma" },
  { category: "Frameworks", list: "iGraphics, ASP.Net MVC, Bootstrap" },
  { category: "Version Control", list: "Git, Github, Github Desktop" },
  { category: "Tools", list: "Postman API, Slack, Jira, Prisma ORM" },
  { category: "Miscellaneous", list: "MS Office, MS Excel, Adobe Photoshop & Illustrator, LaTeX" },
];

const qualities = [
  "Teamwork", "Time Management", "Problem Solving", "Work Ethic", 
  "Critical Thinking", "Creativity", "Adaptability", "Logical Reasoning", "Communication"
];

const experience = [
  {
    title: "IT Support Executive",
    company: "Mercy General Hospital D.Lab & Consultation Centre",
    duration: "Aug 2024 - Present",
    location: "Dhaka, Bangladesh",
    description: "Worked as an IT Support Executive on the hospital's third-party software application and hardware support. Communication with patient and others for proper management of the software support."
  },
  {
    title: "Intern Full-Stack Developer",
    company: "Hannan Satopay (Meta Craftlab)",
    duration: "Jun 2024 - Jul 2024",
    location: "Mumbai, India",
    description: "Developed web applications using Svelte.js and Svelte Kit, optimized speed and efficiency. Leveraged Postman for thorough API testing and integration for seamless data interchange. Ensured data accuracy and consistency in database management tasks with SQL Lite using Prisma."
  }
];

const projects = [
  { 
    title: "Photopia (Instagram Clone)", 
    tech: "SvelteKit, Prisma ORM, HTML5, Tailwind CSS", 
    desc: "It's basically an Instagram clone, where people can post their picture with filters and along with some text for the post if they want.",
    link: `https://github.com/${personalData.githubHandle}/Photopia` // Assumed link
  },
  { 
    title: "Responsive Design Tester", 
    tech: "Svelte.js, SvelteKit, HTML5, Tailwind CSS", 
    desc: "We can test a website's responsiveness by applying various resolutions.",
    link: `https://github.com/hannansatopay/devstar/tree/main/src/routes/(tools)/responsive-design-tester` // Assumed link
  },
  { 
    title: "Quick_Notes", 
    tech: "Svelte.js, IndexedDB, Prisma ORM, Tailwind CSS", 
    desc: "It's an app to create notes for day-to-day life with an eye-catchy UI.",
    link: `https://github.com/${personalData.githubHandle}/Quick_Notes` // Assumed link
  },
  { 
    title: "TICKETZY (Movie Ticket Management)", 
    tech: "SQL & Java", 
    desc: "A movie ticket management system enables ticket sellers to manage customer records, track available movies, and allocate seats by date and theater number.",
    link: `https://github.com/Rafee104104/Movie-Ticket-Management-System.git` // Assumed link
  },
  { 
    title: "Run For Your Life (Pacman-like Game)", 
    tech: "C++, iGraphics Framework", 
    desc: "Run for your life is a Game like Pacman. But here you can chase the ghost.",
    link: `https://github.com/${personalData.githubHandle}/Run-For-Your-Life` // Assumed link
  },
  { 
    title: "The_Food (E-commerce)", 
    tech: "HTML, CSS, Bootstrap 4, XAMPP Server, PHP", 
    desc: "An online E-commercial website based on an online food ordering system across many restaurants.",
    link: `https://github.com/${personalData.githubHandle}/The_Food` // Assumed link
  },
];

const research = [
  {
    title: "A Comprehensive Study on Bengali Music Genre Classification Utilizing Ensemble Approach",
    authors: "Authors: Mohammad Tanveer Shams, Syeda Farhana Ali, et al."
    // Add a link property here if you have one
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


// --- REACT ICONS (for simplicity) ---

const IconMenu = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);

const IconX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const IconGitHub = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.865 8.167 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-.271-3.37-.271-.454-1.156-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.829.091-.643.35-1.088.636-1.338-2.22-.253-4.555-1.119-4.555-4.949 0-1.092.39-1.983 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.577 9.577 0 0112 5.048c.852.007 1.702.112 2.502.324 1.909-1.296 2.748-1.026 2.748-1.026.546 1.379.202 2.398.099 2.65.64.704 1.028 1.595 1.028 2.687 0 3.832-2.336 4.69-4.564 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.418-.012 2.746 0 .267.18.577.688.484 3.971-1.337 6.832-5.085 6.832-9.503C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);


// --- NAVBAR COMPONENT ---

const EpicNavbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Research", href: "#research" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-gray-900/80 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-white">
              {personalData.name}
            </a>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} border-t border-gray-700`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};


// --- SECTION COMPONENTS ---

const Section = ({ id, title, children }: { id: string, title: string, children: React.ReactNode }) => (
  <section id={id} className="py-16 md:py-24">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
        {title}
      </h2>
      {children}
    </div>
  </section>
);

const HeroSection = () => (
  <section id="hero" className="py-24 md:py-32 bg-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
      <div className="md:w-1/3 flex justify-center">
        <img
          src={personalData.imagePath}
          alt={personalData.name}
          className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-8 border-gray-700 shadow-2xl"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "https://placehold.co/256x256/374151/E5E7EB?text=Photo"; // Fallback
            target.onerror = null;
          }}
        />
      </div>
      <div className="md:w-2/3 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          {personalData.name}
        </h1>
        <p className="text-2xl md:text-3xl text-blue-300 font-medium mb-8">
          {personalData.title}
        </p>
        <a 
          href="#contact" 
          className="inline-block bg-blue-600 text-white text-lg font-medium px-8 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        >
          Get In Touch
        </a>
      </div>
    </div>
  </section>
);


// --- MAIN APP COMPONENT ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true); // Keep dark mode as default

  // This simple toggle is not used in this version, but kept for compatibility
  // The 'epic' navbar assumes a dark theme.
  const containerClasses = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800';
  const cardClasses = darkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-2xl';

  return (
    <div className={`${containerClasses} min-h-screen font-sans transition-colors duration-500`}>
      <EpicNavbar />
      
      <main>
        <HeroSection />

        {/* About Section */}
        <Section id="about" title="About Me">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {personalData.profileSummary}
            </p>
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Personal Qualities</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {qualities.map((quality) => (
                  <span
                    key={quality}
                    className="bg-blue-200 text-blue-800 text-sm font-medium px-4 py-2 rounded-full shadow-md"
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className={`${cardClasses} p-6 rounded-2xl`}>
                <h3 className="text-2xl font-bold text-blue-300 mb-4">{skillGroup.category}</h3>
                <p className="text-gray-300">{skillGroup.list}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Projects Section */}
        <Section id="projects" title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((proj) => (
              <div key={proj.title} className={`${cardClasses} p-6 rounded-2xl flex flex-col`}>
                <h3 className="text-2xl font-bold text-blue-300 mb-3">{proj.title}</h3>
                <p className="text-gray-400 text-sm mb-4 font-medium">{proj.tech}</p>
                <p className="text-gray-300 mb-6 flex-grow">{proj.desc}</p>
                <a 
                  href={proj.link}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
                >
                  <IconGitHub />
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
            <div className="absolute left-4 md:left-1/2 top-0 h-full w-0.5 bg-gray-700 -translate-x-1/2"></div>
            
            {experience.map((job, index) => (
              <div key={index} className="relative pl-10 md:pl-0">
                <div className="absolute left-4 md:left-1/2 top-1 -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800"></div>
                <div className={`md:flex ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}>
                  <div className="md:w-1/2 md:pr-8 text-left md:text-right">
                    {index % 2 !== 0 && (
                      <div className={`${cardClasses} p-6 rounded-2xl`}>
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <p className="text-lg text-blue-300 font-semibold">{job.company}</p>
                        <p className="text-sm text-gray-400 mb-3">{job.duration} | {job.location}</p>
                        <p className="text-gray-300">{job.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="md:w-1/2 md:pl-8 text-left">
                    {index % 2 === 0 && (
                       <div className={`${cardClasses} p-6 rounded-2xl`}>
                        <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                        <p className="text-lg text-blue-300 font-semibold">{job.company}</p>
                        <p className="text-sm text-gray-400 mb-3">{job.duration} | {job.location}</p>
                        <p className="text-gray-300">{job.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Education Section */}
        <Section id="education" title="Education">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div key={edu.degree} className={`${cardClasses} p-6 rounded-2xl text-center`}>
                <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                <p className="text-lg text-blue-300 font-semibold">{edu.institution}</p>
                <p className="text-sm text-gray-400 mb-2">{edu.years}</p>
                <p className="text-gray-300 font-medium">{edu.result}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Research Section */}
        <Section id="research" title="Research">
          <div className="max-w-3xl mx-auto">
            {research.map((pub) => (
              <div key={pub.title} className={`${cardClasses} p-6 rounded-2xl`}>
                <h3 className="text-2xl font-bold text-white mb-3">{pub.title}</h3>
                <p className="text-gray-400 italic">{pub.authors}</p>
                {/* <a href="#" className="text-blue-400 hover:underline mt-4 inline-block">
                  View Publication (Add link if available)
                </a> 
                */}
              </div>
            ))}
          </div>
        </Section>

        {/* Contact & References Section */}
        <Section id="contact" title="Contact & References">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            
            {/* Contact Info */}
            <div className={`${cardClasses} p-8 rounded-2xl`}>
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Get In Touch</h3>
              <div className="space-y-4">
                <p className="text-lg text-gray-300">
                  <span className="font-semibold text-blue-300">Email:</span> 
                  <a href={`mailto:${personalData.email}`} className="hover:underline ml-2">{personalData.email}</a>
                </p>
                <p className="text-lg text-gray-300">
                  <span className="font-semibold text-blue-300">Phone:</span> 
                  <a href={`tel:${personalData.phone}`} className="hover:underline ml-2">{personalData.phone}</a>
                </p>
                <p className="text-lg text-gray-300">
                  <span className="font-semibold text-blue-300">Address:</span> 
                  <span className="ml-2">{personalData.fullAddress}</span>
                </p>
                <p className="text-lg text-gray-300">
                  <span className="font-semibold text-blue-300">GitHub:</span> 
                  <a href={`https://github.com/${personalData.githubHandle}`} target="_blank" rel="noopener noreferrer" className="hover:underline ml-2">{personalData.githubHandle}</a>
                </p>
              </div>
            </div>

            {/* References */}
            <div className={`${cardClasses} p-8 rounded-2xl`}>
              <h3 className="text-3xl font-bold text-white mb-6 text-center">References</h3>
              <div className="space-y-6">
                {references.map((ref) => (
                  <div key={ref.name}>
                    <h4 className="text-xl font-semibold text-white">{ref.name}</h4>
                    <p className="text-blue-300">{ref.title}</p>
                    <p className="text-gray-400 text-sm">{ref.contact}</p>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        </Section>
      </main>

      <footer className="bg-gray-800 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} {personalData.name}. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}