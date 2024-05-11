import styled from "styled-components";

export const ShopContainer = styled.div`
  display: flex;
  gap: 2rem;

  width: 1120px;
  margin: 0 auto;
`;
interface ModalContainerProps {
  state: boolean;
}
export const ModalContainer = styled.div<ModalContainerProps>`
  display: ${(props) =>
    props.state ? "block" : "none"}; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  //overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
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
  width: 30%;
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
    top: 15%;
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
    100% {
      transform: scale(1.2);
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
