import { styled } from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    padding: 5vh 2vh;

    display: grid;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: 
    "firstsection"
    "secondsection"
    ;
`

export const FirstSection = styled.section`
    width: 100%;
    border: 2px red solid;
    padding: 1rem;
    grid-area: firstsection;


    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    a {
        width: 10rem;
        height: 2rem;
    }

    div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        p {
            color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        }

        h1 {
            color: ${({theme}) => theme.COLORS.TEXT_WHITE};  
            font-size: 3rem;
        }
    }

    div:nth-child(2) {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
    }
`

export const SecondSection = styled.section`
    width: 100%;
    border: 2px red solid;
    grid-area: secondsection;   
`