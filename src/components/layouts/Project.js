import React from 'react'
import '../../components/showcase.css'
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    Button,
    IconContainer
} from '../../styles/Global.Styled';


import { FaGithub } from 'react-icons/fa';
import { TechStackCard } from '../../styles/MyProject.styled';
import { ProjectImageContainer, ProjectImage } from '../../styles/MyProject.styled';
import { fadeInLeftVariant, fadeInRightVariant } from '../../utils/Variants';
import p1 from '../../assets/Project1.png'
import {motion} from "framer-motion"
import faceauth from '../../assets/faceauth.jpeg'

const Project = ({data}) => {
  return (
    <FlexContainer direction = {data.reverse ? 'row-reverse' : false} fullWidthChild>
        <motion.div
            variants={data.reverse ? fadeInRightVariant : fadeInLeftVariant}
            initial = "hidden"
            whileInView="visible"
        > 
            <FlexContainer align="center" gap="1rem">
                <Heading as="h3" size="h3" bottom="1rem">
                    {data.project_name}
                </Heading>
                <IconContainer color="blue" size="2rem">
                    <a href={data.project_url} target='_blank'><FaGithub className='socials-icon'/></a>
                </IconContainer>


            </FlexContainer>

            <PaddingContainer top="1rem">
                <FlexContainer gap="1.5rem">
                    {data.tech_stack.map((stack)=>(
                        <TechStackCard>{stack}</TechStackCard>
                    ))}
                </FlexContainer>
            </PaddingContainer>

            <ParaText top="1.5rem" bottom="2rem">
                {data.project_desc}
            </ParaText>
                {/* <Button>Visit Website</Button> */}
        </motion.div>

        <ProjectImageContainer as={motion.div} variants={data.reverse ? fadeInLeftVariant : fadeInRightVariant} initial="hidden" whileInView="visible" justify={data.reverse ? "flex-start" : "flex-end"}>
            <ProjectImage src={data.project_img}/>
        </ProjectImageContainer>
    </FlexContainer>
    
  )
}

export default Project
