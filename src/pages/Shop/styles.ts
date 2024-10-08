import styled from "styled-components";

export const ShopWrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const ShopContainer = styled.div`
  display: flex;
  gap: 2rem;

  max-width: 1120px;
  margin: 0 auto;
  @media (max-width: 830px) {
    flex-direction: column;
    justify-content: center;
  }
`;
interface ModalContainerProps {
  state: boolean;
}
export const ModalContainer = styled.div<ModalContainerProps>`
  display: ${(props) => (props.state ? "block" : "none")};
  position: fixed;
  z-index: 15;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
`;

interface ModalContent {
  state: "IDLE" | "DISPLAYING";
}
export const ModalContent = styled.div<ModalContent>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;

  background-color: ${(props) => props.theme["gray-900"]};
  border: 1px solid ${(props) => props.theme["red-500"]};

  margin: 5% auto; /* 15% from the top and centered */
  padding: 20px;
  border-radius: 20px;
  max-width: 500px;
  min-height: 300px;

  .boosterArea {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 10;
    img {
      animation: ${(props) =>
        props.state === "DISPLAYING" ? "Disolve 2s linear forwards" : "none"};
    }
  }
  .cardArea {
    position: absolute;
    top: 23%;
    left: 50%;
    transform: translateX(-50%);
    display: ${(props) => (props.state === "DISPLAYING" ? "flex" : "none")};
    flex-direction: column;
    gap: 0.5rem;
  }
  @keyframes Disolve {
    0% {
    }
    10% {
      opacity: 1;
    }
    99% {
      transform: scale(1.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
`;
export const ModalHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${(props) => props.theme["red-500"]};
  button {
    background: none;
    border: none;

    svg {
      color: ${(props) => props.theme["red-500"]};
    }

    &:hover {
      transition: 0.2s background-color;
      cursor: pointer;
      svg {
        color: ${(props) => props.theme["red-300"]};
      }
    }
  }
`;
