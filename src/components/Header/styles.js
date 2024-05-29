import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;   
    
    padding: 5.6rem 2.8rem 2.4rem;
   

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};
    
    > .menu {
        display: flex;
        align-items: center;
        background-color: transparent;
        border: none;

        svg {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }

        @media (min-width: ${DEVICE_BREAKPOINTS.L}) {
            display: none;
            border: none;
        }
    }
    
    > .wrapper {
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
            font-size: 1.8rem;
            font-weight: bold;
        }

        span {
            display: flex;
            color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
            font-size: 1.2rem;
        }
    }

    > .ordersNumb {
        position: relative;

        display: flex;

        &[data-orders-is-available="false"] {
            display: none;
        }

        svg {            
            color: ${({ theme }) => theme.COLORS.LIGHT_100};   
        }

        span {
            position: absolute;
            top: -10px;
            right: -10px;
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
            border-radius: 50%;
            width: 20px;
            height: 20px;

            display: flex;
            justify-content: center;
            align-items: center;

            padding: 1.1rem;

            font-size: 1.4rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};

        }
    }
`;