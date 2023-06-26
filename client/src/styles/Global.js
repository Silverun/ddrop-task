import { createGlobalStyle } from "styled-components";
import fonts from "./fonts.module.css";

export const GlobalStyles = createGlobalStyle`
    ${fonts}

    *,
    *::before,
    *::after {
    box-sizing: border-box;
        }

    body {
        font-family: ${({ theme }) => theme.fonts.roboto}, sans-serif;
        font-size: 1rem;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        min-height: 100vh;
        
    }

`;
