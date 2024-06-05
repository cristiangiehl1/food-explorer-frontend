import styled from "styled-components";
import { css, keyframes } from "styled-components";


const animationFadeIn = keyframes`
    100% {
        opacity: 1;
        visibility: visible;
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

 

    display: ${({ $isMessage }) => $isMessage ? "flex" : "none"};
    flex-direction: column;
    gap: 5rem;

    align-items: center;
    justify-content: center;

    width: 50%;
    height: 15rem;

    background-color: ${({ $background, theme }) => $background ? theme.COLORS[$background] : theme.COLORS.BACKGROUND_DARK_1000};
    border-radius: 2rem;

    padding: 2rem;

    ${({ $isMessage }) =>
        $isMessage &&
        css`
            animation: 
                ${animationFadeIn} 5s ease-in-out,
            ;            
        `}

    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-align: center;
    }

    .confirm-or-cancel {  
        width: 100%;
        display: flex;
        justify-content: space-around; 
        
        button {
            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            text-align: center;
        }

    }

    .hidde-confirm-or-cancel {
        display: none;
    }
    

`;


