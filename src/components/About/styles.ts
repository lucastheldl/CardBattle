import { styled } from "styled-components";

export const AboutWrapper = styled.section`
  width: 100%;
  h1 {
    font-size: 2rem;
  }
`;
export const AboutContainer = styled.div`
  width: 100%;
  max-width: 1120px;

  padding: 5rem 3.5rem;

  margin: 0 auto;
  P {
    font-size: 1.5rem;
    text-align: center;
    color: ${(props) => props.theme["red-300"]};
  }
`;
