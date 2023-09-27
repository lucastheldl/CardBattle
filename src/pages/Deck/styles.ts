import { styled } from "styled-components";

export const DeckContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  .avaliableCards,
  .deck {
    display: flex;
    gap: 0.5rem;

    padding: 1rem;
    background-color: ${(props) => props.theme["red-500"]};
    border-radius: 6px;
  }
  .avaliableCards {
    height: 300px;
    width: 100%;
  }
  .deck {
    height: 300px;
    width: 550px;
  }
`;
