import { styled } from "styled-components";

export const BattlesContainer = styled.main`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 100%;
  max-width: 1120px;
  min-height: 500px;

  margin: 0 auto;
  section {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;
