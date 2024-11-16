import styled from "styled-components";
export const ShowcaseParticleContainer = styled.div`
    position: relative;

    @media(max-width: ${({theme})=>theme.breakpoints.mobile}){
        display: none;
        
    }

`
export const ShowcaseImageCard = styled.div`
    border: 1px solid white;
    width: 100%; /* Ensure the image card takes the full width of its container */
    max-width: 400px; /* Set a maximum width for the image card */
    // padding-top: 2rem;
    border-radius: 1rem;
    position: relative;
    overflow: hidden;
    box-sizing: border-box; /* Include padding and border in the total width */

    img {
        width: 100%; /* Ensure the image takes the full width of its container */

        display: block; /* Remove extra space below the image */
    }
`;

export const Particle = styled.img`
    position: absolute;
    top: ${({top})=>top};
    bottom: ${({bottom})=>bottom};
    left: ${({left})=>left};
    right: ${({right})=>right};
    transform: rotate(${({ rotate})=>rotate});

`
