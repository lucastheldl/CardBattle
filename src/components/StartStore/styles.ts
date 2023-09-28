import { styled } from "styled-components";

export const StartStoreWrapper = styled.section`
  position: relative;

  width: 100%;

  border-top: 2px solid ${(props) => props.theme["red-500"]};

  overflow: hidden;
  .cover {
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

  .deck {
    display: flex;
    justify-content: center;
    gap: 2rem;
    height: 300px;
    width: 700px;

    padding: 1rem;
    //background-color: ${(props) => props.theme["red-500"]};
    border-radius: 6px;
  }
`;
