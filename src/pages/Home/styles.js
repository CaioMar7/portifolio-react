import { styled } from "styled-components";

export const Container = styled.div `
    width: 100%;
    height: 100vh;

    padding: 5vh 1vh;

    gap: 1rem;

    display: grid;
    grid-template-rows: 1fr 3fr 1fr 1fr 1fr 1fr;
    grid-template-areas: 
    "firstsection"
    "secondsection"
    "thirdsection"
    "fourthsection"
    "fifthsection"
    "sixthsection"
    ;
`

export const Section = styled.section`
    width: 100%;
    padding: 1.5rem 1rem;

    gap: .5rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    max-width: 50rem;
    margin: 0 auto;
`


export const FirstSection = styled(Section)`
    grid-area: firstsection;
    align-items: inherit;

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

export const SecondSection = styled(Section)`
    grid-area: secondsection;   

    div:nth-child(1){
        width: 100%;
        height: 100%;

        max-width: 40rem;

        img {
            padding: 3rem 2rem;
            width: 100%;
            height: 100%;
            border-radius: 45% 45% 0 0;

            -webkit-mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
            mask-image: -webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)));
            
            transition: all .6s;

            &:hover {
                transform: scale(1.05);
                cursor: pointer;
            }
        }
    }
`

export const ThirdSection = styled(Section) `
    grid-area: thirdsection;   

    background-color: #1e1f39;
    border-radius: 2rem;
`

export const FourthSection = styled(Section) `
    grid-area: fourthsection;   
`

export const FifthSection = styled(Section) `
    grid-area: fifthsection;

    background-color: #1e1f39;
    border-radius: 2rem;

    gap: 2rem;

    ul {
        display: grid;
        align-items: center;
        justify-content: center;

        width: 100%;
        max-width: 50rem;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
    
`

export const SixthSection = styled(Section) `
    grid-area: sixthsection;
`

export const SectionTitle = styled.h2`
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        font-size: 2rem;
`

export const SectionDescription = styled.p`
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
        text-align: justify;

        display: flex;
        align-items: center;

        gap: .5rem;

        max-width: 50rem;
`