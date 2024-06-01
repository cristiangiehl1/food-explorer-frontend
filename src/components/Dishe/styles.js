import styled from "styled-components";
import { GoPencil } from "react-icons/go";
import { FaRegHeart, FaPlus, FaMinus, FaHeart, FaAngleRight } from "react-icons/fa";

export const Container = styled.div`
    
    z-index: 0; 
    width: 20rem;
    height: 40rem;

    @media(min-width: 1024px) {
        width: 30rem;

    }
   

    > figure {
        position: relative;    
        padding: 5rem 1.5rem;    

        background-color: ${({ theme }) => theme.COLORS_BACKGROUND_DARK_300};
        
       .edit_like {
            position: absolute;
            width: 20px;
            height: 20px;
            right: 10px; 
            top: 16px;

            border: none;
            background-color: transparent;
            z-index: 1;

            > svg {  
                color: ${({ theme }) => theme.COLORS.LIGHT_300};       
              
            } 
       }

       .nav-wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

            img {
                width: 10rem; 
                height: 10rem;

                @media(min-width: 1024px) {
                    width: 17rem; 
                    height: 17rem;
                }
            }

            .figure-content {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                cursor: pointer;
            }

            .disheName {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: .5rem;

                h2 {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                    font-size: 1.5rem;
                    text-align: center;
                    
                    margin: .8rem 0;
                    height: 5rem;

                    @media(min-width: 320px) {
                        font-size: 1.2rem;                       
                    }

                    @media(min-width: 1024px) {
                        font-size: 2.2rem;  
                    }
                }

                svg {                                 
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                }
            }

            .description {
                display: none;
                height: 4rem;


                @media(min-width: 1024px) {
                    display: block;
                    color: ${({ theme }) => theme.COLORS.LIGHT_400};
                    font-family: "Roboto", sans-serif;
                    font-size: 1.4rem;
                    text-align: center;

                    margin: 1rem 0;
                }
            }

            .price {
                font-size: 1.6rem;
                font-family: "Roboto", sans-serif;
                color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
                text-align: center;
                letter-spacing: .2rem;

                @media(min-width: 1024px) {
                    font-size: 3rem;
                }
            }
            
            .fixScreenSize {
                display: flex;
                flex-direction: column;
                width: 100%;

                @media(min-width: 1024px) {
                    flex-direction: row;
                    margin-top: 1.5rem;
                }
            }

            .disheAddSubtract {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 1.4rem;                
                width: 100%;

                margin: 1.5rem 0;
                
                button {
                    background: none;
                    border: none;
                    display: flex;
                    
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                }

                span {
                    font-family: "Roboto", sans-serif;
                    font-size: 1.6rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};

                    @media(min-width: 1024px) {
                        font-size: 2rem;
                    }
                }
                    
            }
       }    
    }
`;

export const StyledGoPencil = styled(GoPencil)`
    font-size: 2rem; 

    @media(min-width: 1024px) {
        font-size: 3rem;
    }
  
`;

export const StyledFaRegHeart = styled(FaRegHeart)`
    font-size: 2rem; 
    color: ${({ theme }) => theme.COLORS.LIGHT_300};       


    @media(min-width: 1024px) {
        font-size: 3rem;
    }

  
`;

export const StyledFaPlus = styled(FaPlus)`
    font-size: 2rem; 
    color: ${({ theme }) => theme.COLORS.LIGHT_300};       


    @media(min-width: 1024px) {
        font-size: 2.5rem;
    }

  
`;

export const StyledFaMinus = styled(FaMinus)`
    font-size: 2rem; 

    @media(min-width: 1024px) {
        font-size: 2.5rem;
    }

  
`;

export const StyledFaHeart = styled(FaHeart)`
    font-size: 2rem; 

    @media(min-width: 1024px) {
        font-size: 3rem;
    }

  
`;

export const StyledFaAngleRight = styled(FaAngleRight)`
    font-size: 2rem; 

    @media(min-width: 1024px) {
        font-size: 2.5rem;
    }

  
`;