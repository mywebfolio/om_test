import React from 'react';
import '../../src/styles/mywork.css';
// import { timelineElements } from '../utils/Data';
import data from './data/projectData.json';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
    Heading,
    BlueText,
} from '../styles/Global.Styled';

const MyWork = () => {
    const timelineElements = data.roles;
    let workIconStyles = { background: '#0ABCF9' };
    let schoolIconStyles = { background: '#0ABCF9' };
    const headingStyle = {
        background: '#3E88D1',
        backgroundImage: 'linear-gradient(to right, #3E88D1 0%, #0ABCF9 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    };

    const divStyle = {
        background: 'rgb(36,155,196)',
        background: 'linear-gradient(90deg, rgba(36,155,196,1) 0%, rgba(44,105,209,1) 100%)',
        borderBottom: 'none'
    }
    return (
        <div id="experience" style={{ backgroundColor: "#0f172a" }}>
            <Heading as="h4" size="h4">
                MY WORK EXPERIENCE
            </Heading>
            <Heading as="h2" size="h2" top="0.5rem">
                Where <BlueText style={headingStyle}>I've worked?</BlueText>
            </Heading>
            <VerticalTimeline>
                {timelineElements.map((element) => {
                    let isWorkIcon = element.icon === 'work';
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== '';

                    return (
                        <VerticalTimelineElement
                            key={element.id}
                            iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                            icon={isWorkIcon ? <i className="fas fa-briefcase" /> : <i className="fas fa-graduation-cap" />}
                            contentStyle={divStyle}
                        >

                            <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold', fontSize: '25px', color: 'white' }}>
                                {element.my_role}
                            </h3>
  
                            <h5 className="vertical-timeline-element-subtitle" style={{ color: 'white', fontWeight: 'normal' }}>{element.start_date} - {element.end_date}</h5>

                            <h5 className="vertical-timeline-element-subtitle" style={{ color: 'white', fontWeight: 'normal' }}>
                                {element.my_company}
                            </h5>
                            <p id="description" style={{ color: "white", fontWeight: "normal" }}>
                                {element.my_role_desc}
                            </p>
                        </VerticalTimelineElement>

                    );
                })}
            </VerticalTimeline>
        </div >
    );
};

export default MyWork;
