import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter'
import '../components/showcase.css'
import data from '../components/data/projectData.json';

import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Button, // Import Button component
} from '../styles/Global.Styled';
import { BsLinkedin, BsTwitter, BsYoutube, BsInstagram, BsGithub } from "react-icons/bs"

import { SiGmail } from "react-icons/si";
import { ShowcaseParticleContainer, ShowcaseImageCard, Particle } from '../styles/Showcase.Styles';
import jp from '../assets/jp.jpg'
import Backgroundimg from '../assets/particle.png'
import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants';

const Showcase = () => {    
    const workList = data.personal_info.my_roles; 
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
    const headingStyle = {
        background: '#3E88D1',
        backgroundImage: 'linear-gradient(to right, #3E88D1 0%, #0ABCF9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };



    useEffect(() => {
        const handleResize = () => {
            setViewportWidth(window.innerWidth);
        };


        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <PaddingContainer
            id="Home"
            left="3%"
            right="10%"
            top="15%"
            bottom="10%"

            responsiveLeft="1rem"
            responsiveRight="1rem"
            responsiveTop="8rem"
        >
            <FlexContainer align="left" fullWidthChild>
                <motion.div
                    variants={fadeInLeftVariant}
                    initial="hidden"
                    whileInView="visible"
                >
                    <Heading size="h4">Hello, my name is</Heading>

                    <Heading
                        as="h2"
                        size="h2"
                        top="0.5rem"
                        bottom="0.5rem"
                        style={headingStyle}
                    >
                        <BlueText style={headingStyle}>{data.personal_info.my_name}</BlueText>
                    </Heading>

                    <Heading
                        as="h3"
                        size="h3"
                    >
                        I'm <BlueText style={headingStyle}><Typewriter words={workList} loop={true} typeSpeed={40} /></BlueText>
                    </Heading>

                    <ParaText as="p" top="2rem" bottom="4rem">
                        {data.personal_info.my_desc}
                    </ParaText>

                    {viewportWidth <= 650 && ( 
                        <Button
                            id='resumeButton'
                            as={motion.button} 
                            onClick={() => {
                                window.open(data.personal_info.my_resume, "_blank");
                            }}
                            whileHover={{ scale: 1.2 }}
                            style={{ marginRight: '10px', height: '50px', marginBottom: '15px', marginTop: '-30px' }}
                        >
                            Resume
                        </Button>
                    )}

                    <FlexContainer gap="20px" responsiveFlex>
                        <IconContainer
                            color="white"
                            size="1.5rem"
                            onClick={() => window.open(data.personal_info.my_linked, '_blank')}
                            className='socials-icon'
                        >
                            <BsLinkedin />
                        </IconContainer>

                        <IconContainer
                            color="white"
                            size="1.5rem"
                            onClick={() => window.open(data.personal_info.my_github, '_blank')}
                            style={{ cursor: 'pointer' }}
                            className='socials-icon'
                        >
                            <BsGithub className='github-icon' />
                        </IconContainer>

                        <IconContainer
                            color="white"
                            size="1.5rem"
                            onClick={() => window.open(`mailto:${data.personal_info.my_email}`)}
                            style={{ cursor: 'pointer' }}
                            className='socials-icon'
                        >
                            <SiGmail />
                        </IconContainer>
                    </FlexContainer>
                </motion.div>

                <FlexContainer
                    as={motion.div}
                    variants={fadeInRightVariant}
                    initial="hidden"
                    whileInView="visible"
                    justify="flex-end">

                    <ShowcaseParticleContainer>

                        <ShowcaseImageCard>
                            <img src={jp} alt="jp image" />
                        </ShowcaseImageCard>

                        <Particle
                            as={motion.img}
                            animate={{
                                x: [0, 100, 0],
                                rotate: 360,
                                scale: [1, 0.5, 1]
                            }}

                            transition={{
                                duration: 20,
                                repeat: Infinity
                            }}
                            src={Backgroundimg}
                            alt='particle'
                            top="-80px"
                            left="20px"
                            rotate="60deg">

                        </Particle>

                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0, 100, 0],
                                rotate: 360,
                                scale: [1, 0.5, 1]
                            }}

                            transition={{
                                duration: 18,
                                repeat: Infinity
                            }}
                            src={Backgroundimg}
                            alt='particle'
                            top="50px"
                            right="-70px"
                            rotate="0deg">

                        </Particle>

                        <Particle
                            as={motion.img}
                            animate={{
                                y: [0, 100, 0],
                                rotate: 360,
                                scale: [1, 0.9, 1]
                            }}

                            transition={{
                                duration: 15,
                                repeat: Infinity
                            }}
                            src={Backgroundimg}
                            alt='particle'
                            bottom="10px"
                            left="-70px"
                            rotate="60deg">

                        </Particle>

                    </ShowcaseParticleContainer>

                </FlexContainer>

            </FlexContainer>

        </PaddingContainer>
    )
}

export default Showcase;






