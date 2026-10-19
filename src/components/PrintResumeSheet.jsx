import React from "react";

export default function PrintResumeSheet() {
  return (
    <div id="printable-resume" className="hidden print:block text-black bg-white font-sans p-6 sm:p-8 max-w-[820px] mx-auto text-[13px] leading-snug">
      {/* Header */}
      <div className="border-b-2 border-black pb-3 mb-4 text-center">
        <h1 className="text-2xl font-bold uppercase tracking-wider text-black m-0">
          SOHAIL SHAIKH
        </h1>
        <div className="text-[13px] font-semibold text-neutral-800 tracking-wide uppercase mt-1">
          Java Full-Stack &amp; Android Developer
        </div>
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-1 text-[11.5px] text-neutral-700">
          <span>Pune, Maharashtra, India</span>
          <span>•</span>
          <span>+91 9552081902 (WhatsApp)</span>
          <span>•</span>
          <span>sohailshaikh1620@gmail.com</span>
          <span>•</span>
          <span>linkedin.com/in/sohail-shaikh-z</span>
          <span>•</span>
          <span>github.com/SohailShaikh03</span>
          <span>•</span>
          <span>instagram.com/zohell._</span>
        </div>
      </div>

      {/* Professional Summary */}
      <div className="mb-3.5">
        <h2 className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
          Professional Summary
        </h2>
        <p className="text-[12px] leading-relaxed text-neutral-900 m-0">
          Motivated and detail-oriented Java Full-Stack &amp; Android Developer completing a BBA in Computer Applications at ATSS College, Pune (CGPA 8.56 / A+). Proficient in building robust backend services with Java, Servlets, JSP, JDBC, and SQL, alongside native Android mobile applications using Java and Firebase. Hands-on experience developing computer vision accessibility tools and multi-tiered MVC architectures. Immediate availability for 2026.
        </p>
      </div>

      {/* Technical Skills */}
      <div className="mb-3.5">
        <h2 className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
          Technical Skills
        </h2>
        <div className="grid grid-cols-[140px_1fr] gap-y-1 text-[12px]">
          <span className="font-bold text-neutral-900">Languages:</span>
          <span>Java (Core &amp; Advanced), SQL, Python, JavaScript (ES6+), HTML5, CSS3</span>

          <span className="font-bold text-neutral-900">Web &amp; Backend:</span>
          <span>Java Servlets, JSP, JDBC Connectivity, Apache Tomcat, REST APIs, React.js</span>

          <span className="font-bold text-neutral-900">Mobile &amp; Cloud:</span>
          <span>Android SDK, Java, XML, Firebase (Auth, Realtime DB, Cloud Storage), Material Design</span>

          <span className="font-bold text-neutral-900">Databases:</span>
          <span>MySQL, PostgreSQL, SQLite, Relational Database Design &amp; Schema Normalization</span>

          <span className="font-bold text-neutral-900">Core CS Concepts:</span>
          <span>Object-Oriented Programming (OOP), MVC Architecture, Data Structures, Multithreading</span>

          <span className="font-bold text-neutral-900">Developer Tools:</span>
          <span>Git, GitHub, Android Studio, Eclipse, VS Code, OpenCV, TensorFlow/Keras</span>
        </div>
      </div>

      {/* Key Projects */}
      <div className="mb-3.5">
        <h2 className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
          Key Projects
        </h2>

        <div className="space-y-2.5">
          {/* Orbit */}
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-[12.5px] text-black">
                Orbit — Java Full-Stack Web Application
              </span>
              <span className="text-[11px] text-neutral-600">github.com/SohailShaikh03/Orbit</span>
            </div>
            <div className="text-[11.5px] italic text-neutral-700">
              Technologies: Java, Servlets, JSP, JDBC, MySQL, HTML5, CSS3, JavaScript (MVC Architecture)
            </div>
            <ul className="list-disc list-outside ml-4 mt-0.5 text-[11.5px] leading-relaxed text-neutral-800 space-y-0.5">
              <li>Architected using Model-View-Controller (MVC) separating Servlet controllers from dynamic JSP presentation views.</li>
              <li>Engineered secure user session tracking, password authentication, and role-based access management.</li>
              <li>Integrated relational database persistence utilizing structured SQL queries and JDBC connectivity for dynamic CRUD operations.</li>
            </ul>
          </div>

          {/* Roots */}
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-[12.5px] text-black">
                Roots — Native Android Social Network Application
              </span>
              <span className="text-[11px] text-neutral-600">github.com/SohailShaikh03/Roots</span>
            </div>
            <div className="text-[11.5px] italic text-neutral-700">
              Technologies: Android SDK, Java, Firebase (Auth, Realtime Database, Cloud Storage), XML
            </div>
            <ul className="list-disc list-outside ml-4 mt-0.5 text-[11.5px] leading-relaxed text-neutral-800 space-y-0.5">
              <li>Engineered a private family network with real-time media feeds, timeline sync, and instant photo sharing.</li>
              <li>Implemented secure Firebase Authentication, session persistence, and Firebase Cloud Storage for high-speed media delivery.</li>
              <li>Built local offline caching logic enabling uninterrupted browsing without active network connectivity.</li>
            </ul>
          </div>

          {/* Mudra */}
          <div>
            <div className="flex justify-between items-baseline">
              <span className="font-bold text-[12.5px] text-black">
                Mudra — Real-Time Indian Sign Language (ISL) Recognition System
              </span>
              <span className="text-[11px] text-neutral-600">github.com/SohailShaikh03/Mudra</span>
            </div>
            <div className="text-[11.5px] italic text-neutral-700">
              Technologies: Python, OpenCV, TensorFlow, Keras, Convolutional Neural Networks (CNN)
            </div>
            <ul className="list-disc list-outside ml-4 mt-0.5 text-[11.5px] leading-relaxed text-neutral-800 space-y-0.5">
              <li>Captures live video camera streams, isolating hand gestures using skin-tone segmentation in OpenCV.</li>
              <li>Classifies gestures using a trained CNN deep learning model and translates them into real-time English subtitles.</li>
              <li>Presented at the Avishkar Research Convention (Zonal Level); recognized for assistive technology innovation.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-3">
        <h2 className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
          Education
        </h2>
        <div className="space-y-1.5 text-[12px]">
          <div className="flex justify-between items-baseline">
            <div>
              <span className="font-bold text-black">Bachelor of Business Administration in Computer Applications (BBA-CA)</span>
              <div className="text-[11px] text-neutral-700">ATSS College, Chinchwad, Pune — Savitribai Phule Pune University</div>
            </div>
            <div className="text-right">
              <span className="font-bold text-black">CGPA: 8.56 / A+</span>
              <div className="text-[11px] text-neutral-600">2023 – 2026</div>
            </div>
          </div>

          <div className="flex justify-between items-baseline">
            <div>
              <span className="font-semibold text-black">Higher Secondary Certificate (HSC) — Commerce</span>
              <div className="text-[11px] text-neutral-700">Lion's Club School &amp; Junior College, Pune — Maharashtra State Board</div>
            </div>
            <div className="text-right">
              <span className="font-semibold text-black">71.00%</span>
              <div className="text-[11px] text-neutral-600">2021 – 2023</div>
            </div>
          </div>

          <div className="flex justify-between items-baseline">
            <div>
              <span className="font-semibold text-black">Secondary School Certificate (SSC)</span>
              <div className="text-[11px] text-neutral-700">Samson Memorial Republic High School, Pune — Maharashtra State Board</div>
            </div>
            <div className="text-right">
              <span className="font-semibold text-black">75.50%</span>
              <div className="text-[11px] text-neutral-600">2020 – 2021</div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications & Leadership */}
      <div>
        <h2 className="text-[12px] font-bold uppercase tracking-wider border-b border-black pb-0.5 mb-1.5 text-black">
          Certifications &amp; Leadership
        </h2>
        <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11.5px]">
          <div>
            <span className="font-bold text-black">• Software Programming Developer:</span>
            <span className="text-neutral-800"> OOP &amp; Java Fundamentals</span>
          </div>
          <div>
            <span className="font-bold text-black">• Web Development (Udemy):</span>
            <span className="text-neutral-800"> HTML5, CSS3, JS, React.js</span>
          </div>
          <div>
            <span className="font-bold text-black">• Head Boy (3 Consecutive Years):</span>
            <span className="text-neutral-800"> Student Council &amp; Class Rep</span>
          </div>
          <div>
            <span className="font-bold text-black">• Avishkar Research Convention:</span>
            <span className="text-neutral-800"> Zonal Level ISL Presenter</span>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="mt-2.5 pt-1.5 border-t border-neutral-300 text-[11px] text-neutral-700 flex justify-between">
        <span><strong>Languages:</strong> English, Hindi, Marathi</span>
        <span><strong>Clearance:</strong> Fresher / Immediate Joiner 2026</span>
      </div>
    </div>
  );
}
