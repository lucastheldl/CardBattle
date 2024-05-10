import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family:Overpass,sans-serif;
    

    :focus{
      outline:0;
      box-shadow: 0 0 0 2px ${(props) => props.theme["red-300"]}
  }

  h1,h2{
    text-align:center;
    color:${(props) => props.theme["red-300"]}
  }
  body{
    background-color: ${(props) => props.theme["gray-900"]};

  }
  }`;
