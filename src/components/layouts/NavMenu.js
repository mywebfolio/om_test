import React from 'react'
import { motion } from 'framer-motion'
import {
    PaddingContainer,
    FlexContainer,
    Heading,
    ParaText,
    BlueText,
    IconContainer,
    Container,
    Button
} from '../../styles/Global.Styled';

import { MenuIcon, NavMenuContainer, MenuItem } from '../../styles/Navbar.styled'

import { AiOutlineClose } from 'react-icons/ai';
import { navLinks } from '../../utils/Data';
import { slideInLeft } from '../../utils/Variants';
const NavMenu = ({ setOpenMenu }) => {
    return (

        <NavMenuContainer
            as={motion.div}
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            exit="exit"

        >
            <PaddingContainer left="5%" right="5%" top="2rem">
                {/* Moved the MenuIcon to the right using justify="flex-end" */}
                <FlexContainer justify="flex-end" responsiveFlex>
                    <MenuIcon
                        as={motion.a}
                        whileHover={{ scale: 1.2 }}
                        onClick={() => setOpenMenu(false)}>
                        <AiOutlineClose />
                    </MenuIcon>
                </FlexContainer>
            </PaddingContainer>


            <PaddingContainer top="8%">
                <FlexContainer direction="column" align="center" responsiveFlex>

                    {navLinks.map((navlink) => (
                        <MenuItem
                            as={motion.a}
                            whileHover={{ scale: 1.2 }}
                            key={navlink.id}
                            href={navlink.href}
                            onClick={() => setOpenMenu(false)}>
                            {navlink.name}
                        </MenuItem>
                    ))}
                </FlexContainer>
            </PaddingContainer>



            {/* Removed the top padding for better center alignment */}
            <PaddingContainer>
                <FlexContainer direction="column" align="center">



                </FlexContainer>
                {/* Additional content can be added here */}
            </PaddingContainer>
        </NavMenuContainer >    
    );
};

export default NavMenu;
