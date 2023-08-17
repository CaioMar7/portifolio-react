import { styled } from "styled-components";

export const Container = styled.li`
    width: 100%;
    height: 40rem;

    min-width: 20rem;
    min-height: 20rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    gap: 1rem;

    border: 1px solid ${({theme}) => theme.COLORS.TEXT_BLUE};
    border-radius: 2rem;

    padding: 2rem 1rem;

    img {
        width: 100%;
        height: 20rem;
        max-width: 25rem;
        max-height: 20rem;

        object-fit: contain;
    }

    a {
        width: 10rem;
        height: 3.5rem;
    }

    h3, p {
        color: ${({theme}) => theme.COLORS.TEXT_WHITE};
    }

    p {
        max-height: 8rem;
        overflow-x: hidden;
    }

`