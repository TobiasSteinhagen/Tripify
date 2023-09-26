import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0 20px;
    font-family: system-ui;
  }

  a:link, 
  a:visited {
color: #252525;

  }


h2 {
font-size: 16px;
font-weight: 500;
margin:0;
}

h3 {
font-size: 14px;
font-weight: 400;
margin:0;
}

h4 {
font-size: 12px;
font-weight: 400;
margin:0;
}
p {
  
}

`;
