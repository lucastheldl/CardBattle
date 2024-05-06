import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

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
    display: flex;
    gap: 10px;

    padding: 0.5rem;
    border-radius: 6px;
    text-decoration: none;
    color: ${(props) => props.theme["red-500"]};

    &:hover {
      transition: 0.2s all;
      color: ${(props) => props.theme["red-300"]};
    }
  }
  p {
    color: ${(props) => props.theme["red-500"]};
  }
`;
