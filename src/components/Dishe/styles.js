import styled from "styled-components";

export const Container = styled.div`
    position: relative;  
    z-index: 0;
   

    > figure {
        padding: 5rem 1.5rem;        

        background-color: ${({ theme }) => theme.COLORS_BACKGROUND_DARK_300};
        
       .edit_like {
            position: absolute;
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
                width: 8.8rem; 
                height: 8.8rem;
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

                position: relative;

                h2 {
                    font-size: 1.5rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
                    
                    margin: 1.2rem 0;
                }

                svg {
                    position: absolute;
                    right: -12px;
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};
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
                }
                    
            }

            p {
                font-size: 1.6rem;
                font-family: "Roboto", sans-serif;
                color: ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
                text-align: center;
                letter-spacing: .2rem;

            }
        
       }      
        
    }

`;