"use client";

import React, { useState, useEffect, useRef } from 'react';

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
    { title: "Movie Ticket Booking System", description: "Developed a ticket booking system using Java and SQL Lite to manage user accounts, track available movies, and allocate seats by date and theater number." },
    { title: "Photopia (Instagram Clone)", description: "A social media clone using SvelteKit, Prisma ORM, and Tailwind CSS, where people can post pictures with filters and accompanying text." },
    { title: "Responsive Design Tester", description: "A Svelte.js/SvelteKit application that allows testing website responsiveness across various resolutions." },
    { title: "Quick_Notes", description: "A note-taking app using Svelte.js and IndexedDB for day-to-day notes, featuring an eye-catching UI." },
  ]
};

// --- API Configuration ---
const API_URL = "https://generativelanguage.googleapis.com/v1beta/models/";
const API_KEY = ""; // Canvas environment provides this if empty

/**
 * Converts Base64 string of raw PCM audio data into a playable WAV Blob.
 * @param base64Data Base64 encoded PCM audio data.
 * @param sampleRate The sample rate (e.g., 16000) extracted from the API mimeType.
 * @returns A Blob object containing the WAV file.
 */
function base64ToWavBlob(base64Data: string, sampleRate: number): Blob {
    const arrayBuffer = base64ToArrayBuffer(base64Data);
    const pcm16 = new Int16Array(arrayBuffer);
    return pcmToWav(pcm16, sampleRate);
}

/**
 * Converts Base64 string to ArrayBuffer.
 */
function base64ToArrayBuffer(base64: string): ArrayBuffer {
    const binaryString = atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes.buffer;
}

/**
 * Creates a WAV file Blob from signed 16-bit PCM data.
 */
function pcmToWav(pcm16: Int16Array, sampleRate: number): Blob {
    const numChannels = 1;
    const bitsPerSample = 16;
    const bytesPerSample = bitsPerSample / 8;
    const byteRate = numChannels * sampleRate * bytesPerSample;
    const blockAlign = numChannels * bytesPerSample;

    const dataLength = pcm16.length * bytesPerSample;
    const buffer = new ArrayBuffer(44 + dataLength);
    const view = new DataView(buffer);

    let offset = 0;

    // RIFF chunk
    writeString("RIFF"); offset += 4;
    view.setUint32(offset, 36 + dataLength, true); offset += 4;
    writeString("WAVE"); offset += 4;

    // fmt chunk
    writeString("fmt "); offset += 4;
    view.setUint32(offset, 16, true); offset += 4; // Sub-chunk size
    view.setUint16(offset, 1, true); offset += 2;  // Audio format (1 = PCM)
    view.setUint16(offset, numChannels, true); offset += 2;
    view.setUint32(offset, sampleRate, true); offset += 4;
    view.setUint32(offset, byteRate, true); offset += 4;
    view.setUint16(offset, blockAlign, true); offset += 2;
    view.setUint16(offset, bitsPerSample, true); offset += 2;

    // data chunk
    writeString("data"); offset += 4;
    view.setUint32(offset, dataLength, true); offset += 4;

    // Write PCM data
    for (let i = 0; i < pcm16.length; i++) {
        view.setInt16(offset, pcm16[i], true);
        offset += 2;
    }

    return new Blob([view], { type: 'audio/wav' });

    function writeString(s: string) {
        for (let i = 0; i < s.length; i++) {
            view.setUint8(offset + i, s.charCodeAt(i));
        }
    }
}


// --- Main Component ---
export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [loadingText, setLoadingText] = useState('');
  const [profileText, setProfileText] = useState(personalData.profileSummary);
  const audioRef = useRef<HTMLAudioElement>(null);

  const containerClasses = darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-800';
  const cardClasses = darkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-2xl';
  const buttonClasses = (isPrimary = true) =>
    `px-4 py-2 rounded-xl text-sm font-medium transition duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 ${
      isPrimary
        ? 'bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500'
        : 'bg-gray-600 hover:bg-gray-700 text-white focus:ring-gray-500'
    }`;

  // Simple exponential backoff retry logic
  const fetchWithRetry = async (url: string, options: RequestInit, maxRetries = 5): Promise<Response> => {
    let delay = 1000;
    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response;
      } catch (error) {
        console.warn(`Attempt ${i + 1} failed. Retrying in ${delay / 1000}s...`);
        if (i === maxRetries - 1) throw error;
        await new Promise(resolve => setTimeout(resolve, delay));
        delay *= 2;
      }
    }
    throw new Error('Max retries exceeded');
  };

  /**
   * Generates text content using the Gemini API (with or without grounding/system prompt).
   */
  const generateGeminiContent = async (userQuery: string, systemPrompt: string | null = null, useGrounding = false) => {
    setLoadingText('Analyzing data...');
    setProfileText('Generating deep dive analysis...');

    const model = 'gemini-2.5-flash-preview-09-2025';
    const apiUrl = `${API_URL}${model}:generateContent?key=${API_KEY}`;

    const payload: any = {
      contents: [{ parts: [{ text: userQuery }] }],
    };

    if (systemPrompt) {
      payload.systemInstruction = { parts: [{ text: systemPrompt }] };
    }
    if (useGrounding) {
      payload.tools = [{ google_search: {} }];
    }

    try {
      const response = await fetchWithRetry(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response) throw new Error('No response received');
      const result = await response.json();
      const text = result?.candidates?.[0]?.content?.parts?.[0]?.text || 'Error: Could not retrieve analysis.';

      let sourceText = '';
      const sources = result.candidates?.[0]?.groundingMetadata?.groundingAttributions;
      if (sources) {
          const uniqueSources = Array.from(new Set(sources.map((s: any) => s.web?.uri))).filter(Boolean);
          if (uniqueSources.length > 0) {
              sourceText = `\n\n--- Sources ---\n${uniqueSources.join('\n')}`;
          }
      }

      setProfileText(text + sourceText);
    } catch (error) {
      console.error('Gemini API call failed:', error);
      setProfileText('Error: Failed to connect to the analysis service. Please check your network.');
    } finally {
      setLoadingText('');
    }
  };

  /**
   * Synthesizes speech from a given text using the TTS model.
   */
  const synthesizeSpeech = async (textToSpeak: string) => {
    setLoadingText('Synthesizing speech...');

    const model = 'gemini-2.5-flash-preview-tts';
    const apiUrl = `${API_URL}${model}:generateContent?key=${API_KEY}`;

    const payload = {
      contents: [{ parts: [{ text: textToSpeak }] }],
      generationConfig: {
        responseModalities: ["AUDIO"],
        speechConfig: {
            voiceConfig: {
                // Using a firm, clear voice
                prebuiltVoiceConfig: { voiceName: "Kore" }
            }
        }
      },
    };

    try {
      const response = await fetchWithRetry(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await response.json();
      const part = result?.candidates?.[0]?.content?.parts?.[0];
      const audioData = part?.inlineData?.data;
      const mimeType = part?.inlineData?.mimeType; // e.g., "audio/L16; rate=16000"

      if (audioData && mimeType && mimeType.startsWith("audio/L16")) {
        const sampleRateMatch = mimeType.match(/rate=(\d+)/);
        const sampleRate = sampleRateMatch ? parseInt(sampleRateMatch[1], 10) : 16000;

        const wavBlob = base64ToWavBlob(audioData, sampleRate);
        const audioUrl = URL.createObjectURL(wavBlob);

        if (audioRef.current) {
          audioRef.current.src = audioUrl;
          await audioRef.current.play();
        }
      } else {
        setProfileText('Error: Failed to generate audio. Audio data was missing or invalid.');
        console.error('TTS API error: Missing audio data or invalid mimeType.', result);
      }
    } catch (error) {
      console.error('TTS API call failed:', error);
      setProfileText('Error: Failed to connect to the speech service. Please try again.');
    } finally {
      setLoadingText('');
    }
  };

  /**
   * Action handler for "Technical Deep Dive" button.
   */
  const handleDeepDive = () => {
    const fullPrompt = `Analyze the following profile and suggest 3 high-impact, achievable next steps for professional growth for this person, based ONLY on the provided data. Structure your response with clear headings for each step.
    Profile: ${JSON.stringify(personalData)}`;
    const systemPrompt = "You are an AI Career Coach. Your goal is to provide insightful, direct, and actionable advice to a junior developer based on their resume data. Respond in a supportive, professional tone.";
    generateGeminiContent(fullPrompt, systemPrompt);
  };

  /**
   * Action handler for "Listen to My Profile" button.
   */
  const handleListenProfile = () => {
    const textToSpeak = `Hello, I am ${personalData.name}, and here is my summary: ${personalData.profileSummary}`;
    synthesizeSpeech(textToSpeak);
  };

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
        {loadingText && (
          <span className="text-sm text-yellow-400 animate-pulse hidden sm:block">{loadingText}</span>
        )}
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
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-7 13h-4a2 2 0 01-2-2V7a2 2 0 012-2h4a2 2 0 012 2v10a2 2 0 01-2 2z" /></svg>
        <span>{personalData.email}</span>
      </div>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
        <span>{personalData.phone}</span>
      </div>
      <div className="flex items-center sm:col-span-2">
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
          {/* Left Column (Profile, Actions, Contact) */}
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

            {/* AI and TTS Actions */}
            <div className={`${cardClasses} p-6 rounded-2xl space-y-4`}>
                <h3 className="text-lg font-semibold text-blue-400">Smart Actions</h3>
                <button
                    onClick={handleListenProfile}
                    className={buttonClasses(true) + ' w-full flex items-center justify-center space-x-2'}
                    disabled={!!loadingText}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM14.657 11.076a1 1 0 011.69 0 4 4 0 000-5.652 1 1 0 01-1.69-.001 6 6 0 010 8.086z" clipRule="evenodd" /></svg>
                    <span>Listen to My Profile</span>
                </button>
                <button
                    onClick={handleDeepDive}
                    className={buttonClasses(false) + ' w-full flex items-center justify-center space-x-2'}
                    disabled={!!loadingText}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6 9a1 1 0 011-1h2.188A2 2 0 0011 7V5a1 1 0 012 0v2a2 2 0 002 2h1a1 1 0 110 2h-1a2 2 0 00-2 2v2a1 1 0 01-2 0v-2a2 2 0 00-2-2H7a1 1 0 110-2h1z" /></svg>
                    <span>Technical Deep Dive (AI)</span>
                </button>
                {/* Hidden Audio Player */}
                <audio ref={audioRef} className="hidden" onEnded={() => setLoadingText('')} />
            </div>

            <div className={`${cardClasses} p-6 rounded-2xl`}>
                <Section title="Generated Text Output">
                    <pre className="whitespace-pre-wrap text-xs md:text-sm bg-gray-900/50 p-3 rounded-lg border border-gray-700/50 text-green-300 font-mono overflow-auto max-h-80">
                      {profileText}
                    </pre>
                    {loadingText && (
                        <p className="mt-2 text-center text-yellow-400 text-sm animate-pulse">
                            {loadingText}
                        </p>
                    )}
                </Section>
            </div>
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
                    <div key={index} className="p-4 rounded-xl border border-gray-700/50 transition duration-300 hover:border-blue-500/50">
                      <h4 className="text-md font-semibold text-white mb-1">{proj.title}</h4>
                      <p className="text-sm text-gray-400">{proj.description}</p>
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