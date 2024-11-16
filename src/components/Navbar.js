import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../components/data/projectData.json';
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Container,
    Button,
    responsiveFlex,
} from '../styles/Global.Styled';

import { NavbarContainer, Logo, MenuIcon } from '../styles/Navbar.styled';
import NavMenu from './layouts/NavMenu';

import { GiHamburgerMenu } from 'react-icons/gi';
import { theme } from '../utils/Theme';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    const headingStyle = {
        background: '#3E88D1',
        backgroundImage: 'linear-gradient(to right, #3E88D1 0%, #0ABCF9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        fontWeight: '900',
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

    useEffect(() => {
        const onScroll = () => {
            window.pageYOffset > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);

    return (
        <NavbarContainer bgColor={sticky ? theme.colors.primary : 'transparent'}>
            <PaddingContainer
                top="1.2rem"
                bottom="1.2rem"
                responsiveLeft="1rem"
                responsiveRight="1rem"
            >
                <Container>
                    <FlexContainer justify="space-between" responsiveFlex>
                        <a href="#Home" style={{ textDecoration: 'none' }}>
                            <Logo style={headingStyle}>
                                {data.personal_info.my_name}
                            </Logo>
                        </a>

                        <FlexContainer>
                            <MenuIcon
                                onClick={() => { setOpenMenu(true) }}
                                as={motion.a}
                                whileHover={{ scale: 1.2 }}
                                style={{
                                    marginRight: '10px',
                                    marginTop: viewportWidth > 650 ? '0px' : '17px', // Add conditional margin top
                                }}
                            >
                                <GiHamburgerMenu style={{ color: '#0ABCF9' }} />
                            </MenuIcon>

                            {viewportWidth > 650 && (
                                <Button
                                    id='resumeButton'
                                    as={motion.a}
                                    whileHover={{ scale: 1.2 }}
                                    onClick={() => {
                                        window.open("https://drive.google.com/file/d/1Gud1E8eIpqXsq8y2DhRfrqrdGDTZo3yy/view?usp=sharing", "_blank");
                                    }}
                                    style={{ marginLeft: '10px', height: '50px' }}
                                >
                                    Resume
                                </Button>
                            )}
                        </FlexContainer>
                    </FlexContainer>
                </Container>
                <AnimatePresence>
                    {openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
                </AnimatePresence>
            </PaddingContainer>
        </NavbarContainer >
    );
}

export default Navbar;
