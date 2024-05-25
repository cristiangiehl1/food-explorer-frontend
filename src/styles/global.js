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

    input,
    textarea {
        font-family: "Roboto", sans-serif;
    }


`;