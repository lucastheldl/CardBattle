import styled from "styled-components";

export const BattleCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;

  width: 100%;
  height: 200px;
  max-width: 200px;

  border: 1px solid ${(props) => props.theme["red-500"]};

  border-radius: 6px;
  padding: 0.5rem;

  overflow: hidden;

  img {
    width: 100%;
    position: absolute;
    object-fit: cover;
    top: 50%;
    z-index: -1;

    transform: translateY(-50%);
  }

  strong {
    color: ${(props) => props.theme["gray-700"]};
  }

  a {
    padding: 1rem;
    background-color: ${(props) => props.theme["green-500"]};
    border: none;
    border-radius: 6px;

    width: 100%;

    font-weight: bold;
    text-align: center;
    text-decoration: none;
    color: ${(props) => props.theme["gray-100"]};

    &:hover {
      transition: 0.2s background-color;
      background-color: ${(props) => props.theme["green-300"]};
      cursor: pointer;
    }
  }
`;
