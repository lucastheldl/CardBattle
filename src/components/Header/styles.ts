import styled from "styled-components";

export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;

  padding: 2rem;

  font-size: 1.5rem;
  font-weight: bold;

  border-bottom: 2px solid ${(props) => props.theme["gray-800"]};
  margin-bottom: 2rem;

  ul {
    display: flex;
    gap: 1rem;

    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["gray-800"]};
  }
`;
