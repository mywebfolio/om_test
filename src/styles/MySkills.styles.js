// MySkills.styles.js

import styled from 'styled-components';

export const SkillsCardContainer = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-gap: 1rem; // Adjust the gap as needed
    padding: 0 5%;
    max-width: 800px; // Adjust the max-width as needed

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        display: block;
        padding: 0;
    }
`;

export const SkillsCard = styled.div`
    width: 100%;
    border: 1px solid #fff;
    padding: 1.5rem 0; // Adjust padding as needed
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.primary_light};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        margin-top: 1rem; // Adjust margin-top as needed
    }
`;
