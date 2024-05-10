import styled from "styled-components";

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  background-color: ${(props) => props.theme["gray-900"]};

  img {
    animation: rotation 2s linear infinite;
  }
  p {
    font-weight: bold;
    color: ${(props) => props.theme["red-500"]};
  }

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
