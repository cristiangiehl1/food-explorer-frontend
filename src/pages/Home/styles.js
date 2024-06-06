import styled from "styled-components";



export const Container = styled.div`
    

    .content {
        
        
        @media(min-width: 1024px) {
            &[data-hide-home="false"] {
                display: block;  
            }
        }

        .figureTitle {
            position: relative;
            
            display: flex;

            background: linear-gradient(
            to bottom, 
            ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700}, 
            ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900});

            margin: 6.2rem 9vw;

            
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

                    @media(min-width: 620px) {           
                        font-size: 2rem;
                    }

                    @media(min-width: 1024px) {   
                        font-size: 3.2rem;        
                    }
                }

                p {
                    font-size: .8rem;
                    
                    @media(max-width: 321px) {           
                        font-size: .6rem;
                    }

                    @media(min-width: 620px) {           
                        font-size: 1rem;
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
                
                height: 40rem;

                overflow: hidden;
                mask-image: linear-gradient(to right,
                    rgba(0, 0, 0, 0),
                    rgba(0, 0, 0, 1) 20%,
                    rgba(0, 0, 0, 1) 80%,
                    rgba(0, 0, 0, 0) 
                );

                --delay: 0;

                @media(min-width: 1024px) {
                    height: 55rem;
                }

                div {                   
                    animation-delay: var(--delay);
                }

                &:hover > div {
                    animation-play-state: paused;
                }

                &:nth-child(n+2) {
                    margin-bottom: 2.4rem;
                }
            }
        }       
    }
`;