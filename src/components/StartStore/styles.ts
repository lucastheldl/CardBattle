import { styled } from "styled-components";

export const StartStoreWrapper = styled.section`
  position: relative;

  width: 100%;

  border-top: 2px solid ${(props) => props.theme["red-500"]};

  overflow: hidden;
  img {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: -1;
  }
`;
export const StartStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1120px;

  padding: 2rem;

  margin: 0 auto;

  .deck {
    display: flex;
    gap: 0.5rem;
    height: 300px;
    width: 550px;

    padding: 1rem;
    //background-color: ${(props) => props.theme["red-500"]};
    border-radius: 6px;
  }
`;
