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

export const ModalContent = styled.div`
  background-color: ${(props) => props.theme["gray-900"]};
  border: 1px solid ${(props) => props.theme["red-500"]};

  margin: 10% auto; /* 15% from the top and centered */
  padding: 20px;
  border-radius: 20px;
  width: 80%;
  min-height: 300px;
`;
