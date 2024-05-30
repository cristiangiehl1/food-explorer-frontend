import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;

    display: grid;
    grid-template-columns: 14rem auto;
    grid-template-rows: max-content auto max-content;
    grid-template-areas: 
    'header header'
    'aside main'
    'footer footer';

    > header {
        grid-area: header;
    }

    > .profileMenu {
        position: relative;

        grid-area: aside;
        background-color: blue;

        display: flex;
        flex-direction: column;
        gap: 1rem;

        padding-top: 1rem;

        background-color: ${({ theme }) => theme.COLORS.TINTS_TOMATO_200};

        

        button {
            background-color: transparent;
            border: none;

            padding: 1rem;
            font-family: "Roboto", sans-serif;
            font-size: 1.6rem;
            color: ${({ theme }) => theme.COLORS.LIGHT_300};

            transition: background .3s ease-in-out;

            &:hover {
                background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};

            }

            &[data-highlight-button="true"] {   
                background: ${({ theme }) => theme.COLORS.TINTS_TOMATO_400};
            }
        }

        .backHomeBtn {
            position: absolute;
            bottom: 0;
            left: 15%;

            display: flex;
            align-items: center;

            &:hover {
                background: transparent;

            }
        }
    } 

    main {
        grid-area: main;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_DARK_300};
        
        form {            

            &[data-show-page="false"] {
                display: none;

            }
        }

    }


    > footer {
        grid-area: footer;
    }

`;


export const EditProfile = styled.form`

    display: flex;
    flex-direction: column;
    gap: 1rem;

    padding: 1.5rem;

    button {
        margin-top: 1rem;
    }       
`;