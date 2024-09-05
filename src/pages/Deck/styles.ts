import { styled } from "styled-components";

export const DeckContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position: relative;
  padding: 0 0.5rem;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  p {
    color: ${(props) => props.theme["red-500"]};
    font-weight: bold;
  }
  .avaliableCards,
  .deck {
    display: flex;

    gap: 0.5rem;

    padding: 1rem;

    border-radius: 6px;
    @media (max-width: 500px) {
      padding: 0.5rem;
    }
  }
  .avaliableCards {
    flex-wrap: wrap;
    margin-bottom: 10rem;
    min-height: 300px;
    width: 100%;
    max-width: 950px;
    background-color: ${(props) => props.theme["red-500"]};
  }
  .deck {
    position: fixed;
    justify-content: center;
    bottom: -15rem;

    border: 2px solid ${(props) => props.theme["gray-900"]};
    background-color: ${(props) => props.theme["red-300"]};
    min-height: 300px;
    width: 550px;

    transition: bottom 0.2s linear;

    &:hover {
      bottom: 0.5rem;
    }
  }
`;
