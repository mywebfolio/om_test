import { FaReact, FaNode, FaCss3Alt } from 'react-icons/fa'
import { SiJavascript } from 'react-icons/si';
import projec1 from '../assets/Project2.png'
import faceauth from '../assets/faceauth.jpeg';
import expert from '../assets/expertsystem.png';
import localink from '../assets/localink.png'
import tour from '../assets/tour.png'
export const Skills = [
    {
        id: 0,
        tech: 'React.js',
        icon: <FaReact />
    },
    {
        id: 1,
        tech: 'Node JS',
        icon: <FaNode />
    },
    {
        id: 2,
        tech: 'CSS',
        icon: <FaCss3Alt />
    },
    {
        id: 3,
        tech: 'Javascript',
        icon: <SiJavascript />
    },
    {
        id: 4,
        tech: 'Node.js',
        icon: <SiJavascript />
    }

]

export const projects = [
    {
        id: 0,
        project_name: "FaceAuth",
        project_desc: "Engineered a facial authentication portal using React and Node.js, enabling secure user access with facial recognition technology. Stored data in MongoDB for scalability and data security. Integrated the Gmail API to automate confirmation emails upon successful authentication, enhancing user experience and maintaining communication efficiency. Implemented Google Sheets API integration to log user data for administrative review.",
        tech_stack: ["React.js", "MongoDB", "Express.js", "Node.js", "Gmail API", "Google Sheets API"],
        project_img: faceauth,
        project_url: "https://github.com/ompatil19/FaceAuth",
        reverse: false,
    },
    {
        id: 1,
        project_name: "Gym Trainer Expert System",
        project_desc: "Created a sophisticated language model using Langchain and Google Generative AI for generating personalized gym tips. Built a comprehensive knowledge base using Selenium to extract data from diverse gym URLs for model training. Utilized FAISS Vector stores to establish the vector database for text embeddings. Developed a user-friendly interface using Streamlit.",
        tech_stack: ["Langchain", "Selenium", "Google Palm", "Streamlit", "FAISS"],
        project_img: expert,
        project_url: "https://github.com/JP3ra/GymTrainerExpertSystem",
        reverse: true,
    },
    {
        id: 2,
        project_name: "LocaLink",
        project_desc: "Orchestrated an intricate MERN-stack application enhanced by the TomTom API, offering tailor-made recommendations based on user-selected locations, elevating the art of personalization. Engineered robust data management using Node.js, Express.js, and MongoDB, ensuring secure and scalable data storage while seamlessly integrating TomTom's mapping services. Crafted an aesthetically pleasing React-based frontend with Tailwind CSS for an exceptional user experience.",
        tech_stack: ["React.js", "MongoDB", "Express.js", "Node.js", "Tailwind CSS", "TomTomAPI"],
        project_img: localink,
        project_url: "https://github.com/JP3ra/LocaLink",
        reverse: false,
    },
    {
        id: 3,
        project_name: "TourTalker",
        project_desc: "Integrated GooglePalm LLM with Langchain for precise responses and creative refinement in travel queries. Used Langchain, HuggingFaceEmbeddings, and FAISS for optimal text retrieval in a travel chatbot. Employed Langchain to integrate GooglePalm, FAISS retriever, and a prompt for accurate responses. UI developed using Streamlit",
        tech_stack: ["Langchain", "Google Palm", "Streamlit", "FAISS"],
        project_img: tour,
        project_url: "https://github.com/PrakruthiMadhav/TourTalker",
        reverse: true,

    },
];

export const navLinks = [

    {
        id: 0,
        name: 'Home',
        href: "#Home",

    },

    {
        id: 1,
        name: 'Skills',
        href: "#Skills",

    },

    {
        id: 2,
        name: 'Projects',
        href: "#projects",

    },

    {
        id: 3,
        name: 'Experience',
        href: "#experience"
    },

    {
        id: 4,
        name: 'Contact',
        href: "#Contact",

    },

]

export const timelineElements = [
    {
      id: 1,
      title: "Research Intern, HPE",
      location: "Bangalore, Karnataka, India",
      description: "Developed security tools in Python for countering various API vulnerabilities using Zaproxy. Implemented incident management automation for common security incidents in AWS.",
      buttonText: "View Frontend Projects",
      date: "02/2024 - 06/2024",
      icon: "work",
    },
    {
      id: 2,
      title: "AI Engineer Intern, ProductDev Edge",
      location: "Bangalore, Karnataka, India",
      description: "Collaborating with the AI team to create Maya AI, an AI platform tailored for cosmetic research and development. Designed a solution using AWS Bedrock, utilizing LangChain and Weaviate.",
      buttonText: "View Backend Projects",
      date: "12/2023 - 02/2024",
      icon: "work",
    },
    {
        id: 3,
        title: "Freelancer, Multiple Locations",
        location: "Multiple Locations",
        description:
          "1. Created a website using React.js for a National-scale cybersecurity hackathon hosted by BMSCE IEEE Computer Society, engaging more than 3000+ visitors. Link to the website <a style= 'color: black' href='https://www.ieeecsw.in/'>https://www.ieeecsw.in/</a><br />2. Crafted a website utilizing React.js for the 7th International conference organized by the IIIE Bangalore Chapter, attracting over 1000 attendees from 10+ countries. Link to the website: <a style='color: black;'href='https://iiie-conference.vercel.app/'>https://iiie-conference.vercel.app/</a>",
        buttonText: "Cybersecurity Week Website",
        date: "",
        icon: "work",
      }
      
      
  ];
  