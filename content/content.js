import {
  AiOutlineConsoleSql,
  AiFillBug,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { FaVuejs, FaNodeJs } from "react-icons/fa";
import {
  SiJquery,
  SiJavascript,
  SiCss3,
  SiFigma,
  SiMongodb,
  SiPostman,
  SiRuby,
  SiStyledComponents,
  SiMaterialUi,
  SiAuth0,
  SiNuxtDotJs,
  SiBootstrap,
  SiExpertsexchange,
  SiSass,
  SiReact,
} from "react-icons/si";
import { BsTriangleFill } from "react-icons/bs";
import { GiLipstick } from "react-icons/gi";
import { TiHtml5 } from "react-icons/ti";

export const profile = [
  "Web Developer with experience in entrepreneurship, consulting, and media production in Toronto and a knack for creating new solutions in a short period of time.",
  "Fun, energetic, fast learner who knows that honesty, team work, and hard work are the most important elements for any project. Passionate about technology, the internet,languages and acquiring new knowledge and skills.",
  "Actively learning Next.js, Nuxt.js, Vue.js, Docker, and much more!",
  "Whenever I'm not coding, I'm either cuddling foster dogs (when available), out creating content with my musician partner, or out in a park playing soccer.",
];

export const technologies = [
  {
    name: "Front End",
    list: [
      {
        name: "Vue",
        icon: <FaVuejs />,
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
        name: "Figma",
        icon: <SiFigma />,
      },
    ],
  },
  {
    name: "Back End",
    list: [
      {
        name: "Express",
        icon: <SiExpertsexchange />,
      },
      {
        name: "Nodejs",
        icon: <FaNodeJs />,
      },
      {
        name: "Auth0",
        icon: <SiAuth0 />,
      },
      {
        name: "Postman",
        icon: <SiPostman />,
      },
      {
        name: "SQL",
        icon: <AiOutlineConsoleSql />,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    name: "Version Control",
    list: [
      {
        name: "GitHub",
        icon: <AiFillGithub />,
      },
    ],
  },
];

export const programmingLanguages = [
  {
    name: "CSS",
    icon: <SiCss3 />,
  },
  {
    name: "HTML5",
    icon: <TiHtml5 />,
  },
  {
    name: "Javascript",
    icon: <SiJavascript />,
  },
  {
    name: "JQuery",
    icon: <SiJquery />,
  },
  {
    name: "SQL",
    icon: <AiOutlineConsoleSql />,
  },
  {
    name: "Ruby on Rails",
    icon: <SiRuby />,
  },
];

export const languages =
  "Bilingual in English and Spanish. Intermediate French and limited working proficiency of German.";

export const softSkills = [
  "Leadership",
  "communication",
  "teamwork",
  "critical thinking",
  "problem-solving",
  "decision-making",
  "adaptability",
  "conflict management",
  "resourcefulness",
  "creativity",
  "enthusiasm",
  "work ethic",
  "time management",
  "stress management",
  "empathy",
  "social and interpersonal skills",
  "project design",
  "multitasking",
];

export const projects = [

  {
    name: "Black Jade Collective",
    dates: "Dec.2021",
    description: [
      "NextJS web app",
      "Headless Content Management System (CMS).",
      "Features:",
      "Photographer client pages, hundreds of photos are uploaded to Cloudinary, using Sanity + NextJS each event gets its own page showcasing all images and allowing for download",
    ],
    stack: ["NextJS", "Sanity", "Cloudinary", "Styled Components"],
    liveLink: "https://www.blackjadecollective.com/",
    githubLinks: ["https://github.com/julimancan/Black-Jade"],
    imageLink: "/projectScreenshots/blackjade-screenshot.png",
  },
  {
    name: "Howley Sounds",
    dates: "Jan.2022",
    description: [
      "Created a Front End NextJS web app",
      "Implemented a headless Content Management System (CMS).",
      "Features:",
      "Music Player: update and reorder songs from the CMS.",
      "Hover Boxes: update content and reorder boxes from the CMS.",
      "Contact created with the Sendgrid API",
    ],
    stack: [
      "NextJS",
      "Sanity",
      "Sendgrid",
      "Styled Components",
      "react-hooks-global-state",
    ],
    liveLink: "https://www.howleysounds.com",
    githubLinks: [],
    imageLink: "/projectScreenshots/howleysounds-screenshot.png",
  },
  {
    name: "Eunice Keitan",
    dates: "Dec.2021",
    description: [
      "Created a Front End NextJS web app",
      "Implemented a headless Content Management System (CMS).",
      "Features:",
      "Implemented a music player that gets artists' music from SoundCloud.",
      "Created a donations button using the Paypal API and payment system.",
      "Features a video player connected to a Youtube Playlist, that automatically updates when new videos get added.",
    ],
    stack: [
      "NextJS",
      "Sanity",
      "Sendgrid",
      "Styled Components",
      "React-Player",
      "PayPal API",
    ],
    liveLink: "https://www.eunicekeitan.com/",
    githubLinks: [
      "https://github.com/maple-tree-js/winery-fe",
      "https://github.com/maple-tree-js/winery-be",
    ],
    imageLink: "/projectScreenshots/ekeitan-screenshot.png",
  },
  {
    name: "Los Tragicos del Swing",
    dates: "Aug.2022",
    description: [
      "NextJS web app",
      "Headless Content Management System (CMS).",
      "Features:",
      "Blog style pages and animations.",
      "Contact form using Sendgrid.",
      "Language Options: English and Spanish"
    ],
    stack: ["NextJS", "Sanity", "Styled Components", "Sendgrid"],
    liveLink: "https://lostragicoscollective.ca/",
    githubLinks: ["https://github.com/skyllstudio/los-tragicos-web-app"],
    imageLink: "/projectScreenshots/lostragicos-screenshot.png",
  },
  {
    name: "It’s My Wine",
    dates: " Sep.2020",
    description: [
      "Full Stack Web application for users to create personalized wine labels.",
      "Lead a team of 3 developers in the building and implementation of an e-commerce site with a label customizer.",
      "Designed the initial wireframe and peer programmed the front & back end of a Full Stack Application",
    ],
    stack: [
      "React",
      "Bulma",
      "Konva",
      "SASS",
      "Express",
      "Stripe",
      "NodeJS",
      "Express",
      "Stripe API",
    ],
    liveLink: "https://itsmywine.netlify.app/",
    githubLinks: [
      "https://github.com/maple-tree-js/winery-fe",
      "https://github.com/maple-tree-js/winery-be",
    ],
    imageLink: "/projectScreenshots/itsmywine-screenshot.png",
  },
  // {
  //   name: "IoT MasterClass",
  //   dates: "April 2021",
  //   description: [
  //     "Building a Full Stack Application platform to connect custom IoT devices to customer's devices where they choose from a list of premade templates that display and manage the information.",
  //     "Developing the app with Vue, Nuxt, Express for the backend, and MongoDB as a database.",
  //   ],
  //   stack: [
  //     "Express",
  //     "Docker",
  //     "MongoDB",
  //     "Vue",
  //     "Nuxt",
  //     "Bootstrap",
  //     "JWT",
  //     "Element UI",
  //     "MQTT",
  //     "AWS (EC2 server)",
  //   ],
  //   liveLink: "",
  //   githubLinks: ["https://github.com/julimancan/iot-masterclass-fe"],
  //   imageLink: "/projectScreenshots/iotMaster.png",
  // },
  {
    name: "ReForest",
    dates: "Aug. 2020 to Aug. 2020",
    description: [
      "Worked with 3 developers as part of our graduation project for Lighthouse Labs Web Development bootcamp, to build an ecologically friendly web app for waste management.",
      "The app uses AWS Rekognition service to identify waste with photographs. The project was built using React, Auth0 &amp; PostgreSQL on the backend.",
      "Engineered and developed the front-end features, design, and implementation of the database, which includes a gamified version to engage users by providing a space to compare their progress to their circle of friends.",
    ],
    stack: [
      "React",
      "Bulma",
      "Konva",
      "SASS",
      "Express",
      "Stripe",
      "PostgreSQL",
      "Auth0",
      "Styled-Components",
    ],
    liveLink: "",
    githubLinks: [
      "https://github.com/lib3rate/which-bin-app",
      "https://github.com/lib3rate/which-bin-api",
    ],
    imageLink:
      "https://github.com/lib3rate/which-bin-app/raw/master/public/images/ReadME/Euni.gif",
  },
];

export const socialLinks = [
  {
    name: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/julimancan/",
  },
  {
    name: "LinkedIn",
    icon: <AiFillLinkedin />,
    link: "https://www.linkedin.com/in/julian-m-bustos/",
  },
];
