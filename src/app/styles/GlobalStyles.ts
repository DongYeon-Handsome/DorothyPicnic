import { createGlobalStyle, css } from "styled-components";

const styles = css`
  body{
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    box-sizing: border-box;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${styles}
`;

export default GlobalStyles;