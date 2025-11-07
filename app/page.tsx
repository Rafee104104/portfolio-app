"use client";

import React, { useState } from 'react';

// --- Static Content Data Extracted from CV ---
const personalData = {
  name: "Tasnim Munawar Rafee",
  phone: "+8801744127891",
  email: "tasnimmunawarrafee@gmail.com",
  location: "Dhaka, Bangladesh",
  profileSummary: "Dedicated novice in computer science and engineering, possessing a moderate proficiency in programming and development tools, along with a basic understanding of data science and machine learning. Competent in a variety of abilities ranging from fundamental to intermediate. Eager to learn and adapt new skills, with a recognized moderate level of critical thinking, logical reasoning and problem-solving skillset.",
  education: [
    { school: "Ahsanullah University of Science and Technology", degree: "B.Sc. in Computer Science and Engineering", years: "2020-2024", cgpa: "3.005 (Out of 4.00)" },
    { school: "Kabi Nazrul Govt. College", degree: "H.S.C in Science", years: "2017-2019", cgpa: "4.42 (Out of 5.00)" },
  ],
  skills: {
    languages: ["C", "C++", "Python", "Java", "Javascript"],
    web: ["HTML", "CSS", "PHP", "Javascript", "Svelte.js", "Node.js"],
    tools: ["Postman API", "Slack", "Jira"],
    databases: ["Oracle PL/SQL", "MS SQL Server", "XAMPP", "SQL Lite using Prisma"],
    versionControl: ["Git", "Github", "Github Desktop"],
    frameworks: ["iGraphics", "ASP.Net MVC", "Bootstrap"],
  },
  experience: [
    {
      title: "Intern Full-Stack Developer",
      company: "Hannan Satopay",
      duration: "01/06/2024 - 12/07/2024",
      location: "Mumbai, India",
      description: "Developed web applications using Svelte.js and Svelte Kit, optimized speed and efficiency. Leveraged Postman for thorough API testing and integration for seamless data interchange. Ensured data accuracy and consistency in database management tasks with SQL Lite using Prisma."
    },
    {
      title: "IT Support Executive",
      company: "Mercy General Hospital D.Lab & Consultation Centre",
      duration: "01/08/2024 - present",
      location: "Dhaka, Bangladesh",
      description: "Worked as an IT Support Executive on the hospital's third-party software application and hardware support. Communication with patient and others for proper management of the software support."
    },
  ],
  projects: [
    { title: "Movie Ticket Booking System", description: "Developed a ticket booking system using Java and SQL Lite to manage user accounts, track available movies, and allocate seats by date and theater number.", link: "https://github.com/janakmallik/Movie-Ticket-Management-System" },
    { title: "Photopia (Instagram Clone)", description: "A social media clone using SvelteKit, Prisma ORM, and Tailwind CSS, where people can post pictures with filters and accompanying text.", link: "https://github.com/Rafee104104/Photopia" },
    { title: "Responsive Design Tester", description: "A Svelte.js/SvelteKit application that allows testing website responsiveness across various resolutions.", link: "https://github.com/hannansatopay/devstar/tree/main/src/routes/(tools)/responsive-design-tester" },
    { title: "Quick_Notes", description: "A note-taking app using Svelte.js and IndexedDB for day-to-day notes, featuring an eye-catching UI.", link: "https://github.com/Rafee104104/Quick_Notes" },
  ]
};

// --- Main Component ---
export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const containerClasses = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800';
  const cardClasses = darkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-2xl';

  // --- Utility Components ---

  const Header = () => (
    <div className="flex justify-between items-start p-4 md:p-6 border-b border-gray-700/50">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl text-blue-400">
          {personalData.name}
        </h1>
        <p className="mt-1 text-sm md:text-base text-gray-400">
          {personalData.location} | {personalData.email} | {personalData.phone}
        </p>
      </div>
      <div className="flex items-center space-x-3">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-700 text-gray-300 hover:bg-gray-600 transition"
          aria-label="Toggle dark mode"
        >
          {darkMode ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.459 4.293a1 1 0 010 1.414l.708.707a1 1 0 01-1.414 0l-.707-.708a1 1 0 010-1.414zm-10 0a1 1 0 010 1.414l-.708.707a1 1 0 01-1.414 0l-.707-.708a1 1 0 010-1.414zM2 10a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm15-1h1a1 1 0 110 2h-1a1 1 0 110-2zm-6.293 4.541a1 1 0 010 1.414l-.707.708a1 1 0 01-1.414 0l-.708-.707a1 1 0 010-1.414zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.364 5.364a1 1 0 011.414 0l.707.708a1 1 0 01-1.414 1.414L5.364 6.778a1 1 0 010-1.414z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );

  const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-8 p-4">
      <h2 className="text-xl font-bold border-b border-blue-400 pb-1 mb-4 text-blue-300">{title}</h2>
      {children}
    </div>
  );

  const ContactSection = () => (
    // Single column layout enforced to prevent overlap on narrow desktop viewports.
    <div className="grid grid-cols-1 gap-4 text-sm mt-4">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-7 13h-4a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2z" /></svg>
        <span>{personalData.email}</span>
      </div>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        <span>{personalData.phone}</span>
      </div>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
        <span>{personalData.location}</span>
      </div>
    </div>
  );

  const SkillsGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {Object.entries(personalData.skills).map(([category, list]) => (
        <div key={category} className={`${cardClasses} p-4 rounded-xl transition duration-300 hover:shadow-blue-500/50`}>
          <h3 className="text-lg font-semibold capitalize mb-2 text-blue-400">
            {category.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          <ul className="space-y-1 list-none p-0">
            {list.map((skill, index) => (
              <li key={index} className="text-sm text-gray-300 flex items-center">
                <span className="text-blue-500 mr-2">•</span> {skill}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  return (
    <div className={`${containerClasses} min-h-screen font-sans transition-colors duration-500 p-4 md:p-8`}>
      <div className="max-w-6xl mx-auto rounded-3xl overflow-hidden my-4 md:my-8" style={{ border: darkMode ? '1px solid rgba(59, 130, 246, 0.5)' : 'none' }}>
        <Header />

        <main className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column (Profile, Contact, Summary) */}
          <div className="lg:col-span-1 space-y-8">
            <div className={`${cardClasses} p-6 rounded-2xl`}>
              <div className="flex flex-col items-center">
                {/* Placeholder Image: Use /D.N.107880.jpg from public folder */}
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-blue-500/50">
                  <img
                    src="/D.N.107880.jpg"
                    alt={personalData.name}
                    className="w-full h-full object-cover transition duration-300 hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = "https://placehold.co/128x128/374151/E5E7EB?text=Photo"; // Fallback placeholder
                      target.onerror = null; // Prevent infinite loop
                    }}
                  />
                </div>
                <ContactSection />
              </div>
            </div>

            <div className={`${cardClasses} p-6 rounded-2xl`}>
              <Section title="Profile Summary">
                <p className="text-gray-300 text-sm leading-relaxed">{personalData.profileSummary}</p>
              </Section>
            </div>
            
            {/* Dynamic content removed in previous step */}

          </div>

          {/* Right Column (Experience, Education, Projects, Skills) */}
          <div className="lg:col-span-2 space-y-8">

            <div className={`${cardClasses} p-6 rounded-2xl`}>
              <Section title="Professional Experience">
                {personalData.experience.map((exp, index) => (
                  <div key={index} className="mb-4 last:mb-0 border-l-4 border-blue-500 pl-4 transition duration-300 hover:bg-gray-700/30 py-2 rounded-md">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                      <span className="text-sm text-gray-400">{exp.duration}</span>
                    </div>
                    <p className="text-blue-300 font-medium">{exp.company} - <span className="text-gray-400">{exp.location}</span></p>
                    <p className="text-sm text-gray-300 mt-1 leading-snug">{exp.description}</p>
                  </div>
                ))}
              </Section>
            </div>

            <div className={`${cardClasses} p-6 rounded-2xl`}>
              <Section title="Education">
                {personalData.education.map((edu, index) => (
                  <div key={index} className="mb-4 last:mb-0 pb-3 border-b border-gray-700/50">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                      <span className="text-sm text-gray-400">{edu.years}</span>
                    </div>
                    <p className="text-blue-300 font-medium">{edu.school}</p>
                    <p className="text-sm text-gray-400">CGPA: {edu.cgpa}</p>
                  </div>
                ))}
              </Section>
            </div>

            <div className={`${cardClasses} p-6 rounded-2xl`}>
              <Section title="Key Projects">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {personalData.projects.map((proj, index) => (
                    <div key={index} className="p-4 rounded-xl border border-gray-700/50 transition duration-300 hover:border-blue-500/50 flex flex-col justify-between">
                      <div>
                        <h4 className="text-md font-semibold text-white mb-1">{proj.title}</h4>
                        <p className="text-sm text-gray-400 mb-3">{proj.description}</p>
                      </div>
                      <a 
                        href={proj.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
                        title="View Project Code on GitHub"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.418 2.865 8.167 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.37-.271-3.37-.271-.454-1.156-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.829.091-.643.35-1.088.636-1.338-2.22-.253-4.555-1.119-4.555-4.949 0-1.092.39-1.983 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.577 9.577 0 0112 5.048c.852.007 1.702.112 2.502.324 1.909-1.296 2.748-1.026 2.748-1.026.546 1.379.202 2.398.099 2.65.64.704 1.028 1.595 1.028 2.687 0 3.832-2.336 4.69-4.564 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.418-.012 2.746 0 .267.18.577.688.484 3.971-1.337 6.832-5.085 6.832-9.503C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                        View Code
                      </a>
                    </div>
                  ))}
                </div>
              </Section>
            </div>

            <div className={`${cardClasses} p-6 rounded-2xl`}>
              <Section title="Technical Skills">
                <SkillsGrid />
              </Section>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}