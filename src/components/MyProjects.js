import React from 'react'
import faceauth from '../assets/faceauth.jpeg'
import {motion} from 'framer-motion'
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,

    responsiveLeft,
    responsiveRight,
    responsiveTop,
    
} from '../styles/Global.Styled';
// import { projects } from '../utils/Data';
import Project from './layouts/Project';
import data from './data/projectData.json';

import { fadeInLeftVariant, fadeInRightVariant , fadeInTopVariant} from '../utils/Variants';
const projects = data.project
const MyProjects = () => {
    const headingStyle = {
        background: '#3E88D1',
        backgroundImage: 'linear-gradient(to right, #3E88D1 0%, #0ABCF9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };
  return (
    <PaddingContainer id ="projects" top="5%" bottom="5%" responsiveTop = "20%" responsiveLeft = "1rem" responsiveRight = "1rem">
        <Heading as={motion.h4} variants={fadeInTopVariant} initial="hidden" whileInView="visible" size="h4">
            My Projects
        </Heading>

        <Heading as={motion.h2} variants={fadeInTopVariant} initial="hidden" whileInView="visible" size="h2">
            What <BlueText style={headingStyle}>have i built?</BlueText>
        </Heading>

        {projects.map((project)=>(
            <PaddingContainer key = {project.id} top="5rem" bottom = "5rem">
                <Project data={project}/>
            </PaddingContainer>
        ))}
    </PaddingContainer>
  )
}

export default MyProjects
