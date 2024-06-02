import styled from "styled-components";


export const Container = styled.div`

    > .content {    
        
        label,
        option,
        select {
            gap: 8px; 
            color: ${({ theme }) => theme.COLORS.LIGHT_400};
            font-family: "Roboto", sans-serif;
            font-size: 1.2rem;

            @media(min-width: 1024px) {
                font-size: 1.6rem;
            }
        }

        input::placeholder {
            font-size: 1.4rem;

            @media(min-width: 1024px) {
                font-size: 1.6rem;
            }
        }

        main {
            padding: 0 3rem;   

            @media(min-width: 768px) {
                padding: 0 6rem;  
            }

            @media(min-width: 1024px) {
                padding: 0 12rem;  
            }

            form {
                display: flex;
                flex-direction: column;
                gap: 2.4rem;

                h1 {
                    font-size: 2.5rem;
                    font-weight: 400;
                    color: ${({ theme }) => theme.COLORS.LIGHT_300}; 
                    
                    @media(min-width: 1024px) {
                        font-size: 3.2rem;
                    }
                }
                        
            }
        }
    }

    .nav {
        display: flex;
        align-items: center;
        justify-content: center;
        
        background-color: transparent;
        border: none;
        color: ${({ theme }) => theme.COLORS.LIGHT_100};

        margin: 3rem 0 2.4rem;

        span {
            font-size: 1.2rem;  
            font-weight: bold;
            
            @media(min-width: 1024px) {
                font-size: 2.4rem;
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

            @media(min-width: 1024px) {
                font-size: 1.4rem;
            }
        }

        #name {
            background-color: transparent;
            border: none;
            border-radius: .8rem;
            padding: .2rem 0;    
            color: ${({ theme }) => theme.COLORS.LIGHT_400};       
        }
    }    

    .custom-file-upload {
        position: relative;
        overflow: hidden;
    }

    .custom-file-upload input[type="file"] {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        opacity: 0;   

        font-size: 0rem;
    } 


    .input-category {
        position: relative;
        justify-content: space-between;
        width: 100%;
        color: ${({ theme }) => theme.COLORS.LIGHT_400};
        font-family: "Roboto", sans-serif;           
    }

    
    .checkbox {
        position: relative;

        display: flex;
        align-items: center;
        gap: .8rem;


     
        input[type=checkbox] {
            position: absolute;
            top: 0;
            left: 0;
            opacity: 0;           

            height: 2rem;
            width: 2rem;
        }

        .checkmark {
            width: 20px;
            height: 20px;
            border: 2px solid ${({ theme }) => theme.COLORS.TINTS_TOMATO_100};
            border-radius: .8rem;
            cursor: pointer;

            &[data-is-checked="1"] {   
            background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
            }
        } 
    }

    .ingredients-wrapper {
        display: flex;
        flex-direction: column;
        gap: .8rem;
    }
    
    section[id="ingredients"] {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900};
        display: flex;
        
        align-items: center;
        gap: 1.6rem;
        
        flex-wrap: wrap;
        border-radius: 8px;
        padding: 6.5px;
    }  
    

    .buttons-wrapper {       
        display: grid;
        margin-bottom: 5rem;    
        

        @media(min-width: 1024px) {
            justify-content: flex-end;
        }

        button {           
            
            padding: 1.2rem 2.4rem;

            @media(min-width: 1024px) {
                font-size: 1.6rem;
            }

        }
    }


    .largeScreenFix {
        display: grid;        
        gap: 2.4rem;


        @media(min-width: 1024px) {
            grid-template-columns: auto 1fr .5fr;
            align-items: center;
        }
    }

    .largeScreenFix2 {
        display: grid;
        gap: 2.4rem;

        @media(min-width: 1024px) {
            grid-template-columns: 1fr auto;
            align-items: center;
        }
    }

    .input-price {
        display: flex;
        height: 100%;
        width: 100%;
    }


`;