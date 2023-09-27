import styled from "styled-components";

export const HomeContainer = styled.main`
  width: 100%;
  max-width: 1120px;

  margin: 0 auto;
  P {
    color: ${(props) => props.theme["red-500"]};
  }
`;
