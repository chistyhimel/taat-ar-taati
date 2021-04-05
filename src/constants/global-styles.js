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
    /* background-color: #231f20; */
    -webkit-user-select: none; /* webkit (safari, chrome) browsers */
    -moz-user-select: none; /* mozilla browsers */
    -khtml-user-select: none; /* webkit (konqueror) browsers */
    -ms-user-select: none; /* IE10+ */
    

    
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
