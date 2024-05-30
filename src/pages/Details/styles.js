import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-rows: max-content 1fr max-content;

    .content {
        display: block;

        &[data-hide-details="true"] {
            display: none;

        }

        > main { 
        margin: 1.5rem 4rem 0; 

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

                margin-bottom: 1.6rem;

                span {
                    font-size: 2rem;
                }
            }

            figure {
                display: flex;
                flex-direction: column;
                align-items: center;

                
                img {
                    width: 22rem;
                    height: 22rem;

                    margin-bottom: 1.6rem;
                }

                figcaption{
                    display: flex;
                    flex-direction: column;
                    align-items: center;

                    h2 {
                        font-size: 1.8rem;
                        font-weight: 500;

                        margin-bottom: 1.6rem;
                    }
                    
                    p {
                        font-size: 1.4rem;
                        text-align: center;
                        font-weight: 300;

                        margin-bottom: 1.6rem;
                    }
                    
                    .ingredients {
                        display: flex;
                        align-items: center;
                        gap: 2rem;
                        flex-wrap: wrap;

                        margin-bottom: 4rem;
                        

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
    
    .customerOnly {        
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.6rem;
    }

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .6rem;
        
        
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
        font-size: 1.3rem;

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