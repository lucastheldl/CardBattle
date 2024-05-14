import styled from "styled-components";

export const RegisterWrapper = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  h3 {
    color: ${(props) => props.theme["red-500"]};
    padding-bottom: 2rem;
  }
`;
export const RegisterForm = styled.form`
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

export const RegisterInput = styled.input`
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
