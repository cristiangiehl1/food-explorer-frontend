import styled from "styled-components";

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;   
    
    padding: 5.6rem 2.8rem 2.4rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};
    
    > button {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

    }
    
    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .8rem;
        flex: 1;
        
        svg {
            color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};          
        }

        h1 {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 2.116rem;
            font-weight: bold;
        }

        span {
            display: flex;
            color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
            font-size: 1.2rem;
        }
    }
`;