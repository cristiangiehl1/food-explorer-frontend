import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;

    main {
        margin-top:5.6rem;
        padding-left: 3.5rem;

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
        }
    }
`;