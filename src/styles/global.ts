import styled, { createGlobalStyle } from "styled-components";

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
interface DefaultBtnProps {
  fontSize?: number;
  dark?: boolean;
}

export const DefaultBtn = styled.button<DefaultBtnProps>`
  padding: 1rem;
  background-color: ${(props) =>
    props.dark ? props.theme["gray-900"] : props.theme["red-500"]};
  border: none;
  border-radius: 6px;
  box-sizing: border-box;

  font-weight: bold;
  text-align: center;
  font-size: ${(props) => (props.fontSize ? `${props.fontSize}rem` : `0.8rem`)};
  text-decoration: none;
  color: ${(props) => props.theme["gray-100"]};
  border: 1px solid
    ${(props) => (props.dark ? props.theme["red-500"] : "transparent")};

  &:hover {
    transition: 0.2s background-color;
    background-color: ${(props) => props.theme["red-300"]};
    border: 1px solid ${(props) => props.theme["gray-800"]};
    cursor: pointer;
  }
`;
