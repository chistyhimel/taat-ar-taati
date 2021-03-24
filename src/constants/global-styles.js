import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*::before,
*::after,
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Alegreya', serif;
  }
  *:focus {
    outline: none;
}


  body {
    overflow-x: hidden;
    .slick-prev, .slick-next{
    display: none !important;

    
  }
  }

  hr{
      background-color: #ebebeb;
      border: 0;
      height: 1px;
    }
  a{
    text-decoration: none;
  }

  
  button{
    cursor: pointer;
  }

`;

export default GlobalStyle;
