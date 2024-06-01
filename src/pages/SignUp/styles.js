import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;  
    margin: 0 2rem;   

    @media(min-width: 425px) {
        margin: 0 6rem;
    }
  
    @media(min-width: 765px) {
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
        

        gap: 3.2rem;        

        @media(min-width: 1024px) {
            padding: 1rem 6.4rem;
            margin: 0 10.8rem 0 0;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};
            border-radius: 1.6rem;            
        }

        @media(min-width: 1024px) {
            padding: 6.4rem;
            margin: 10rem 10.8rem 10rem 0;     
        }

        h2 {
            font-size: 3.2rem;
            font-weight: 500;
            text-align: center;

            @media(max-width: 1023px) {
                display: none;
            }
        }

        .input-wrapper {
            div {
                &:first-of-type {
                    margin-bottom: .5rem;
                }
            }

        }


    }


`;

export const Header = styled.header`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.1rem;

    margin-bottom: 4rem;
    
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

    
    @media(min-width: 1024px) {            
        margin-bottom: 0;
            
    }

`;