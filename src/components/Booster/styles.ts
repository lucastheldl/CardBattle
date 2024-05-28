import styled from "styled-components";

export const BoosterContainer = styled.button`
  max-width: 200px;

  img {
    width: 100%;
  }
  button {
  }
  &:hover {
    cursor: pointer;
    transition: 0.2s ease-in-out;
    box-shadow: 0px 0px 15px ${(props) => props.theme["red-500"]};
    transform: translateY(-10px);
  }
`;
