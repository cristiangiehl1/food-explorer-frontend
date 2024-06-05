import styled from "styled-components";

import { FaRegCreditCard, FaRegClock, FaRegCheckCircle } from "react-icons/fa";
import { FaPix } from "react-icons/fa6";
import { CiForkAndKnife } from "react-icons/ci";


export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto auto 1fr auto;
    
    .cart-flow-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2vw;
        
        color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
        font-size: 1rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};

        span[data-key="2"] {
                display: none;
        }

        
        @media(min-width: 1024px) {
            span[data-key="0"] {
                display: none;
            }
            
            span[data-key="1"] {
                display: none;
            }

            span[data-key="2"] {
                display: inline;
        }
        }

        span {
            padding: 1rem;

                
            @media(min-width: 600px) {
                font-size: 1.3rem;
            }

            &[data-select-cart-flow="true"] {
                background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }
    }

    .large-screen-fix {

        @media(min-width: 1024px) {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 7.2rem;
        }
    }

    .client-cart-wrapper {
        margin-top:3rem;
        padding-left: 3.5rem;

        @media(max-width: 1023px) {
            &[data-show-page="false"] {
                display: none;
            }
        }

        &[data-show-client-order=false] {
            display: none;
        }


        h1,
        h2 {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
            font-weight: 500;
        }

        h1 {
            font-size: 3.2rem;                        
        }

        h2 {
            font-size: 2rem;
        }
        
        .cart-wrapper {
            display: flex;
            flex-direction: column;
            gap: 2rem;

            margin-top: 2.7rem;
            margin-bottom: 1.6rem;           
    
    
            .individual-dishe {
                display: flex;
                gap: 1rem;
    
    
                img {
                    width: 7.2rem;
                    height: 7.2rem;
                }
    
                .dishe-text-wrapper {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: center;

                    button {
                        background-color: transparent;
                        border: none;
                        color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
                        font-family: "Roboto", sans-serif;
                        font-size: 1.2rem;
                    }

                }
            }
        }

        .total-price-wrapper {
            margin-bottom: 4.7rem;
        }

        .cart-next-btn-wrapper {
            display: flex;
            justify-content: flex-end;
            gap: 1.5rem;
            margin-bottom: 5.8rem;
            margin-right: 3.7rem;

            .cart-next-btn,
            .cart-back-btn {           
                width: 40%; 
                font-size: 1.4rem;
            }

            @media(min-width: 1024px) {
                display: none;
            }
        }
    }

    .content-wrapper {
        border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
        border-radius: .5rem;
    }

    .client-payment-method-wrapper {
        margin: 5rem 0;
        padding: 0 4vw;

        @media(min-width: 1024px) {
            margin: 3rem 0;            
        }

        @media(max-width: 1023px) {
            &[data-show-page="false"] {
                display: block;
            }
        }
        
        h1 {
            margin-bottom: 3.2rem;
        }


        &[data-show-page="false"] {
            display: none;
        }

        .payment-method-btn-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            place-content: center;
          

            .payment-pix-btn,
            .payment-credit-card-btn {
                width: 100%;

                display: flex;
                align-items: center;
                justify-content: center;
                gap: .8rem;

                background-color: transparent;
                border: none;
                border-bottom: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};

                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                font-family: "Roboto", sans-serif;
                font-size: 1.6rem;

                padding: 3.1rem 7.5rem;  
                
                &[data-show-payment-method="true"] {
                    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_800};
                }
            }

            .payment-pix-btn {
                border-top-left-radius: .5rem;

            }

            .payment-credit-card-btn {
                border-left: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
                border-top-right-radius: .5rem;
            } 
        }
    }

    .render-payment {
        padding: 5rem 3rem;


        &[data-show-content="false"] {
            display: none;
        }

        .pix {
            display: flex;
            align-items: center;
            justify-content: center;

            &[data-show-payment-method="false"] {
                display: none;            
            }

            img {
                height: 16rem;
                width: 16rem;
            }
        }

        .credit-card {
            display: flex;
            flex-direction: column;
            gap: 3.7rem;

            &[data-show-payment-method="false"] {
                display: none;
            }

            > div {
                display: flex;
                gap: 1.7rem;
            }
        }

    }

    .awaiting-payment {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2.4rem;

        padding: 11.4rem 2.5rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", sans-serif;
        

        h2 {
            font-size: 2rem;
        }
    }

    .onyly-latest-purchase {
        margin-bottom: 2rem;
    }

    
`;


export const StyledFaRegCreditCard = styled(FaRegCreditCard)`
    font-size: 2rem;
`;

export const StyledFaPix = styled(FaPix)`
    font-size: 2rem;
`;

export const StyledFaRegClock = styled(FaRegClock)`
    font-size: 10rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

`;

export const StyledFaRegCheckCircle = styled(FaRegCheckCircle)`
    font-size: 10rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

`;

export const StyledCiForkAndKnife = styled(CiForkAndKnife)`
    font-size: 10rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_400};

`;

