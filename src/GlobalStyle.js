import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Roboto", sans-serif;

        letter-spacing: 0.7px;
    }

    a{
        text-decoration: none;
    }
`