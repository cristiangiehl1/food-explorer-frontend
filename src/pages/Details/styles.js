import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-rows: max-content 1fr max-content;

    .content {
        display: block;
        margin-bottom: 2rem;

        &[data-hide-details="true"] {
            display: none;

        }

        > main { 
        margin: 2rem 4rem 0; 
        
        
        @media(min-width: 1024px) {
            margin: 2.5rem 8rem 0; 
            
        }


        svg, 
        span,
        h2,
        p {
            color: ${({ theme }) => theme.COLORS.LIGHT_300};
        }
    

            .nav {
                display: flex;
                align-items: center;

                background-color: transparent;
                border: none;     

                span {
                    font-size: 2rem;

                    @media(min-width: 1024px) {
                        font-size: 2.4rem;
                    }
                }
            }

            figure {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                margin: 1rem 0 0; 


                @media(min-width: 1024px) {
                    flex-direction: row;                      
                    gap: 4.7rem;     
                    margin: 2rem 0 3rem;              
                }

                
                img {
                    width: 22rem;
                    height: 22rem;

                    margin-bottom: 1.6rem;

                    @media(min-width: 1024px) {
                        width: 38rem;
                        height: 38rem;
                        margin-bottom: 0;
                    }
                    
    
                }

                figcaption{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    
                    

                    @media(min-width: 1024px) {                        
                        align-items: flex-start;
                                        
                    }


                    h2 {
                        font-size: 1.8rem;
                        font-weight: 500;

                        margin-bottom: 1.6rem;

                        @media(min-width: 1024px) {                        
                           font-size: 4rem; 
                           margin-bottom: 2.4rem;              
                        }

                    }
                    
                    p {
                        font-size: 1.4rem;
                        text-align: center;
                        font-weight: 300;

                        margin-bottom: 1.6rem;

                        @media(min-width: 1024px) {                        
                           font-size: 2rem;  
                           text-align: left; 
                           margin-bottom: 2.4rem;                
                        }

                    }
                    
                    .ingredients {
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                        flex-wrap: wrap;

                        margin-bottom: 2rem;

                        @media(min-width: 1024px) {                      
                           margin-bottom: 4.8rem;                
                        }
                        

                        div {
                            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_1000};
                            padding: 4px 8px;
                            border-radius: 5px;

                            span {
                                font-size: 1.4rem;
                            }
                        }
                    }

                }


            }
        }

        > footer {
            margin-top: 2.4rem;
        }
    }  


    .btn-admin-only {
        
        @media(min-width: 1024px) {
            width: 35%;
        }
        
    }
    
    .customerOnly {        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;

        > button{
            padding: 1.2rem 2.4rem;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: .6rem;         
            
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
            font-size: 1.3rem;
        }
    }


    .disheAddSubtract {
        width: 50%;
        display: flex; 
        align-items:  center;
        justify-content: center;
        gap: 1.5rem;

        button {
           
            background-color: transparent;
            border: none;            
        }

        span {
            font-family: "Roboto", sans-serif;
            font-size: 2rem;
            font-weight: bold;
        }
    }
`;