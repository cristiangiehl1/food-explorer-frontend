import styled from "styled-components";

export const Container = styled.div`

    .content {
        &[data-hide-home="false"] {
            display: none;  
        }  

        > figure {
        display: flex;

        position: relative;

        background: linear-gradient(
            to bottom, 
            ${({ theme }) => theme.COLORS.BACKGROUND_DARK_700}, 
            ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900});

        margin: 4.4rem 3rem 6.2rem 3rem;
        padding: 2.2rem 2.1rem 2.2rem 12.5rem;

        @media(min-width: 768px) {           
            padding: 4rem 2.1rem 4rem 20rem;
            margin: 8rem 3rem 6.2rem 3rem;
        }

        img {
            position: absolute;
            bottom: 0;
            left: 0;

            width: 12rem;


            @media(min-width: 768px) {
                width: 20rem;
            }
        }

        figcaption {
            display: flex;
            flex-direction: column;
            text-align: left;
            

            h2 {
                font-size: 1.4rem;
                font-weight: 500;
                margin-bottom: .3rem;

                @media(min-width: 768px) {           
                    font-size: 2rem;
                }
            }

            p {
                font-size: .7rem;

                @media(min-width: 768px) {           
                    font-size: 1.2rem;
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
            }

            section {
                display: flex;
                gap: 1.6rem;           

                &:nth-child(n+2) {
                    margin-bottom: 2.4rem;
                }
            }
        }       
    }
`;