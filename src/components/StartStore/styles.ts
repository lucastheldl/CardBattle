import { styled } from "styled-components";

export const StartStoreWrapper = styled.section`
  position: relative;

  width: 100%;

  border-top: 2px solid ${(props) => props.theme["red-500"]};

  overflow: hidden;
  h1 {
    font-size: 2rem;
    text-shadow: 1px 1px 0.1px ${(props) => props.theme["gray-800"]};
  }
`;
export const Cover = styled.div`
  position: absolute;
  top: 0;
  height: 2000px;
  width: 100%;
  z-index: -1;
  img {
    object-fit: cover;
    transform: translateY(30%);
    width: 100%;
    height: 100%;
  }
`;
export const StartStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1120px;

  padding: 3.5rem;

  margin: 0 auto;
`;
export const Deck = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  height: 340px;
  width: 700px;

  padding: 1rem;
  //background-color: ${(props) => props.theme["red-500"]};
  border-radius: 6px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const BuyButton = styled.button`
  padding: 1rem;
  background-color: ${(props) => props.theme["red-500"]};
  border: none;
  border-radius: 6px;
  box-sizing: border-box;

  width: 100%;

  font-weight: bold;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme["gray-100"]};
  border: 1px solid transparent;

  &:disabled {
    background-color: ${(props) => props.theme["gray-800"]};
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    transition: 0.2s background-color;
    background-color: ${(props) => props.theme["red-300"]};
    border: 1px solid ${(props) => props.theme["gray-800"]};
    cursor: pointer;
  }
`;
