import styled from "styled-components";


export const Container = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;

    padding: 2rem 1.5rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};


    > svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_700};
        margin-right: .4rem;
    }
    
    > .project {
        font-size: 1.2rem;
        font-weight: bold;
        font-family: "Roboto", sans-serif;

        color: ${({ theme }) => theme.COLORS.LIGHT_700};

        margin-right: .8rem;

    }


    > .copyright {
        font-size: .8rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_200};
    }


`; 