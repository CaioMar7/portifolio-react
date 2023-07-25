import { styled } from "styled-components";

export const Container = styled.li`
    width: 100%;

    min-width: 20rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 1rem;

    border: 1px solid ${({theme}) => theme.COLORS.TEXT_BLUE};
    border-radius: 2rem;

    padding: 2rem 1rem;

    img {
        width: 100%;
        max-width: 25rem;
        max-height: 25rem;
    }

    a {
        width: 10rem;
        height: 3.5rem;
    }

    h3, p {
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    }

`