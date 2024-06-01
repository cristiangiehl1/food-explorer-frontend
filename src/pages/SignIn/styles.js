import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;  

    margin: 0 2rem;
    
    align-items: center;
    justify-content: center;
    place-content: center;


    @media(min-width: 425px) {
        margin: 0 6rem;
    }
  
    @media(min-width: 768px) {
        margin: 0 10rem;
    }

    @media(min-width: 1024px) {
        flex-direction: row;
        margin: 0 0;
    }

    main { 
        width: 100%;
        max-width: 48rem;
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 3.2rem;

        @media(min-width: 1024px) {
            padding: 6.4rem;
            margin-right: 10.8rem;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};
            border-radius: 1.6rem;            
        }

        h2 {
            font-size: 3.2rem;
            font-weight: 500;
            text-align: center;

            @media(max-width: 1023px) {
                display: none;
            }
        }
    }
`;

export const Header = styled.header`
    width: 100%;

    display: flex;
    gap: 1.1rem;
    align-items: center;
    justify-content: center;

    margin-bottom: 7.3rem;


    @media(min-width: 1024px) {
        font-size: 4.2rem;
        margin-bottom: 0;
    }
    
    > svg {
        color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};
    }


    > h1 {
        font-family: "Roboto", sans-serif;
        font-size: 3.72rem;
        font-weight: bold;

        @media(min-width: 1024px) {
            font-size: 4.2rem;
        }
    }





`;