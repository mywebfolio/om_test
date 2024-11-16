import React, { useState } from 'react';
import { FaPython, FaJs, FaNode, FaFileCode, FaTools, FaDatabase, FaLinux, FaAws, FaGitAlt } from "react-icons/fa";
import { SiCplusplus, SiExpress, SiApachespark, SiMicrosoftazure, SiMongodb, SiMysql, SiPostgresql, SiPandas, SiNumpy, SiTensorflow, SiOpencv, SiScikitlearn, SiFramework, SiGraphql, SiFirebase, SiDocker, SiKubernetes, SiTerraform, SiRedux, SiTailwindcss, SiFlask, SiDjango, SiSpring, SiLaravel, SiRuby, SiRubyonrails, SiSvelte, SiVuedotjs } from "react-icons/si";
import { GrReactjs } from "react-icons/gr";
import { TbBrandGithubFilled, TbCloudComputing, TbSql } from "react-icons/tb";
import { IoLibrary } from "react-icons/io5";
import '../styles/accordion.css';
import { SkillsCardContainer } from '../styles/MySkills.styles';
import { PaddingContainer, FlexContainer, Heading, ParaText, BlueText, IconContainer } from '../styles/Global.Styled';
import { fadeInRightVariant } from '../utils/Variants';
import { FaJava, FaPhp, FaRust } from 'react-icons/fa';
import { FaGolang } from "react-icons/fa6";
import data from "../components/data/projectData.json"

// Skill-Icon Mapping
const skillIconMapping = {
    "Python": <FaPython />,
    "JavaScript": <FaJs />,
    "TypeScript": <SiExpress />,
    "C++": <SiCplusplus />,
    "Java": <FaJava />,
    "PHP": <FaPhp />,
    "Ruby": <SiRuby />,
    "Rust": <FaRust />,
    "Go": <FaGolang/>,

    "Node.js": <FaNode />,
    "Express.js": <SiExpress />,
    "React.js": <GrReactjs />,
    "Redux": <SiRedux />,
    "Next.js": <SiExpress />,
    "Nest.js": <SiExpress />,
    "Svelte": <SiSvelte />,
    "Vue.js": <SiVuedotjs />,
    "Angular": <SiExpress />,
    "Tailwind CSS": <SiTailwindcss />,
    "Flask": <SiFlask />,
    "Django": <SiDjango />,
    "Spring Boot": <SiSpring />,
    "Laravel": <SiLaravel />,
    "Ruby on Rails": <SiRubyonrails />,
    "GraphQL": <SiGraphql />,

    "MongoDB": <SiMongodb />,
    "MySQL": <SiMysql />,
    "PostgreSQL": <SiPostgresql />,
    "SQLite": <TbSql />,
    "Firebase": <SiFirebase />,
    "DynamoDB": <FaDatabase />,
    "Redis": <FaDatabase />,
    "Neo4j": <FaDatabase />,

    "Pandas": <SiPandas />,
    "NumPy": <SiNumpy />,
    "Scikit-learn": <SiScikitlearn />,
    "PySpark": <SiApachespark />,

    "AWS": <FaAws />,
    "Azure": <SiMicrosoftazure />,
    "Google Cloud Platform": <SiFirebase />,
    "Heroku": <FaDatabase />,
    "DigitalOcean": <FaDatabase />,

    "Git": <FaGitAlt />,
    "GitHub": <TbBrandGithubFilled />,
    "Docker": <SiDocker />,
    "Kubernetes": <SiKubernetes />,
    "Terraform": <SiTerraform />,
    "Bash": <FaGitAlt />,
    "Jenkins": <FaGitAlt />,
    "CI/CD": <FaGitAlt />
};


const skillsData = {
    "Languages": data.language_info.my_language,
    "Frameworks": data.language_info.my_framework,
    "Databases": data.language_info.my_db,
    "Libraries": data.language_info.my_lib,
    "Cloud Platforms": data.language_info.my_cloud,
    "Tools": data.language_info.my_tools
};

const MySkills = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? -1 : index);
    };

    const items = Object.keys(skillsData).map((category) => ({
        title: category,
        icon: skillIconMapping[category],
        content: (
            <FlexContainer gap="20px">
                {skillsData[category].map((skill, index) => (
                    <div key={index}>
                        <IconContainer size="2rem" color="white">{skillIconMapping[skill]}</IconContainer>
                        <span style={{ color: 'white' }}>{skill}</span>
                    </div>
                ))}
            </FlexContainer>
        ),
    }));

    return (
        <PaddingContainer id="Skills" top="5%" bottom="10%" responsiveLeft="1rem" responsiveRight="1rem">
            <FlexContainer responsiveFlex responsiveDirection="column-reverse" fullWidthChild>
                <SkillsCardContainer>
                    <div className="accordionDiv">
                        {items.map((item, index) => (
                            <div key={item.title} id="accordion" className="accordionItem">
                                <button className='accordionButton' onClick={() => handleClick(index)}>
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <IconContainer size="2rem" color='white' style={{ marginRight: '10px' }}>{item.icon}</IconContainer>
                                        <span className="titles" style={{ color: 'white' }}>{item.title}</span>
                                    </div>
                                </button>
                                {index === activeIndex && (
                                    <div className="accordionContent">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </SkillsCardContainer>

                <div variants={fadeInRightVariant} initial="hidden" whileInView="visible">
                    <Heading as="h4" size="h4">
                        MY SKILLS
                    </Heading>
                    <Heading as="h2" size="h2" top="0.5rem">
                        What <BlueText style={{ background: '#3E88D1', backgroundImage: 'linear-gradient(to right, #3E88D1 0%, #0ABCF9 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>I can do</BlueText>
                    </Heading>

                    <ParaText top="2rem" bottom="1.5rem">
                        Enthusiastic about artificial intelligence, I've crafted significant language models using LangChain and Google Generative AI. My expertise extends to NLP projects, tackling diverse classification and regression tasks with classical machine learning algorithms.
                        <br /><br />
                        Proficient in leveraging cloud platforms for AIML tasks and data engineering, I employ Apache Spark's PySpark framework for efficient data processing.
                        <br /><br />
                        Beyond that, I've successfully developed user-friendly, full-stack websites using the MERN Stack. With a keen eye for seamless deployment, I ensure these projects thrive on cloud platforms.
                    </ParaText>
                </div>
            </FlexContainer>
        </PaddingContainer>
    );
};

export default MySkills;
