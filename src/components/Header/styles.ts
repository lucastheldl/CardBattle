import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  font-size: 1.5rem;
  font-weight: bold;

  border-bottom: 2px solid ${(props) => props.theme["red-500"]};
  margin-bottom: 2rem;

  .logo {
    position: relative;
    &::before {
      position: absolute;
      content: "";
      width: 30px;
      height: 30px;
      border-radius: 5px;

      transform: translateX(-8px) rotate(45deg);

      background-color: ${(props) => props.theme["red-300"]};
      z-index: -1;
      transition: all 0.2s;
    }
    &:hover {
      &::before {
        transform: translateX(110px) rotate(315deg);
      }
    }
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    list-style: none;
  }

  a,
  button {
    display: flex;
    gap: 10px;
    align-items: center;
    text-decoration: none;
    color: ${(props) => props.theme["red-500"]};
    background: none;
    border: none;

    font-weight: bold;
    font-size: 1.5rem;

    padding: 1rem;
    border-radius: 6px;

    span {
      color: ${(props) => props.theme["red-300"]};
    }
    &:hover {
      transition: 0.2s all;
      color: ${(props) => props.theme["red-300"]};
      cursor: pointer;
      span {
        color: ${(props) => props.theme["red-500"]};
      }
    }
  }
`;
