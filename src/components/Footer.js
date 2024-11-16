import React, { useState } from 'react';
import '../components/showcase.css'
import { Button, PaddingContainer, ParaText } from '../styles/Global.Styled'; // Import necessary styles components
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import { IconContainer, FlexContainer } from '../styles/Global.Styled';
import { fadeInRightVariant } from '../utils/Variants';
import data from '../components/data/projectData.json';
const Footer = () => {
    const headingStyle = {
        background: '#3E88D1',
        backgroundImage: 'linear-gradient(to right, #3E88D1 0%, #0ABCF9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        textAlign: "center",
        fontSize: '50px',
    };
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [messageSent, setMessageSent] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://formsubmit.co/ajax/jyotiprakash2409@gmail.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        if (data.success === 'true') {
            setMessageSent(true);
        }
    };

    return (
        <PaddingContainer top="5%" bottom="5%" id="Contact" variants={fadeInRightVariant}>
            <h4 style={{ textAlign: 'center', color: 'white', fontSize: '20px' }}>WHAT'S NEXT?</h4>
            <h2 style={headingStyle}>Get in Touch</h2>
            <div className="content">
                <p >I am actively pursuing opportunities, including summer internship positions. Open to collaboration or networking. Inbox accessible for all inquiries. Looking forward to potential engagements.</p>
                <Button
                    style={{ margin: 'auto' }}
                    onClick={() => {
                        window.open(`mailto:${data.personal_info.my_email}`);
                    }}
                >
                    Let's Connect
                </Button>
            </div>
        </PaddingContainer>
    );
};

export default Footer;
