import styled from "styled-components";

interface StatusProps {
  state: boolean;
}
export const BurguerMenuContainer = styled.ul<StatusProps>`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  gap: 1rem;
  padding: 1rem;
  text-decoration: none;
  list-style: none;

  background-color: ${(props) => props.theme["gray-900"]};
  border: 1px solid ${(props) => props.theme["red-500"]};
  ${(props) =>
    props.state === false &&
    `
    display:none;
  `};
  li:not(:first-child) {
    border-top: 1px solid ${(props) => props.theme["red-500"]};
  }
  li:first-child {
    margin-left: auto;
  }
`;
