import { styled } from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    padding: 5vh 1vh;

    display: grid;
    grid-template-rows: 1fr 3fr;
    grid-template-areas: 
    "firstsection"
    "secondsection"
    ;
`

export const FirstSection = styled.section`
    width: 100%;
    padding: 1rem;
    grid-area: firstsection;


    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;

    a {
        width: 10rem;
        height: 3.5rem;
    }

    div:nth-child(1) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;

        p {
            color: ${({theme}) => theme.COLORS.TEXT_WHITE};
            font-weight: 500;
        }

        h1 {
            color: ${({theme}) => theme.COLORS.TEXT_WHITE};  
            font-size: 3rem;
            font-weight: 700;
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
    grid-area: secondsection;   
    display: flex;
    justify-content: center;
    align-items: center;

    div:nth-child(1){
        width: 100%;
        height: 100%;

        max-width: 40rem;

        img {
            padding: 3rem 2rem;
            width: 100%;
            height: 100%;
            border-radius: 45% 45% 0 0;

            -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, 
            from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
            
            transition: all .6s;

            &:hover {
                transform: scale(1.05);
                cursor: pointer;
            }
        }
    }
`