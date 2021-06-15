import { AiOutlineConsoleSql, AiFillBug, AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { FaVuejs, FaNodeJs } from "react-icons/fa";
import { SiRuby, SiJquery, SiJavascript, SiCss3, SiFigma, SiMongodb, SiPostman, SiStyledComponents, SiMaterialUi, SiAuth0, SiMicrosoftoffice, SiWordpress, SiNuxtDotJs, SiBootstrap, SiExpertsexchange, SiSass, SiReact } from "react-icons/si";
import { BsTriangleFill } from "react-icons/bs";
import { GiLipstick } from "react-icons/gi";
import { TiHtml5 } from "react-icons/ti"

export const profile = [
  "Web Developer with 5+ years of experience in entrepreneurship, consulting, and media production in Toronto with a knack for creating new solutions in a short period of time.",
  "Fun, energetic, fast learner who knows that honesty, team, and hard work are the most important elements for any project. Passionate about technology, the internet, languages and acquiring new knowledge and skills.",
  "Currently leading a small team of developers to build a full-stack e-commerce site with a user-designed label on React and taking an IoT Masterclass that includes a Full-Stack application and the connection to IoT devices. Also actively learning Blitz.js, Next.js, Nuxt.js, Vue.js, Docker, and much more!",
  "Whenever I'm not coding, I'm either cuddling my foster dog, out creating content with my musician partner or playing soccer (currently out due to a minor injury!)."
];

export const hardSkills = [
  {
    name: "Git",
    icon: <AiFillGithub />,
  },
  {
    name: "Vue",
    icon: <FaVuejs />,
    // icon: <AiFillGithub/>,
  },
  {
    name: "Nuxt",
    icon: <SiNuxtDotJs />,
  },
  {
    name: "Next",
    icon: <BsTriangleFill />,
  },
  {
    name: "Express",
    icon: <SiExpertsexchange />,
  },
  {
    name: "Sass",
    icon: <SiSass />,
  },
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap />,
  },
  {
    name: "WordPress",
    icon: <SiWordpress />,
  },
  {
    name: "Nodejs",
    icon: <FaNodeJs />,
  },
  {
    name: "Microsoft Office",
    icon: <SiMicrosoftoffice />,
  },
  {
    name: "Auth0",
    icon: <SiAuth0 />,
  },
  {
    name: "Antd",
    icon: <AiFillBug />,
  },
  {
    name: "Material UI",
    icon: <SiMaterialUi />,
  },
  {
    name: "Styled Components",
    icon: <SiStyledComponents />,
  },
  {
    name: "Emotion",
    icon: <GiLipstick />,
  },
  {
    name: "Postman",
    icon: <SiPostman />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Figma",
    icon: <SiFigma />,
  },
];

export const programmingLanguages = [
  {
    name: "CSS",
    icon: <SiCss3 />
  },
  {
    name: "HTML5",
    icon: <TiHtml5 />
  },
  {
    name: "Javascript",
    icon: <SiJavascript />
  },
  {
    name: "JQuery",
    icon: <SiJquery />
  },
  {
    name: "SQL",
    icon: <AiOutlineConsoleSql />
  },
  // {
  //   name: "Ruby",
  //   icon: <SiRuby />
  // },

]

export const languages = "Bilingual in English and Spanish. Intermediate French and limited working proficiency of German."

export const softSkills = [
  "Leadership", "communication", "teamwork", "critical thinking", "problem-solving", "decision-making", "adaptability", "conflict management", "resourcefulness", "creativity", "enthusiasm", "work ethic", "time management", "stress management", "empathy", "social and interpersonal skills", "project design", "multitasking",
];

export const projects = [
  {
    name: "It’s My Wine",
    dates: " Sep.2020 (currently in progress)",
    description: [
      "Leading a team of 3 developers in the building and implementation of an e-commerce site with a label customizer aimed at creating logic and solutions in line with our client&#x27;s goals, vision, and ethics.",
      "Designing the wireframe, peer programming the front-end of a Full Stack Application (built using React, Konva, Stripe, and emailjs), developing over 10 new features and implementing automatic emails."
    ],
    stack: [
      "React", "Bulma", "Konva", "SASS", "Express", "Stripe",
    ],
    liveLink: "https://itsmywine.netlify.app/",
    githubLinks: [
      "https://github.com/maple-tree-js/winery-fe",
      "https://github.com/maple-tree-js/winery-be",
    ],
    imageLink: "/projectScreenshots/itsMyWineCustomizeText.png"
  },
  {
    name: "IoT MasterClass",
    dates: "April 2021 – (currently in progress)",
    description: [
      "Building a Full Stack Application platform to connect custom IoT devices to customer&#x27;s devices where they choose from a list of premade templates that display and manage the information.",
      "Developing the app with Vue, Nuxt, Express for the backend, and MongoDB as a database."
    ],
    stack: [
      "Express", "Docker", "MongoDB", "Vue", "Nuxt", "Bootstrap", "JWT", "Element UI", "MQTT", "AWS (EC2 server)",
    ],
    liveLink: "",
    githubLinks: [
      "https://github.com/julimancan/iot-masterclass-fe",
    ],
    imageLink: ""
  },
  {
    name: "ReForest",
    dates: "Aug. 2020 to Aug. 2020",
    description: [
      "Worked with 3 developers as part of our graduation project for Lighthouse Labs Web Development bootcamp, to build an ecologically friendly web app for waste management.",
      "The app uses AWS Rekognition service to identify waste with photographs. The project was built using React, Auth0 &amp; PostgreSQL on the backend.",
      "Engineered and developed the front-end features, design, and implementation of the database, which includes a gamified version to engage users by providing a space to compare their progress to their circle of friends.",
    ],
    stack: [
      "React", "Bulma", "Konva", "SASS", "Express", "Stripe", "PostgreSQL", "Auth0", "Styled-Components",
    ],
    liveLink: "",
    githubLinks: [
      "https://github.com/lib3rate/which-bin-app",
      "https://github.com/lib3rate/which-bin-api",
    ],
    imageLink: "https://github.com/lib3rate/which-bin-app/raw/master/public/images/ReadME/Euni.gif"
  },
  {
    name: "ReForest",
    dates: "Aug. 2020 to Aug. 2020",
    description: [
      "Worked with 3 developers as part of our graduation project for Lighthouse Labs Web Development bootcamp, to build an ecologically friendly web app for waste management.",
      "The app uses AWS Rekognition service to identify waste with photographs. The project was built using React, Auth0 &amp; PostgreSQL on the backend.",
      "Engineered and developed the front-end features, design, and implementation of the database, which includes a gamified version to engage users by providing a space to compare their progress to their circle of friends.",
    ],
    stack: [
      "React", "Bulma", "Konva", "SASS", "Express", "Stripe", "PostgreSQL", "Auth0", "Styled-Components",
    ],
    liveLink: "",
    githubLinks: [
      "https://github.com/lib3rate/which-bin-app",
      "https://github.com/lib3rate/which-bin-api",
    ],
    imageLink: "https://github.com/lib3rate/which-bin-app/raw/master/public/images/ReadME/Euni.gif"
  },
];

export const education = [
  {
    institution: "Lighthouse Labs",
    dates: "Mar. 2020 to Aug. 2020",
    title: "Full Stack Web Development Bootcamp",
  },
  {
    institution: "Universidad de la Camara de Comercio de Bogota",
    dates: "Oct. 2009 to Dec. 2009",
    title: "Certificate Marketing",
  },
  {
    institution: "Universidad de la Camara de Comercio de Bogota",
    dates: "Nov. 2006 to Nov. 2009",
    title: "Bachelor’s degree Business Administration",
  },
];


export const experience = [
  {
    company: "El Junto",
    location: "Toronto",
    position: ["Manager", "Web Development", "Technology Research", "Technical Support", "Photographer", "Camera Operator", "and Business Consultation",],
    dates: "Dec. 2016 to Current, Dec. 2016 to Current",
    Achievements: [
      "Designing and implementing websites for Carole&#x27;s Cheesecakes, The Empanada Dealer, Sorrisa group (2017 - 2019), Heavenfull (2017-2019), It&#x27;s My Wine, and Eunice Keitan (implementation of designer wireframe)",
      "Developing new business strategies to create new revenue streams, including bringing onboard new customers for Food and Wedding Photography, which resulted in the growth of the Photography Business by more than 60% in 2019.",
      "Successfully meeting and exceeding client expectations while navigating the time and pressure demands of weddings (e.g. dealing with extended schedules and limited breaks) by focusing our efforts on achieving high-quality content for our customers through seizing opportunities as they arise.",
      "Developing and implementing social media marketing strategies, including assisting in media production (photography, video camera operation, sound assistance, and general technology expertise) for the marketing of artist  Eunice Keitan, which resulted in an increase of followers from 700 to 1600 in 2020.",
      "Conducting the budgeting, bookkeeping and general account management of the company and analyzing data and competitive intelligence to determine and execute new market approaches."
    ],
  },
  {
    company: "The Empanada Dealer",
    location: "Toronto",
    position: ["Owner", "General Manager"],
    dates: "Spring 2012 to Mar. 2020",
    Achievements: [
      "Found new marketing strategies and managed business-to-business sales and relations. Increasing sales by more than 30% from 2019 to 2020.",
      "Supervised a team of 5 for the safe handling of food in the production of 1000 weekly empanadas.",
      "Improved office efficiency by creating streamlining accounting methodologies, and correctly managing our client base.",
    ],
  },
  {
    company: "Social Dance Spot",
    location: "Toronto",
    position: ["General Manager"],
    dates: "Spring 2013 to Spring 2015",
    Achievements: [
      "Managed a team of 5 dance instructors while providing customer support and supervising customers&#x27; flow from first contact to maintain customers&#x27; continued engagement.",
      "Managed and maintained WordPress website and online social media to increase brand awareness in Toronto by developing new marketing strategies.",
      "Conducted the budgeting and bookkeeping of the studio, managing incoming payments from customers and outgoing payments to suppliers.",
      "Maintained a clean and respectful atmosphere where more than 100 students would feel safe and comfortable to learn to dance.",
      "Organized and managed weekly dance events.",
    ],
  },
]


export const socialLinks = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/julimancan/"
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/julian-m-bustos/"
  },
]