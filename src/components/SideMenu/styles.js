import styled from "styled-components";


export const Container = styled.aside`
    height: 100vh;
    width: 100%;
    
    position: absolute;
    z-index: 1;

    background-color: ${({ theme }) => theme.COLORS.BLACK};

    display: grid;
    grid-template-rows: auto auto auto; 

    transform: translateX(-100%);
    transition: transform .3s ease-in-out;

    &[data-menu-is-open="true"] {   
        transform: translateX(0);
    }

    @media(min-width: 1024px) {
        display: none;
        
    }

    > header {
        display: flex;
        align-items: center;
        gap: 1rem;

        padding: 5.6rem 2.8rem 2.4rem;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700};

        > button {
            display: flex;
            background: transparent;
            border: none;

            svg {
                color: ${({ theme }) => theme.COLORS.LIGHT_100};
            }
        }

        span {
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 2.1rem;
            font-family: "Roboto", sans-serif;
        }
    }

    > main {
        margin: 3.6rem 2rem 0;      
        display: flex;
        flex-direction: column;

        aside {  
            height: 25rem;
            overflow-y: auto;  

            margin-top: .5rem;
            background-color: ${({ theme }) => theme.COLORS.LIGHT_700};
            padding: 0 1rem;
            border-radius: .8rem;
            
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

                background-color: transparent;
                border: none;

                color: ${({ theme }) => theme.COLORS.LIGHT_100};
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
        }       

        section {
            padding: 1rem;

            border-top: 2px solid rgba(6, 94, 124, 0.3); 
            
            &:nth-of-type(1) {
                margin-top: 1rem;
            }
            
            span {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-size: 2.2rem;          
            }

            button {
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                font-size: 2.2rem;          
                background-color: transparent;
                border: none;
            }
        }

    }


`;