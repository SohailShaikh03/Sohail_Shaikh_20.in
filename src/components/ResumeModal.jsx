import React, { useState } from "react";
import { sound } from "../utils/sound";
import {
  Printer,
  Copy,
  Download,
  X,
  Check,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon, WhatsappIcon } from "./BrandIcons";

export default function ResumeModal({ isOpen, onClose, data }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  const plainTextResume = `================================================================================
SOHAIL SHAIKH — JAVA FULL-STACK & ANDROID DEVELOPER
================================================================================
Location : Pune, Maharashtra, India
Phone    : +91 9552081902
Email    : sohailshaikh1620@gmail.com
LinkedIn : https://www.linkedin.com/in/sohail-shaikh-z
GitHub   : https://github.com/SohailShaikh03

--------------------------------------------------------------------------------
CAREER SUMMARY
--------------------------------------------------------------------------------
Java Full-Stack and Android Developer fresh out of a BBA-CA degree from Savitribai
Phule Pune University (ATSS College, CGPA 8.56 / A+). Proficient in building robust
backend web applications using Java Servlets, JSP, JDBC, and SQL, along with native
Android applications using Java and Firebase. Passionate about clean MVC architecture,
relational database design, and assistive technology. Immediate availability for 2026.

--------------------------------------------------------------------------------
TECHNICAL SKILLS
--------------------------------------------------------------------------------
- Languages          : Java, SQL, Python, JavaScript, HTML5, CSS3
- Web & Backend      : Java Servlets, JSP, JDBC, RESTful APIs, Apache Tomcat
- Mobile Development : Android SDK, Java, XML, Firebase (Auth, Realtime DB, Storage)
- Databases          : MySQL, PostgreSQL, SQLite, Relational Schema Design & Normalization
- Core Competencies  : OOP, MVC Architecture, Data Structures, Multithreading, Debugging
- Tools & VCS        : Git, GitHub, Android Studio, VS Code, Eclipse, OpenCV, TensorFlow

--------------------------------------------------------------------------------
FEATURED PROJECTS
--------------------------------------------------------------------------------
1. ORBIT — Java Full-Stack Web Application
   Tech Stack: Java, Servlets, JSP, SQL (JDBC), HTML5, CSS3, JavaScript
   Repo: https://github.com/SohailShaikh03/Orbit
   - Built on Model-View-Controller (MVC) architecture separating Servlet controllers from JSP views.
   - Designed secure session tracking, user authentication, and role-based access management.
   - Integrated relational database persistence with structured SQL queries and JDBC for CRUD operations.
   - Styled responsive frontend interfaces with custom CSS and interactive client JavaScript.

2. ROOTS — Native Android Social Application
   Tech Stack: Android SDK, Java, Firebase Auth, Realtime DB, Cloud Storage, XML
   Repo: https://github.com/SohailShaikh03/Roots
   - Built a private family social network with real-time media feeds and photo timelines.
   - Implemented secure Firebase Authentication for user registration and session persistence.
   - Connected Firebase Realtime Database & Cloud Storage for instantaneous media sync.
   - Engineered modern Material Design UI and offline caching for seamless browsing without internet.

3. MUDRA — Real-Time Indian Sign Language (ISL) Recognition System
   Tech Stack: Python, OpenCV, TensorFlow, Keras, CNN
   Repo: https://github.com/SohailShaikh03/Mudra
   - Processed live camera streams in real time using OpenCV image segmentation pipelines.
   - Trained a Convolutional Neural Network (CNN) to classify gestures into textual English subtitles.
   - Presented at the Avishkar Research Convention (Zonal Level); recognized for accessibility innovation.

4. GAMING HUB — Zero-Dependency Web Arcade
   Tech Stack: HTML5, CSS3, Vanilla JavaScript, Web Audio API, Web Storage API
   Repo: https://github.com/SohailShaikh03/Gaming-Hub
   - Created browser mini-games with 60 FPS animation loops and real-time collision detection.
   - Implemented synthesized audio feedback using Web Audio API and persistent high-score tracking.

--------------------------------------------------------------------------------
EDUCATION
--------------------------------------------------------------------------------
- BBA in Computer Applications (BBA-CA) | 2023 – 2026
  ATSS College, Chinchwad, Pune (Savitribai Phule Pune University)
  Result: CGPA 8.56 (Grade A+)

- Higher Secondary Certificate (HSC) — Commerce | 2021 – 2023
  Lion's Club School & Junior College, Pune (Maharashtra State Board)
  Result: 71.00%

- Secondary School Certificate (SSC) | 2020 – 2021
  Samson Memorial Republic High School, Pune (Maharashtra State Board)
  Result: 75.50%

--------------------------------------------------------------------------------
CERTIFICATIONS & LEADERSHIP
--------------------------------------------------------------------------------
- Software Programming Developer/Engineer Certification (Proficiency in OOP & Java)
- Modern Web Development Certification (Udemy)
- Head Boy (3 Consecutive Years) & College Class Representative (ATSS College, 80+ peers)
- Avishkar Research Convention Zonal Representative (SPPU Inter-Collegiate Forum)

--------------------------------------------------------------------------------
LANGUAGES
--------------------------------------------------------------------------------
- English (Professional), Hindi (Fluent), Marathi (Native)
================================================================================`;

  const handleCopyText = () => {
    sound.playSuccess();
    navigator.clipboard.writeText(plainTextResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleDownloadTxt = () => {
    sound.playSuccess();
    const blob = new Blob([plainTextResume], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "Sohail_Shaikh_Resume.txt";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm animate-fadeIn">
      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-[#fbfaf6] dark:bg-[#1a1916] text-[#1c1b18] dark:text-[#f3f2ed] border-2 border-[#1c1b18] dark:border-[#3e3b33] rounded-sm shadow-2xl overflow-hidden font-mono">
        
        {/* Top Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 sm:p-4 bg-[#1c1b18] text-[#f3f2ed] border-b-2 border-[#1c1b18] dark:border-[#3e3b33] flex-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4701a] animate-pulse" />
            <span className="text-[12px] sm:text-[13px] tracking-[0.18em] uppercase font-bold text-[#f0a04b]">
              OFFICIAL PERSONNEL FILE // RESUME &amp; CV
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print directly or save as PDF"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#d4701a] hover:bg-[#b45a12] text-white text-[11px] font-bold tracking-[0.1em] uppercase rounded-sm transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PRINT / PDF</span>
            </button>

            <button
              onClick={handleCopyText}
              title="Copy ATS-friendly plain text resume"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-[#4a473f] hover:border-white text-[#eae6dd] text-[11px] font-medium tracking-[0.08em] uppercase rounded-sm transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-green-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span className="hidden xs:inline">{copied ? "COPIED" : "COPY TEXT"}</span>
            </button>

            <button
              onClick={handleDownloadTxt}
              title="Download text file (.txt)"
              className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1.5 border border-[#4a473f] hover:border-white text-[#eae6dd] text-[11px] font-medium tracking-[0.08em] uppercase rounded-sm transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD .TXT</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              title="Close modal (Esc)"
              className="p-1.5 text-[#a39d8e] hover:text-white hover:bg-white/10 rounded-sm transition-colors ml-1"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable Document Container */}
        <div className="overflow-y-auto p-5 sm:p-8 md:p-10 space-y-7 selection:bg-[#d4701a] selection:text-white">
          
          {/* Resume Header */}
          <div className="border-b-2 border-[#1c1b18] dark:border-[#3e3b33] pb-6">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h1 className="font-display font-black text-[38px] sm:text-[48px] uppercase tracking-wide leading-none text-[#1c1b18] dark:text-white">
                SOHAIL SHAIKH
              </h1>
              <span className="text-[12px] uppercase font-bold tracking-[0.16em] text-[#d4701a] px-2.5 py-1 border border-[#d4701a] bg-[#d4701a]/10 rounded-sm">
                AVAILABLE FOR PLACEMENT // 2026 BATCH
              </span>
            </div>
            
            <div className="text-[16px] sm:text-[18px] font-bold text-[#b45a12] dark:text-[#f0a04b] mt-1.5 uppercase tracking-wider">
              Java Full-Stack &amp; Android Developer
            </div>

            {/* Quick Contact Line */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4 text-[12px] sm:text-[13px] text-[#66625a] dark:text-[#a09c91]">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#d4701a]" />
                Pune, Maharashtra, India
              </span>
              <a
                href={`tel:${data?.phone || "+919552081902"}`}
                className="flex items-center gap-1.5 hover:text-[#d4701a] text-inherit"
              >
                <Phone className="w-3.5 h-3.5 text-[#d4701a]" />
                {data?.phone || "+91 9552081902"}
              </a>
              <a
                href={`mailto:${data?.email || "sohailshaikh1620@gmail.com"}`}
                className="flex items-center gap-1.5 hover:text-[#d4701a] text-inherit"
              >
                <Mail className="w-3.5 h-3.5 text-[#d4701a]" />
                {data?.email || "sohailshaikh1620@gmail.com"}
              </a>
              <a
                href={data?.whatsappUrl || "https://wa.me/919552081902"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#25D366] text-inherit"
              >
                <WhatsappIcon className="w-3.5 h-3.5 text-[#25D366] fill-current" />
                WhatsApp
              </a>
              <a
                href={data?.instagramUrl || "https://www.instagram.com/zohell._"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#E4405F] text-inherit"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-[#E4405F]" />
                @zohell._
              </a>
              <a
                href={data?.linkedinUrl || "https://www.linkedin.com/in/sohail-shaikh-z"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#d4701a] text-inherit"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#d4701a]" />
                LinkedIn
              </a>
              <a
                href={data?.githubUrl || "https://github.com/SohailShaikh03"}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 hover:text-[#d4701a] text-inherit"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#d4701a]" />
                GitHub
              </a>
            </div>
          </div>

          {/* Section: Professional Summary */}
          <div>
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-bold text-[#b45a12] dark:text-[#f0a04b] mb-2.5">
              <span className="w-2 h-2 bg-[#d4701a] inline-block" />
              <span>Professional Summary</span>
            </div>
            <p className="text-[14px] sm:text-[14.5px] leading-relaxed text-[#1c1b18] dark:text-[#dedad0]">
              Passionate, disciplined Java Full-Stack and Android Developer completing a BBA in Computer Applications at ATSS College, Pune (CGPA 8.56 / A+). Proficient in designing robust backend systems using Java Servlets, JSP, JDBC, and relational SQL, combined with native Android app engineering and computer vision accessibility applications. Committed to clean MVC architecture, defensive code, and scalable database schemas.
            </p>
          </div>

          {/* Section: Technical Competencies */}
          <div>
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-bold text-[#b45a12] dark:text-[#f0a04b] mb-3">
              <span className="w-2 h-2 bg-[#d4701a] inline-block" />
              <span>Technical Skills</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px]">
              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e] rounded-sm">
                <span className="font-bold text-[#1c1b18] dark:text-white block mb-1">Languages:</span>
                <span className="text-[#4a473f] dark:text-[#c4bfb3]">Java (Core &amp; Advanced), SQL, Python, JavaScript (ES6+), HTML5, CSS3</span>
              </div>
              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e] rounded-sm">
                <span className="font-bold text-[#1c1b18] dark:text-white block mb-1">Web &amp; Backend:</span>
                <span className="text-[#4a473f] dark:text-[#c4bfb3]">Java Servlets, JSP, JDBC Connectivity, Apache Tomcat, RESTful APIs, React.js</span>
              </div>
              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e] rounded-sm">
                <span className="font-bold text-[#1c1b18] dark:text-white block mb-1">Mobile &amp; Cloud:</span>
                <span className="text-[#4a473f] dark:text-[#c4bfb3]">Android SDK, Java, XML, Firebase (Auth, Realtime DB, Cloud Storage)</span>
              </div>
              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e] rounded-sm">
                <span className="font-bold text-[#1c1b18] dark:text-white block mb-1">Databases &amp; Tools:</span>
                <span className="text-[#4a473f] dark:text-[#c4bfb3]">MySQL, PostgreSQL, SQLite, Git, GitHub, Android Studio, Eclipse, VS Code</span>
              </div>
            </div>
          </div>

          {/* Section: Key Projects */}
          <div>
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-bold text-[#b45a12] dark:text-[#f0a04b] mb-3">
              <span className="w-2 h-2 bg-[#d4701a] inline-block" />
              <span>Selected Projects</span>
            </div>
            
            <div className="space-y-4">
              {/* Project 1: Orbit */}
              <div className="p-4 bg-[#fbfaf6] dark:bg-[#22211e] border-2 border-[#1c1b18] dark:border-[#38352e] rounded-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="text-[16px] font-bold text-[#1c1b18] dark:text-white">
                    Orbit — Java Full-Stack Web Application
                  </span>
                  <a
                    href="https://github.com/SohailShaikh03/Orbit"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12px] text-[#b45a12] dark:text-[#f0a04b] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-[12px] text-[#66625a] dark:text-[#a09c91] font-semibold mt-0.5">
                  Tech: Java, Servlets, JSP, JDBC, MySQL, HTML5, CSS3, JavaScript (MVC Architecture)
                </div>
                <ul className="list-disc list-inside mt-2 text-[13px] leading-relaxed text-[#4a473f] dark:text-[#dedad0] space-y-1">
                  <li>Built on the Model-View-Controller (MVC) pattern separating Servlet controllers from JSP presentation views.</li>
                  <li>Implemented secure session tracking, user authentication, and role-based access management.</li>
                  <li>Integrated relational database persistence with structured SQL queries and JDBC connectivity for dynamic CRUD operations.</li>
                </ul>
              </div>

              {/* Project 2: Roots */}
              <div className="p-4 bg-[#fbfaf6] dark:bg-[#22211e] border-2 border-[#1c1b18] dark:border-[#38352e] rounded-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="text-[16px] font-bold text-[#1c1b18] dark:text-white">
                    Roots — Native Android Social Network Application
                  </span>
                  <a
                    href="https://github.com/SohailShaikh03/Roots"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12px] text-[#b45a12] dark:text-[#f0a04b] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-[12px] text-[#66625a] dark:text-[#a09c91] font-semibold mt-0.5">
                  Tech: Android SDK, Java, Firebase (Auth, Realtime DB, Cloud Storage), XML, Material Design
                </div>
                <ul className="list-disc list-inside mt-2 text-[13px] leading-relaxed text-[#4a473f] dark:text-[#dedad0] space-y-1">
                  <li>Engineered a private family network with real-time media feeds, timeline sync, and photo sharing.</li>
                  <li>Integrated Firebase Authentication with session management and Firebase Cloud Storage for high-speed media delivery.</li>
                  <li>Implemented local offline data caching allowing uninterrupted browsing without active internet.</li>
                </ul>
              </div>

              {/* Project 3: Mudra */}
              <div className="p-4 bg-[#fbfaf6] dark:bg-[#22211e] border-2 border-[#1c1b18] dark:border-[#38352e] rounded-sm">
                <div className="flex flex-wrap items-baseline justify-between gap-1">
                  <span className="text-[16px] font-bold text-[#1c1b18] dark:text-white">
                    Mudra — Real-Time Indian Sign Language (ISL) Recognition
                  </span>
                  <a
                    href="https://github.com/SohailShaikh03/Mudra"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[12px] text-[#b45a12] dark:text-[#f0a04b] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>View GitHub</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="text-[12px] text-[#66625a] dark:text-[#a09c91] font-semibold mt-0.5">
                  Tech: Python, OpenCV, TensorFlow, Keras, Convolutional Neural Networks (CNN)
                </div>
                <ul className="list-disc list-inside mt-2 text-[13px] leading-relaxed text-[#4a473f] dark:text-[#dedad0] space-y-1">
                  <li>Captures live video camera streams, isolating hand regions using skin-tone segmentation in OpenCV.</li>
                  <li>Classifies gestures via a trained CNN model, displaying instantaneous English textual subtitles.</li>
                  <li>Presented at the Avishkar Research Convention (Zonal Level), recognized for assistive technology.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section: Education */}
          <div>
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-bold text-[#b45a12] dark:text-[#f0a04b] mb-3">
              <span className="w-2 h-2 bg-[#d4701a] inline-block" />
              <span>Education Record</span>
            </div>
            <div className="space-y-2.5 text-[13px]">
              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e] flex flex-wrap justify-between items-center gap-2">
                <div>
                  <span className="font-bold text-[#1c1b18] dark:text-white">BBA in Computer Applications (BBA-CA)</span>
                  <div className="text-[12px] text-[#66625a] dark:text-[#a09c91]">ATSS College, Pune — Savitribai Phule Pune University</div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#d4701a]">CGPA: 8.56 (Grade A+)</span>
                  <div className="text-[11px] text-[#66625a] dark:text-[#a09c91]">2023 – 2026</div>
                </div>
              </div>

              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e] flex flex-wrap justify-between items-center gap-2">
                <div>
                  <span className="font-bold text-[#1c1b18] dark:text-white">Higher Secondary Certificate (HSC) — Commerce</span>
                  <div className="text-[12px] text-[#66625a] dark:text-[#a09c91]">Lion's Club School &amp; Junior College, Pune — Maharashtra State Board</div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#d4701a]">71.00%</span>
                  <div className="text-[11px] text-[#66625a] dark:text-[#a09c91]">2021 – 2023</div>
                </div>
              </div>

              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e] flex flex-wrap justify-between items-center gap-2">
                <div>
                  <span className="font-bold text-[#1c1b18] dark:text-white">Secondary School Certificate (SSC)</span>
                  <div className="text-[12px] text-[#66625a] dark:text-[#a09c91]">Samson Memorial Republic High School, Pune — Maharashtra State Board</div>
                </div>
                <div className="text-right">
                  <span className="font-bold text-[#d4701a]">75.50%</span>
                  <div className="text-[11px] text-[#66625a] dark:text-[#a09c91]">2020 – 2021</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Certifications & Leadership */}
          <div>
            <div className="flex items-center gap-2 text-[12px] tracking-[0.2em] uppercase font-bold text-[#b45a12] dark:text-[#f0a04b] mb-3">
              <span className="w-2 h-2 bg-[#d4701a] inline-block" />
              <span>Certifications &amp; Leadership</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[13px]">
              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e]">
                <div className="font-bold text-[#1c1b18] dark:text-white">Software Programming Developer</div>
                <div className="text-[11.5px] text-[#66625a] dark:text-[#a09c91]">Career Certification — OOP &amp; Java Fundamentals</div>
              </div>
              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e]">
                <div className="font-bold text-[#1c1b18] dark:text-white">Web Development Full Stack</div>
                <div className="text-[11.5px] text-[#66625a] dark:text-[#a09c91]">Udemy — HTML5, CSS3, JavaScript, React.js</div>
              </div>
              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e]">
                <div className="font-bold text-[#1c1b18] dark:text-white">Head Boy (3 Years) &amp; Class Rep</div>
                <div className="text-[11.5px] text-[#66625a] dark:text-[#a09c91]">Elected student council leader representing 80+ peers</div>
              </div>
              <div className="p-3 bg-[#f3f2ed] dark:bg-[#22211e] border border-[#cfcabb] dark:border-[#38352e]">
                <div className="font-bold text-[#1c1b18] dark:text-white">Avishkar Research Convention</div>
                <div className="text-[11.5px] text-[#66625a] dark:text-[#a09c91]">SPPU Zonal level research presenter (Mudra ISL)</div>
              </div>
            </div>
          </div>

          {/* Section: Languages */}
          <div className="pt-2 border-t border-[#cfcabb] dark:border-[#38352e] flex flex-wrap justify-between items-center text-[12px] text-[#66625a] dark:text-[#a09c91]">
            <div>
              <span className="font-bold text-[#1c1b18] dark:text-white uppercase">Languages Known:</span> English (Professional), Hindi (Fluent), Marathi (Native)
            </div>
            <div className="font-bold text-[#d4701a]">
              DEV BUREAU ARCHIVE // 0412-SS
            </div>
          </div>

        </div>

        {/* Modal Bottom Footer */}
        <div className="p-3 sm:p-4 bg-[#f3f2ed] dark:bg-[#141311] border-t-2 border-[#1c1b18] dark:border-[#38352e] flex flex-wrap justify-between items-center gap-3 flex-none text-[12px]">
          <div className="text-[#66625a] dark:text-[#a09c91]">
            Tip: Click <span className="font-bold text-[#1c1b18] dark:text-white">PRINT / PDF</span> to save as clean PDF.
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-[#1c1b18] dark:bg-[#f3f2ed] text-[#f3f2ed] dark:text-[#1c1b18] hover:bg-[#d4701a] dark:hover:bg-[#d4701a] dark:hover:text-white font-bold uppercase tracking-wider text-[11px] rounded-sm transition-colors"
            >
              Print / Save PDF
            </button>
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-3.5 py-2 border border-[#cfcabb] dark:border-[#3e3b33] text-[#66625a] dark:text-[#a09c91] hover:text-[#1c1b18] dark:hover:text-white font-medium uppercase text-[11px] rounded-sm transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
