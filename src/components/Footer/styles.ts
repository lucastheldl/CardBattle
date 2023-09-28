import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-between;

  padding: 2rem;

  font-size: 1.5rem;
  font-weight: bold;

  border-top: 2px solid ${(props) => props.theme["red-500"]};
  margin-top: 2rem;

  ul {
    display: flex;
    gap: 1rem;

    list-style: none;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme["red-500"]};
  }
`;
