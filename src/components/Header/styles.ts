import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  padding: 1rem;

  font-size: 1.5rem;
  font-weight: bold;

  border-bottom: 2px solid ${(props) => props.theme["red-500"]};
  margin-bottom: 2rem;

  ul {
    display: flex;
    align-items: center;
    gap: 1rem;

    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["red-500"]};

    padding: 1rem;
    border-radius: 6px;
    &:hover {
      color: ${(props) => props.theme["red-300"]};
    }
  }
`;
