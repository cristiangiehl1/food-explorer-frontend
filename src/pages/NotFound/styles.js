import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    place-content: center;
    gap: 1rem;

    padding: 1rem;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_800};

    h1 {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_LIGHT_500};
        font-size: 2.5rem;
        text-align: center;

    }

    button {
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
        padding: 1rem;
        text-decoration: underline;

        display: flex;
        align-items: center;
    }

`;