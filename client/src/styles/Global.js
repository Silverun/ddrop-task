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

ul {
    padding: 0;
    margin: 0;
}

li {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

li[role="button"] {
    cursor: pointer;
}

input,
button,
textarea,
select {
  font: inherit;
}
`;
