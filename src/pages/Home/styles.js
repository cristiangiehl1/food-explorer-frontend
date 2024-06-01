import styled from "styled-components";

export const Container = styled.div`

    .content {
        &[data-hide-home="false"] {
            display: none;  
        }  

        .figureTitle {
            position: relative;
            
            display: flex;

            background: linear-gradient(
            to bottom, 
            ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700}, 
            ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900});

            margin: 6.2rem 9vw;
            /* margin: 4.4rem 3rem 6.2rem 3rem;
            padding: 2.2rem 2.1rem 2.2rem 12.5rem;

            @media(min-width: 768px) {           
                padding: 4rem 2.1rem 4rem 12rem;
                margin: 8rem 3rem 6.2rem 3rem;
            }

            @media(min-width: 1024px) {           
                padding: 10rem 2.1rem 10rem 18rem;
                margin: 12rem 3rem 6.2rem 3rem;
            } */

            img {
                position: absolute;
                bottom: 0;
                left: -4.5vw;

                width: 12rem;


                @media(min-width: 768px) {
                    width: 20rem;
                }

                @media(min-width: 1024px) {
                    width: 40rem;
                }
            }

            .pageTitle {
                display: flex;
                flex-direction: column;
                text-align: left;

                padding: 2rem 0 2rem 10rem;

                
                @media(min-width: 768px) {           
                    padding: 4rem 0 4rem 17rem;
                }

                @media(min-width: 1024px) {           
                    padding: 10rem 0 10rem 35rem;
                }
            

                h2 {
                    font-size: 1.4rem;
                    font-weight: 500;
                    margin-bottom: .3rem;

                    @media(max-width: 321px) {           
                        
                    }

                    @media(min-width: 768px) {           
                        font-size: 2rem;
                    }

                    @media(min-width: 1024px) {   
                        font-size: 3.2rem;        
                    }
                }

                p {
                    font-size: .7rem;

                    
                    @media(max-width: 321px) {           
                        font-size: .6rem;
                    }

                    @media(min-width: 768px) {           
                        font-size: 1.4rem;
                    }

                    @media(min-width: 1024px) {           
                        font-size: 1.6rem;
                    }
                }
            }

        }

        > main {
            display: flex;
            flex-direction: column;
            justify-content: center;

            > h2 {            
                font-size: 1.8rem;
                color: ${({ theme }) => theme.COLORS.LIGHT_300};
                margin-bottom: 2.4rem;
                margin-left: 2.4rem;     
                
                @media(min-width: 1024px) {
                    font-size: 3.2rem;
                }
            }

            section {
                position: relative;
                display: flex;
                gap: 1.6rem;    


                &:nth-child(n+2) {
                    margin-bottom: 2.4rem;
                }

                div {
                   
                }
            }
        }       
    }
`;