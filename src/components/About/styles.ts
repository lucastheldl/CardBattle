import { styled } from "styled-components";

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1120px;
  min-height: 300px;

  margin: 0 auto 3rem;

  padding: 1rem;
  h1 {
    font-size: 2.5rem;
    text-align: left;
  }
  @media (max-width: 900px) {
    img {
      display: none;
    }
  }
`;
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 1rem;
  h1 {
    color: ${(props) => props.theme["red-500"]};
  }
  P {
    font-size: 1.5rem;
    text-align: justify;
    color: ${(props) => props.theme["red-300"]};
  }
  @media (max-width: 900px) {
    align-items: center;
  }
`;
