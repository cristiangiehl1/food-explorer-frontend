import styled from "styled-components";


export const Container = styled.div`


    > .content {        

        main {
            padding: 0 3rem;

            .nav {
                display: flex;
                align-items: center;
                justify-content: center;
                
                background-color: transparent;
                border: none;
                color: ${({ theme }) => theme.COLORS.LIGHT_100};

                margin: 1rem 0 2.4rem;

                span {
                    font-size: 1.2rem;                                      
                }
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 2.4rem;

                h1 {
                    font-size: 2.5rem;
                    font-weight: 400;
                    color: ${({ theme }) => theme.COLORS.LIGHT_300};                    
                }

                label {
                    font-size: 1.2rem;
                    color: ${({ theme }) => theme.COLORS.LIGHT_400};
                }

                section {
                    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};
                    display: flex;
                    width: 100%;
                    align-items: center;
                    gap: 1.6rem;
                    
                    flex-wrap: wrap;
                    border-radius: 8px;
                    padding: 8px;
                }
                
                
            }
        }
    }

    .custom-file-upload,
    .input-category {        
        display: flex;
        
        align-items: center;
        gap: 8px;    

        border: none;
        border-radius: 8px;
        
        margin-top: .8rem;
        padding: 1.6rem 1.4rem;      
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};

        
        &:focus-within {
            outline: 2px solid ${({ theme }) => theme.COLORS.TINTS_CAKE_100};
        }

        input::placeholder {
            color: ${({ theme }) => theme.COLORS.LIGHT_700};
            font-family: "Roboto", sans-serif;
            font-size: 1.4rem;
        }

        p {            
            font-size: 1.2rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_100};
        }
    }

    .custom-file-upload input[type="file"] {
        opacity: 0;
        width: 100%;
        position: absolute;
    }


    .input-category {
        justify-content: space-between;

        input {
            border: none;
            background-color: transparent;
        }
    }

    .buttons-wrapper {
        display: flex;
        gap: 1rem;
        margin-bottom: 5rem;

        button {
            font-size: 1.2rem;
        }
    }

`;