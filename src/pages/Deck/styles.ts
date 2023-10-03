import { styled } from "styled-components";

export const DeckContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;

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
    margin-bottom: 10rem;
    height: 300px;
    width: 100%;
  }
  .deck {
    position: fixed;
    bottom: 0.5rem;

    border: 2px solid ${(props) => props.theme["gray-900"]};
    height: 300px;
    width: 550px;
  }
`;
