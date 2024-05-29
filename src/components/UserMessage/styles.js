import styled from "styled-components";
import { css, keyframes } from "styled-components";


const animationFadeIn = keyframes`
    0% {
        transform: translateY(-100%);
    }

    100% {
        transform: translateY(0%);
    }
`;

const animationFadeOut = keyframes`
    0% {
        transform: translateY(0);
    }

    100% {
        transform: translateY(-100%);
    }
`;


export const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;

    display: ${({ $isMessage }) => $isMessage ? "flex" : "none"};


    align-items: center;
    justify-content: center;

    width: 100%;
    height: 5rem;

    background-color: ${({ $background, theme }) => $background ? theme.COLORS[$background] : theme.COLORS.TINTS_TOMATO_100};

    ${({ $isMessage }) =>
        $isMessage &&
        css`
            animation: 
                ${animationFadeIn} 1s ease-in-out,
                ${animationFadeOut} 1s ease-in-out 5s
            ;            
        `}

    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-align: center;
    }

`;


