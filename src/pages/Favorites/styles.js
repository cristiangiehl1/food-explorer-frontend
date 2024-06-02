import styled from "styled-components";
import { FaAngleLeft } from "react-icons/fa";


export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;

    .favorite-main {
        flex: 1;       
        padding: 3.4rem 8vw 3.4rem 8vw;      
    
        h1 {
            font-size: 3.2rem;          
        }

        h1,
        h2 {
            color: ${({ theme}) => theme.COLORS.LIGHT_300};
        }

        .favorites-wrapper {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: left;
            flex-wrap: wrap;
            gap: 4.8rem;           

            margin: 3.2rem 0;                 


            @media(min-width: 1024px) {
                flex-direction: row;
                align-items: center;
            }
            

            .favorites-content {
                display: flex;
                align-items: center;
                gap: 1.3rem;

                

                @media(min-width: 1024px) {
                    width: clamp(25rem, 12vw, 40rem); 
                }
            
                img {
                    height: 7.2rem;
                    width: 7.2rem;
                }

                .favorites-text-wrapper {

                    h2 {
                        font-size: 2rem;
                    }

                    button {
                        background-color: transparent;
                        border: none;

                        font-size: 1.2rem;
                        font-family: "Roboto", sans-serif;
                        color: ${({ theme}) => theme.COLORS.TINTS_TOMATO_400};
                    }

                }
            
            }
        }

        .btn-nav-home {
            display: flex;
            align-items: center;
            background-color: transparent;
            border: none;
            color: ${({ theme}) => theme.COLORS.LIGHT_300};
            font-size: 1.6rem;
        }
    }
`;

export const StyledFaAngleLeft= styled(FaAngleLeft)`
    font-size: 2rem; 

    @media(min-width: 1024px) {
        font-size: 2.5rem;
    }
`;  