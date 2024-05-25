import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 3.2rem;

    margin: 0 6rem;
    
    align-items: stretch;
    place-content: center;

`;

export const Header = styled.header`
    display: flex;
    gap: 1.1rem;
    align-items: center;
    justify-content: center;

    margin-bottom: 4rem;
    
    > svg {
        color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    }


    > h1 {
        font-family: "Roboto", sans-serif;
        font-size: 3.72rem;
        font-weight: bold;
    }

`;