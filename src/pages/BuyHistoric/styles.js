import styled from "styled-components";

import { FaCircle } from "react-icons/fa6";
import { FaRegSadCry } from "react-icons/fa";
import { GiCancel  } from "react-icons/gi";




export const Container = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;

    h1 {
            font-size: 3.2rem;
            font-weight: 500;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }

    .large-screen {
        margin-top: 3.4rem;
        padding: 0 10rem;        

        display: none;

        @media(min-width: 1024px) {
            display: block;
        }

        
        h1 {
            margin-bottom: 1.7rem;
        }   

        table {
            width: 100%;
            margin-top: 3.4rem;

            border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_DARK_1000};
            border-radius: .8rem .8rem 0 0;

            font-size: 1.4rem;
            font-family: "Roboto", sans-serif;
            line-height: 2rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};



            thead {
                text-align: left;
               

                tr > th {
                    padding: 2.1rem 2.4rem;
                }


                tr > th + th {
                    border-left: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_DARK_1000};
                }
                
            }


            tbody {
                text-align: left;
                

                tr > td {

                    padding: 1.6rem 2.4rem;
                    border-top: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_DARK_1000};

                }

                tr > td + td {
                    border-left: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_DARK_1000};

                }


            }

        }
    }

    .small-screen {
        margin-top: 3.4rem;
        padding: 0 3.5rem; 

        @media(min-width: 1024px) {
            display: none;
        }

        h1 {
            margin-bottom: 1.7rem;
        }   

        .order-wrapper {
            border: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_DARK_1000};
            border-radius: .8rem;

            padding: 1.6rem 2.3rem;

            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-family: "Roboto", sans-serif;
            font-size: 1.4rem;
            line-height: 2.3rem;

            + .order-wrapper {
                margin-top: 1.7rem;
            }

            .order-infos {
                display: flex;
                align-items: center;
                gap: 3.1rem;
                margin-bottom: 1.6rem;
            }
        }
    }

    .status-wrapper {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: .8rem;

        select {
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_1000};
            border: transparent;
            border-radius: .8rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-family: "Roboto", sans-serif;
            
            padding: 1rem;

            &:focus-within {
            outline: 2px solid ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
        }

        }
    }

    .no-historic-msg {
        color: ${({ theme }) => theme.COLORS.LIGHT_400};

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 5rem;
    }

    .back-home-btn {
        display: flex;
        align-items: center;
        gap: .2rem;
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-size: 1.6rem;
        text-decoration: underline;

        margin-top: 2rem;
    }



`;

export const StyledFaCircle = styled(FaCircle)`
    font-size: 1rem;

    color: ${({ status }) => {
    switch (status) {
        case 'pendente':
            return 'red';
        case 'preparando':
            return 'yellow';
        case 'entregue':
            return 'green';        
        default:
            return 'black';
    }
  }};

`;

export const StyledFaRegSadCry = styled(FaRegSadCry)`
    font-size: 8rem;
`;


export const StyledGiCancel = styled(GiCancel)`
    font-size: 1rem;
    color: red;
`;


