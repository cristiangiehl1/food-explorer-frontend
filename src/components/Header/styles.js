import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { BsFillHexagonFill } from "react-icons/bs";


export const Container = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center; 
    justify-content: space-between;  
    gap: 3.2rem;  
    
    padding: 5.6rem 2.8rem 2.4rem;  

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};
    
    @media (min-width: 1024px) {
        display: grid;
        grid-template-columns: max-content 1fr max-content max-content;
    }   
    
    button {
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

    }

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
        
        gap: .8rem;
       

        @media (max-width: 321px) {
            align-items : center;                   
        }   
        
        svg {
            color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200};          
        }
        
        div {
            display: flex;
            flex-direction: row; 
            gap: .5rem;
            align-items: center;  
            
            @media (min-width: 1024px) {
                flex-direction: column;
                align-items: flex-end; 
                gap: 0;          
            }   


            h1 {            
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
                font-size: 1.8rem;
                font-weight: bold;
                

                @media (max-width: 321px) {
                    font-size: 1.4rem;                   
                }   

                @media (min-width: 1024px) {
                    font-size: 2.4rem;
                }      
                
                @media (min-width: 1024px) {
                    font-size: 3rem;
                }      
            }


            span {
                display: flex;
                color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
                font-size: 1.2rem;

                @media (max-width: 321px) {
                    font-size: 1rem;                   
                }   
            }

        }



    }

    > .searchbar {
        position: relative;
        display: flex;

        @media(max-width: 1023px) {
            display: none;
        }

        .searchbarResult {
            position: absolute;
            z-index: 1;
            top: 50px;


            width: 100%;
            height: 20rem;

            background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
            margin-top: .5rem;
            padding: 0 1rem;
            border-radius: .8rem;

            overflow-y: auto;         

            opacity: 0;
            visibility: hidden;            

            transition: height .3s ease-in-out, opacity .3s ease-in-out; 
            

            &[data-search-bar-result="true"] {                
                opacity: 1; 
                visibility: visible;                         
            }

            button {
                display: flex;
                justify-content: space-between;
                align-items: center;

                background-color: transparent;
                border: none;

                width: 100%;
                
                padding: 8px 0;

                &:hover {
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                }

                &:nth-child(n+2) {
                    border-top: 2px solid ${({ theme }) => theme.COLORS.LIGHT_300};;
                }

                span {
                    font-size: 1.2rem;
                    
                    
                   
                    &:first-of-type {
                        margin-right: .5rem;
                    }
                    &:last-of-type {
                        width: 6.5rem;              
                    }
                }
            } 
            
            .img-wrapper {
                display: flex;
                align-items: center;
                gap: 1rem;
                width: 100%;
                
                img {
                    width: 5rem;
                    height: 5rem;
                }

                span {
                    display: flex;
                    flex: 1;
                    
                }
                
                
            }
        }
    }

    > .ordersNumb {
        position: relative;
        display: flex;

        &[data-orders-is-available="false"] {
            display: none;
        }

        .smallScreenBtn-Container {
           

            @media (min-width: 1023px) {
                display: none;            
            }          
            
            .smallScreenBtn {
                position: absolute;
                top: -10px;
                right: -10px;
                background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
                border-radius: 50%;
                width: 20px;
                height: 20px;

                border: none;

                display: flex;
                justify-content: center;
                align-items: center;

                padding: 1.1rem;

                font-size: 1.4rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_100}; 

                svg {            
                    color: ${({ theme }) => theme.COLORS.LIGHT_100};                  
                } 
            }  
        }

        .largeScreenBtn {            
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .8rem;

            padding: .8rem 4.6rem;

            
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
            border: none;
            border-radius: 5px;


            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 1.4rem;


            @media (max-width: 1022px) {
                display: none;            
            }
        }
    }


    .adminBtn {
        font-size: 1.4rem;
        
        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
        padding: 1.2rem 4.6rem;
        border-radius: .5rem;

        @media (max-width: 1022px) {
                display: none;            
        }

    }

    > .logout {
        display: flex;
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        @media (max-width: 1023px) {
            display: none;            
        }
    }
`;


export const StyledBsFillHexagonFill = styled(BsFillHexagonFill)`
    font-size: 2.5rem; 

    @media(min-width: 1024px) {
        font-size: 3.5rem;
    }
  
`;