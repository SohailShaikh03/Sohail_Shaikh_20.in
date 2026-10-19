export const portfolioData = {
  personnel: {
    fileCode: "0412-SS",
    name: "Sohail Shaikh",
    role: "JAVA FULL-STACK & ANDROID DEVELOPER",
    tagline: "Subject on file: fresher, available for placement",
    bio: "I build full-stack web applications and Android apps with Java, Servlets, JSP, SQL, and responsive frontends. Fresh out of a BBA-CA degree in Pune, focused on clean architecture, relational database design, and reliable software.",
    target: "Software Developer, Java Developer, Full-Stack Developer, Android Developer. Remote or Pune.",
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
  },

  projects: [
    {
      id: "orbit",
      code: "A-01",
      title: "Orbit",
      kind: "Full-Stack",
      type: "Java Full-Stack Web Application",
      blurb: "A full-stack web application built using Java Servlets, JSP, SQL (JDBC), and responsive HTML5/CSS3/JavaScript. It implements an MVC architecture to manage user authentication, session state, relational database operations, and dynamic dashboard views.",
      points: [
        "Built on the Model-View-Controller (MVC) pattern separating Servlet request controllers from JSP presentation views",
        "Features secure session tracking, user authentication, and role-based access management using Java Servlets",
        "Integrates relational database persistence with structured SQL queries and JDBC connectivity for dynamic CRUD operations",
        "Delivers responsive frontend interfaces styled with custom CSS and interactive client-side JavaScript behaviors",
        "Handles request dispatching, form validation, and server-side business logic for seamless data processing"
      ],
      tags: ["Java", "Servlets", "JSP", "SQL", "JDBC", "HTML5", "CSS3", "JavaScript"],
      repoUrl: "https://github.com/SohailShaikh03/Orbit",
      note: "Full-stack Java web architecture utilizing Servlets, JSP, JDBC, and SQL database management."
    },
    {
      id: "roots",
      code: "A-02",
      title: "Roots",
      kind: "Android",
      type: "Android Mobile Application",
      blurb: "A private family social and networking Android application designed for multimedia sharing and timeline interaction. Features real-time feeds, secure Firebase authentication, instant photo sharing, and offline data caching.",
      points: [
        "Provides a private family social network with real-time media feeds, photo timelines, and family connections",
        "Implements secure Firebase Authentication supporting user registration, login flows, and session persistence",
        "Connects to Firebase Realtime Database and Cloud Storage for instantaneous photo uploads and timeline sync",
        "Engineered with modern Material Design card layouts, bottom navigation, and intuitive Instagram-style interactions",
        "Includes local offline caching logic to allow uninterrupted browsing of previously loaded media without active internet"
      ],
      tags: ["Android", "Java", "Firebase", "XML", "Material Design"],
      repoUrl: "https://github.com/SohailShaikh03/Roots",
      note: "Native Android application built in Java with Firebase cloud infrastructure."
    },

    {
      id: "mudra",
      code: "A-03",
      title: "Mudra",
      kind: "Computer vision",
      type: "AI & Computer Vision Accessibility Tool",
      blurb: "A real-time Indian Sign Language (ISL) recognition system that translates hand gestures from live camera feeds into readable text. Employs computer vision for gesture segmentation and deep learning for symbol classification.",
      points: [
        "Captures and processes live camera video streams in real time using OpenCV image processing pipelines",
        "Utilizes a trained Convolutional Neural Network (CNN) in TensorFlow/Keras to classify Indian Sign Language gestures",
        "Applies skin-tone segmentation, background noise filtering, and bounding-box detection to isolate hand regions",
        "Translates classified gesture frames into instant textual English subtitles displayed on screen",
        "Presented at the zonal Avishkar Research Convention, recognized for assistive technology innovation"
      ],
      tags: ["Python", "TensorFlow", "Keras", "OpenCV", "CNN", "Accessibility"],
      repoUrl: "https://github.com/SohailShaikh03/Mudra",
      note: "Presented at the Avishkar Research Competition (Zonal Level)."
    },
    {
      id: "gaming",
      code: "A-04",
      title: "Gaming Hub",
      kind: "Web",
      type: "Interactive Web Portal",
      blurb: "A responsive browser-based arcade platform featuring interactive mini-games, dynamic score tracking, and retro-themed sound effects. Built entirely with vanilla web technologies for zero-dependency high-speed performance.",
      points: [
        "Hosts a suite of browser-based mini-games with 60 FPS animation loops and real-time collision detection",
        "Features persistent high-score tracking and player statistics stored locally via the Web Storage API",
        "Integrates synthesized audio effects using the Web Audio API for responsive tactile game feedback",
        "Built with pure HTML5, CSS3, and vanilla JavaScript without external libraries, ensuring sub-second load times",
        "Fully responsive layout optimized for keyboard controls on desktop and touch gestures on mobile"
      ],
      tags: ["HTML5", "CSS3", "JavaScript", "Web Storage", "Web Audio"],
      repoUrl: "https://github.com/SohailShaikh03/Gaming-Hub",
      note: "Lightweight browser arcade with keyboard and touch control support."
    }

  ],

  skillGroups: [
    {
      id: "languages",
      label: "Languages",
      items: [
        { name: "Java", level: "Primary", used: "Orbit & Roots" },
        { name: "SQL", level: "Proficient", used: "Orbit & Relational Databases" },
        { name: "JavaScript", level: "Proficient", used: "Orbit & Gaming Hub" },
        { name: "HTML5", level: "Proficient", used: "Orbit & Gaming Hub" },
        { name: "CSS3", level: "Proficient", used: "Orbit & Gaming Hub" },
        { name: "Python", level: "Proficient", used: "Mudra" }
      ]
    },
    {
      id: "platforms",
      label: "Platforms & Frameworks",
      items: [
        { name: "Java Servlets & JSP", level: "Primary", used: "Orbit Full-Stack" },
        { name: "Android SDK", level: "Primary", used: "Roots" },
        { name: "JDBC & Relational Databases", level: "Proficient", used: "Orbit" },
        { name: "Firebase (Auth, Realtime DB)", level: "Proficient", used: "Roots" },
        { name: "Bootstrap & Tailwind CSS", level: "Proficient", used: "Web Projects" }
      ]
    },
    {
      id: "core",
      label: "Core Computer Science",
      items: [
        { name: "OOP (Object-Oriented Design)", level: "Core", used: "All Software" },
        { name: "MVC Architecture (Servlets / JSP)", level: "Core", used: "Orbit" },
        { name: "Relational Database Design & SQL", level: "Core", used: "Orbit" },
        { name: "Java Collections Framework", level: "Core", used: "Roots & Backend" },
        { name: "Exception Handling & Debugging", level: "Core", used: "Roots & Orbit" },
        { name: "Multithreading & Asynchronous Tasks", level: "Core", used: "Android & Vision" }
      ]
    },
    {
      id: "tools",
      label: "Tools & Libraries",
      items: [
        { name: "Git & GitHub", level: "Daily", used: "All Repositories" },
        { name: "Android Studio & Logcat", level: "Daily", used: "Roots" },
        { name: "MySQL / Apache Tomcat", level: "Applied", used: "Orbit" },
        { name: "TensorFlow & OpenCV", level: "Applied", used: "Mudra" },
        { name: "VS Code & Eclipse", level: "Daily", used: "Java & Web" }
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
      details: "Comprehensive coursework covering Core Java, Advanced Java (Servlets, JSP), Relational Database Management Systems, Data Structures, Web Development, and Mobile Applications."
    },
    {
      id: "hsc",
      years: "2021 – 2023",
      title: "HSC, Commerce",
      school: "Lion's Club School & Junior College, Pune",
      board: "Maharashtra State Board",
      result: "71%",
      details: "Higher secondary education in Commerce with focus on Computer Applications, Mathematics, and Commercial Studies."
    },
    {
      id: "ssc",
      years: "2020 – 2021",
      title: "SSC (Secondary School Certificate)",
      school: "Samson Memorial Republic High School, Pune",
      board: "Maharashtra State Board",
      result: "75.50%",
      details: "Solid academic foundation with distinction in Mathematics, General Science, and Languages."
    }
  ],

  commendations: [
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

  // Legitimate community reviews: starts empty (no fake reviews), real user notes populate dynamically
  communityReviews: []
};
