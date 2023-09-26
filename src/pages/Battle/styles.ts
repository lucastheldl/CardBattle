import { styled } from "styled-components";

export const BattleContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  .bg {
    width: 800px;

    transform: translate(2%, -30%);

    z-index: -1;
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  max-width: 1300px;

  margin: 0 auto;

  .deck {
    position: absolute;
    top: 400px;

    display: flex;
    gap: 0.5rem;
    height: 300px;
    width: 550px;

    padding: 1rem;
    background-color: ${(props) => props.theme["gray-400"]};
    border-radius: 6px;
  }
`;
