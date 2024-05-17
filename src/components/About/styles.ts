import { styled } from "styled-components";

export const AboutWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1120px;

  margin: 0 auto 3rem;

  padding: 1rem;
  h1 {
    font-size: 2.5rem;
    text-align: left;
  }
  img {
    @media (max-width: 900px) {
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

    color: ${(props) => props.theme["red-300"]};
  }
`;
