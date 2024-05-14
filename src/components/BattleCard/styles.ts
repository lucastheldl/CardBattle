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
    width: 130%;
    position: absolute;
    object-fit: cover;
    top: 50%;
    z-index: -1;

    transform: translateY(-50%);
  }

  strong {
    color: ${(props) => props.theme["red-300"]};
    text-shadow: 1px 2px 2px black;
  }

  a {
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

    &:hover {
      transition: 0.2s background-color;
      background-color: ${(props) => props.theme["red-300"]};
      border: 1px solid ${(props) => props.theme["gray-800"]};
      cursor: pointer;
    }
  }
`;
