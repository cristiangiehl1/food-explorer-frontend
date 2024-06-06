import styled from "styled-components";

export const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;

    display: ${({ $isMessage }) => $isMessage ? "flex" : "none"};
    flex-direction: column;
    gap: 5rem;

    align-items: center;
    justify-content: center;

    width: 80%;
    height: 15rem;

    background-color: ${({ $background, theme }) => $background ? theme.COLORS[$background] : theme.COLORS.BACKGROUND_DARK_1000};
    border-radius: 2rem;

    padding: 2rem;


    > span {
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        text-align: center;
    }

    .close-message {
        display: flex;
        align-items: center;
        position: absolute;
        top: 10px;
        right: 15px;
        padding: .5rem;

        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_300};

        transition: color .5s ease-in-out, outline 1s ease-in-out;

        &:hover {
            outline: 1px solid ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};
            color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_300};
        }
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


