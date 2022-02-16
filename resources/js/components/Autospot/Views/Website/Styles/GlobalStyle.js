// globalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #fff;
    --yellow: rgb(254, 206, 23);
    --gray: #afb0b0;
    --lightGray: #eeeeee;
    --darkGray: #4d4e51;
    --wsGreen: rgb(96,221,0)
  }
  
  *{
    font-family: 'Raleway', sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }
  .is-active{
    &::before {
        position: absolute;
        content: "";
        left: 1rem;
        top: calc(1rem - 3px);
        width: 20px;
        height: 2px;
        background-color: white;
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s;
    }
  }
`;

export default GlobalStyle;
