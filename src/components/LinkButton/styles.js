import { styled } from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled(Link)`
    color: ${({theme}) => theme.COLORS.TEXT_BLUE};
    border: 1px solid ${({theme}) => theme.COLORS.TEXT_BLUE};
    border-radius: 5px;


    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;

    transition: all .6s;

    &:hover {
        color: ${({theme}) => theme.COLORS.BACKGROUND_900};
        background-color: ${({theme}) => theme.COLORS.TEXT_BLUE};
        font-weight: bold;
    }
`