export const portfolioData = {
  personnel: {
    fileCode: "0412-SS",
    name: "Sohail Shaikh",
    alias: "Zoheil",
    role: "JAVA & SPRING BOOT DEVELOPER / QA AUTOMATION ENGINEER",
    tagline: "FILE 0412-SS / PUNE, INDIA",
    bio: "I'm Sohail, a Computer Applications graduate from Pune with an 8.56 CGPA and a strong interest in software development and software testing. I primarily work with Java, Spring Boot, and Hibernate, alongside automated testing tools like Selenium WebDriver, TestNG, Cucumber, Postman for API testing, and Unit Testing. I also work with SQL, Python, and JavaScript.\n\nI'm passionate about learning new technologies, solving problems, ensuring high software reliability, and building robust applications. Currently focused on strengthening both my backend development and QA testing skills, and actively open to Software Developer, Java Developer, and QA / Software Tester roles.",
    target: "Software Developer, Java Developer, QA / Software Tester, Automation Engineer. Remote or Pune.",
    base: "Dehu Road, Pune 412101, Maharashtra",
    degree: "BBA (Computer Applications), ATSS College, 2023–2026",
    cgpa: "8.56 / A+",
    languages: "English, Hindi, Marathi",
    status: "Open to work",
    githubUrl: "https://github.com/SohailShaikh03",
    email: "sohailshaikh1620@gmail.com",
    linkedinUrl: "https://www.linkedin.com/in/sohail-shaikh-z",
    instagramUrl: "https://www.instagram.com/zohell._",
    whatsappUrl: "https://wa.me/919552081902",
    phone: "+91 9552081902",
    location: "Pune, Maharashtra, India",
    availability: "Immediate / 2026 Batch",
    resumeUrl: "./myresume.pdf",
    aboutTechStack: [
      "JAVA",
      "SPRING BOOT",
      "HIBERNATE",
      "SELENIUM",
      "TESTNG",
      "CUCUMBER",
      "POSTMAN",
      "UNIT TESTING",
      "SQL",
      "PYTHON",
      "JAVASCRIPT",
      "REACT",
      "BOOTSTRAP",
      "TAILWIND",
      "HTML5",
      "CSS3",
      "ANTIGRAVITY"
    ]
  },

  projects: [
    {
      id: "roots",
      code: "A-01",
      title: "ROOTS",
      kind: "ANDROID",
      type: "Android Mobile Application",
      blurb: "A Firebase backed family app for Android. I took it past the first build: fixed auth routing, input validation and crashes, then redesigned the interface with an Instagram-style polish.",
      points: [
        "Resolved auth routing, validation and crash bugs",
        "Found and removed a hardcoded API key",
        "Premium UI redesign across core screens",
        "Connected Firebase Realtime Database & Storage for instantaneous photo timelines",
        "Engineered offline media caching for uninterrupted browsing without internet"
      ],
      tags: ["ANDROID", "FIREBASE", "JAVA", "MATERIAL DESIGN"],
      repoUrl: "https://github.com/SohailShaikh03/Roots",
      note: "Native Android application built in Java with Firebase cloud infrastructure."
    },
    {
      id: "gaming",
      code: "A-02",
      title: "GAMING HUB",
      kind: "WEB",
      type: "Interactive Web Portal & Arcade",
      blurb: "A responsive browser-based arcade platform featuring interactive mini-games, dynamic score tracking, and retro-themed sound effects. Redesigned with HTML5, CSS3, JavaScript, Bootstrap, and Tailwind CSS for instant zero-dependency responsiveness.",
      points: [
        "Interactive browser arcade styled with modern HTML, CSS, JavaScript, Bootstrap, and Tailwind",
        "Hosts a suite of responsive mini-games with 60 FPS animation loops and collision detection",
        "Persistent high-score tracking and player stats stored locally via Web Storage API",
        "Tactile retro audio feedback synthesized on-the-fly using the Web Audio API",
        "Optimized responsive layouts supporting keyboard controls on desktop and touch gestures on mobile"
      ],
      tags: ["HTML5", "CSS3", "JAVASCRIPT", "BOOTSTRAP", "TAILWIND", "WEB AUDIO"],
      repoUrl: "https://github.com/SohailShaikh03/Gaming-Hub",
      note: "Lightweight browser arcade with keyboard and touch control support."
    },
    {
      id: "mudra",
      code: "A-03",
      title: "MUDRA",
      kind: "COMPUTER VISION",
      type: "AI & Computer Vision Accessibility Tool",
      blurb: "A real-time Indian Sign Language (ISL) recognition system that translates hand gestures from live camera feeds into readable text subtitles. Employs computer vision for gesture segmentation and deep learning for symbol classification.",
      points: [
        "Captures and processes live camera video streams in real time using OpenCV image pipelines",
        "Utilizes a Convolutional Neural Network (CNN) in TensorFlow/Keras to classify Indian Sign Language gestures",
        "Applies skin-tone segmentation, background noise filtering, and bounding-box detection",
        "Translates classified gesture frames into instant textual English subtitles on screen",
        "Presented at the zonal Avishkar Research Convention; recognized for assistive technology"
      ],
      tags: ["PYTHON", "TENSORFLOW", "KERAS", "OPENCV", "CNN", "ACCESSIBILITY"],
      repoUrl: "https://github.com/SohailShaikh03/Mudra",
      note: "Presented at the Avishkar Research Competition (Zonal Level)."
    },
    {
      id: "orbit",
      code: "A-04",
      title: "ORBIT",
      kind: "FULL-STACK",
      type: "Java Full-Stack Web Application",
      blurb: "A full-stack web application built using Java Servlets, JSP, SQL (JDBC), and modern frontend components crafted with React, Bootstrap, and Tailwind CSS. Implements an MVC architecture to manage user authentication, session state, and relational database operations.",
      points: [
        "Built on Model-View-Controller (MVC) architecture separating Servlet controllers from presentation views",
        "Features secure session tracking, user authentication, and role-based access management",
        "Integrates relational database persistence with structured SQL queries and JDBC connectivity",
        "Interactive dynamic dashboard views styled with Tailwind CSS and responsive Bootstrap grid utilities",
        "Client-side interactivity powered by modern JavaScript and React component workflows"
      ],
      tags: ["JAVA", "SERVLETS", "JSP", "SQL", "REACT", "BOOTSTRAP", "TAILWIND"],
      repoUrl: "https://github.com/SohailShaikh03/Orbit",
      note: "Full-stack Java web architecture utilizing Servlets, JSP, JDBC, and SQL database management."
    }
  ],

  skillGroups: [
    {
      id: "backend",
      label: "Java & Backend Engineering",
      items: [
        { name: "Java (Core & Advanced)", level: "Primary", used: "OOP, Collections, Multithreading, Streams" },
        { name: "Spring Boot", level: "Primary", used: "REST APIs, DI/IoC, Backend Services" },
        { name: "Hibernate & JPA", level: "Proficient", used: "ORM, Entity Mapping, Database Transactions" },
        { name: "SQL & Relational Databases", level: "Proficient", used: "MySQL, Relational Schema Design, Normalization" },
        { name: "Java Servlets & JSP", level: "Proficient", used: "Orbit MVC Web Architecture & Session Management" },
        { name: "Python", level: "Proficient", used: "Mudra Gesture Recognition & Scripting" }
      ]
    },
    {
      id: "testing",
      label: "Testing & Quality Assurance (QA)",
      items: [
        { name: "Selenium WebDriver", level: "Primary", used: "Web UI Test Automation & Cross-Browser Testing" },
        { name: "TestNG", level: "Primary", used: "Test Execution, Assertions, Parallel Runs, Data Providers" },
        { name: "Cucumber (BDD)", level: "Proficient", used: "Behavior-Driven Development & Gherkin Feature Scenarios" },
        { name: "Postman", level: "Primary", used: "API Testing, Automated Request Collections & REST Endpoint Verification" },
        { name: "Unit Testing", level: "Core", used: "JUnit, Test Fixtures, Component & Edge Case Verification" },
        { name: "Manual Testing & QA Lifecycle", level: "Core", used: "Test Cases, Bug Tracking, STLC & Defect Reporting" }
      ]
    },
    {
      id: "frontend",
      label: "Frontend & Web Tech Stack",
      items: [
        { name: "HTML5", level: "Primary", used: "Semantic Structure & Modern Web Standards" },
        { name: "CSS3", level: "Primary", used: "Responsive Layouts, Flexbox, Grid, Animations" },
        { name: "JavaScript (ES6+)", level: "Primary", used: "DOM Manipulation, Asynchronous Logic, APIs" },
        { name: "React.js", level: "Proficient", used: "Component Architecture, State Management, Hooks" },
        { name: "Bootstrap", level: "Proficient", used: "Rapid Responsive UI & Mobile-First Grids" },
        { name: "Tailwind CSS", level: "Proficient", used: "Utility-First Design, Dark Mode, Custom Themes" }
      ]
    },
    {
      id: "tools",
      label: "Tools & Development Workflow",
      items: [
        { name: "Git & GitHub", level: "Daily", used: "Version Control & Project Repositories" },
        { name: "Antigravity", level: "Daily", used: "AI-Assisted Development, Workflow Automation & Modern IDE" },
        { name: "Maven", level: "Daily", used: "Build Lifecycle & Dependency Management" },
        { name: "Eclipse & VS Code", level: "Daily", used: "Java & Web Development Environments" },
        { name: "Android Studio", level: "Applied", used: "Roots Android Mobile App Development" },
        { name: "MySQL Workbench & Tomcat", level: "Applied", used: "Database & Server Hosting" }
      ]
    }
  ],

  educationRecords: [
    {
      id: "bba",
      years: "2023 – 2026",
      title: "BBA in Computer Applications",
      school: "ATSS College, Chinchwad, Pune",
      board: "Savitribai Phule Pune University",
      result: "CGPA 8.56 (A+)",
      details: "Comprehensive coursework covering Core Java, Advanced Java (Servlets, JSP), Web Development (HTML, CSS, JS), Relational Database Management Systems, Data Structures, and Mobile Applications."
    },
    {
      id: "hsc",
      years: "2021 – 2023",
      title: "HSC, Commerce",
      school: "Lion's Club School & Junior College, Pune",
      board: "Maharashtra State Board",
      result: "71.50%",
      details: "Higher secondary education in Commerce with focus on Computer Applications, Mathematics, and Commercial Studies."
    },
    {
      id: "ssc",
      years: "2020 – 2021",
      title: "SSC (Secondary School Certificate)",
      school: "Samson Memorial Republic High School, Pune",
      board: "Maharashtra State Board",
      result: "75%",
      details: "Solid academic foundation with distinction in Mathematics, General Science, and Languages."
    }
  ],

  commendations: [
    {
      type: "Corporate Training & Readiness",
      title: "ITC Infotech's STEM education Program Enabling IT Industry Readiness",
      issuer: "ITC Infotech",
      detail: "Comprehensive corporate training program empowering industry readiness, modern software engineering workflows, problem-solving, and professional IT capabilities."
    },
    {
      type: "Professional Training",
      title: "Java Fullstack training by The Kiran academy",
      issuer: "The Kiran Academy, Pune",
      detail: "In-depth hands-on technical training covering Core Java, Advanced Java, Spring Boot, Hibernate, SQL, and Full-Stack Web Development."
    },
    {
      type: "Certification",
      title: "Software Programming Developer/Engineer",
      issuer: "Career Certification Authority",
      detail: "Verified proficiency in Object-Oriented Programming, Java fundamentals, and algorithmic problem-solving."
    },
    {
      type: "Certification, Udemy",
      title: "Web Development: HTML, CSS, JavaScript, Bootstrap, React.js",
      issuer: "Udemy Course Completion",
      detail: "Hands-on project-based certification building interactive modern web interfaces."
    },
    {
      type: "Leadership",
      title: "Head Boy (3 Consecutive Years) & Class Representative",
      issuer: "School & ATSS College",
      detail: "Led student council initiatives, organized technical cultural festivals, and represented 80+ student peers as College Class Representative."
    },
    {
      type: "Competitions",
      title: "Avishkar Research Convention (Zonal Level)",
      issuer: "SPPU Inter-Collegiate Forum",
      detail: "Selected to present the 'Mudra' Indian Sign Language vision translator; recognized for technology-driven accessibility."
    }
  ],

  communityReviews: []
};
