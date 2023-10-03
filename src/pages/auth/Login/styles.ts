import styled from "styled-components";

export const LoginWrapper = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
`;
export const LoginForm = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 3rem 0;

  label {
    color: ${(props) => props.theme["red-300"]};
    font-weight: bold;
  }
  p {
    margin-top: 1rem;
    color: ${(props) => props.theme["red-500"]};
    a {
      color: ${(props) => props.theme["red-300"]};
    }
  }
`;

export const LoginInput = styled.input`
  background-color: ${(props) => props.theme["red-500"]};
  color: ${(props) => props.theme["gray-900"]};
  font-weight: bold;

  border: none;
  border-radius: 6px;

  margin-bottom: 3rem;
  padding: 0.5rem;

  width: 20rem;
  &::placeholder {
    color: ${(props) => props.theme["red-300"]};
  }
`;

export const LoginBtn = styled.button`
  padding: 1rem;
  background-color: ${(props) => props.theme["red-500"]};
  border: none;
  border-radius: 6px;
  box-sizing: border-box;

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
`;
