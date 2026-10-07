/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Massamba Diagne",
  title: "Salut, je suis Massamba",
  subTitle: emoji(
    "Un développeur Full Stack passionné 🚀, j'ai acquis de l'expérience dans la création d'applications web et mobiles avec JavaScript, React, Flutter et d'autres bibliothèques et frameworks sympas."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1FDURM3kOOx8yrmSyBIs66niX4qvRIdwc/view?usp=drivesdk", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/massamba-jav",
  linkedin: "https://www.linkedin.com/in/massamba-diagne-3422542aa/",
  gmail: "https://mail.google.com/mail/?view=cm&fs=1&to=masscompte133@gmail.com&su=Let's%20Connect&body=Hello%20",
  gitlab: "https://gitlab.com/massamba-jav",
  facebook: "https://www.facebook.com/massamba.diagne.96/",
  medium: "https://medium.com/@masscompte133",
  stackoverflow: "https://stackoverflow.com/users/32086417/the-gamer",
  whatsapp: "https://wa.me/221784705876",
  // Instagram, Twitter and Kaggle are also supported in the links!
  instagram: "https://www.instagram.com/jnvqpd22/",
  twitter: "https://x.com/massamba2211",
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Ce que je fais",
  subTitle: "DÉVELOPPEUR FULL STACK CURIEUX, TOUJOURS PRÊT À EXPLORER DE NOUVEAUX STACKS",
  skills: [
    emoji(
      "⚡ Concevoir des interfaces utilisateur interactives pour le web et le mobile"
    ),
    emoji("⚡ Applications Web et single-page apps (SPA)"),
    emoji(
      "⚡ Intégration de services tiers comme Firebase et Supabase"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    /*
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    */
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "NoSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "PostgreSQL",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Express",
      fontAwesomeClassname: "fas fa-server"
    },
    /*
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    */
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "supabase",
      fontAwesomeClassname: "fas fa-leaf"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    /*
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    */
    // Added skills
    {
      skillName: "angular",
      fontAwesomeClassname: "fab fa-angular"
    },
    {
      skillName: "vue",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "vite",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "expo",
      fontAwesomeClassname: "fas fa-mobile-alt"
    },
    {
      skillName: "herd",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "Flutter",
      fontAwesomeClassname: "fa-brands fa-flutter"
    },
    {
      skillName: "React Native",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Dart",
      fontAwesomeClassname: "fa-brands fa-dart-lang"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-hashtag"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "nextjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "alpinejs",
      fontAwesomeClassname: "fas fa-mountain"
    }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Amadou Hampaté Bâ University",
      logo: require("./assets/images/uahbLogo.png"),
      subHeader: "(MAJOR) Licence en Science et Technologies de l'Information et de la Communication",
      duration: "Spécialité Informatique",
      desc: "Novembre 2023 - Présent",
      descBullets: []
    },
    {
      schoolName: "Cours Sainte Marie de Hann",
      logo: require("./assets/images/csmhLogo.jpeg"),
      subHeader: "Baccalauréat scientifique ( S 1 )",
      duration: "",
      desc: "Juillet 2023",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "87%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "90%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets majeurs",
  subtitle: "Certains de mes projets importants réalisés en autonomie",
  projects: [
    {
      image: require("./assets/images/sg.png"),
      projectName: "Sengameshop",
      projectDesc: "Application E-commerce de gestion de stock et ventes de matériels gaming de la  boutique de Sengamshop, développée avec Next.js , Express et Supabase",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://www.sengameshop.com/"
        },
      ]
    },
    {
      image: require("./assets/images/gamespot.jpeg"),
      projectName: "GameSpot",
      projectDesc: "Application de gestion des ventes de matériels gaming de la  boutique de Gamespot, développée avec Next.js , Express et Supabase",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://www.gamespotsn.com/"
        },
      ]
    },
    {
      image: require("./assets/images/thumblifyLogo.jpg"),
      projectName: "Thumblify",
      projectDesc: "Application de génération de miniatures de vidéos avec IA , développée avec MERN Stack",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://thumblify-six.vercel.app/"
        }
          // you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/maxitLogo.png"),
      projectName: "Max it SN",
      projectDesc: "Clone de Max It Sénégal développé en Flutter",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
         //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/passwordLogo.png"),
      projectName: "Corrix Pass M",
      projectDesc: "Application de gestion de mots de passe sécurisée développée en angular et Firebase",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://corrix-pass-manage.vercel.app/"
        }
          // you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/corrixaiLogo.png"),
      projectName: "Corrix AI",
      projectDesc: "Application mobile d'un chatbot IA basé sur les services GROQ et développée en Flutter",
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    },
    {
      image: require("./assets/images/linksnapLogo.png"),
      projectName: "LinkSnap (Collaboration)",
      projectDesc: "Application de transfert rapide de fichiers ou images entre appareils via QR code ou lien, développée en Next.js et Express",
      footerLink: [
        {
          name: "Visiter le site",
          url: "https://linksnap-front.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Réalisations et Certifications 🏆 "),
  subtitle:
    "Certificats, distinctions et autres accomplissements marquants que j'ai obtenus.",

  achievementsCards: [
    {
      title: "Harvard University Cs50p",
      subtitle:
        "Introduction à la programmation avec Python",
      image: require("./assets/images/harvardLogo.png"),
      imageAlt: "Harvard University Logo",
      footerLink: [
        {
          name: "Voir le certificat",
          url: "https://bit.ly/4oEP35k"
        }
      ]
    },
    {
      title: "FreeCodeCamp JavaScript",
      subtitle:
        "Certificat de développement JavaScript",
      image: require("./assets/images/logoFreeCode.webp"),
      imageAlt: "FreeCodeCamp Logo",
      footerLink: [
        {
          name: "Voir le certificat",
          url: "https://www.freecodecamp.org/certification/massamba-jav/javascript-v9"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Avec passion pour créer de belles choses ; j'aime lire et échanger sur ce que j'apprends.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Conférences",
  subtitle: emoji(
    "J'AIME PARTAGER MES CONNAISSANCES, MÊME SI ELLES SONT LIMITÉES 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "J'AIME PARLER DE MOI ET DE LA TECHNOLOGIE",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "CV",
  subtitle: "N'hésitez pas à télécharger mon CV",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Discuter d'un projet ou simplement dire bonjour ? Ma boîte est ouverte.",
  number: "+221-784705876",
  email_address: "masscompte133@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
