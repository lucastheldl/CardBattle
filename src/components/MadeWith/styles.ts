import { styled } from "styled-components";

export const MadeWithWrapper = styled.section`
  width: 100%;

  border-top: 2px solid ${(props) => props.theme["red-500"]};
  h1 {
    font-size: 2rem;
    margin-top: 2rem;
  }
`;
export const MadeWithContainer = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 3.5rem;

  margin: 0 auto;
`;
