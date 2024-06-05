import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BLACK};
        color: ${({ theme }) => theme.COLORS.LIGHT_300};
        font-size: 1.6rem;

        -webkit-font-smoothin: antialiased;
    }

    body, 
    a, 
    button {
        font-family: "Poppins", sans-serif;
    }

    a {
        text-decoration: none;
    }

    button,
    a {
        cursor: pointer;
        transition: filter .2s;
    }

    button:hover,
    a:hover {
        filter: brightness(0.9);
    }

    input:focus,
    textarea:focus {
        outline: none;
    }

    input,
    textarea {
        font-family: "Roboto", sans-serif;
    }

    &::-webkit-scrollbar {
        width: 5px;        
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.TINTS_CAKE_200}; 
        border-radius: 5px; 
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    textarea:-webkit-autofill,
    textarea:-webkit-autofill:hover,
    textarea:-webkit-autofill:focus,
    select:-webkit-autofill,
    select:-webkit-autofill:hover,
    select:-webkit-autofill:focus {        
        border: none;       
        -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.COLORS.BACKGROUND_DARK_900} inset;
        -webkit-text-fill-color: ${({ theme }) => theme.COLORS.LIGHT_400};
        transition: background-color 5000s ease-in-out 0s;
    }

`;