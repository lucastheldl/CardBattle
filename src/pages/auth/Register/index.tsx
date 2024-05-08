import { FormEvent, useContext, useState } from "react";
import {
  RegisterBtn,
  RegisterForm,
  RegisterInput,
  RegisterWrapper,
} from "./styles";
import signUp from "../../../firebase/auth/signUp";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { fetchUserFile } = useContext(AuthContext);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    fetchUserFile();
  }
  return (
    <RegisterWrapper>
      <h2>Cadastre-se</h2>
      <RegisterForm onSubmit={handleSubmit}>
        <label>Username:</label>
        <RegisterInput type="text" placeholder="Escolha um nome de usuario" />

        <label htmlFor="email">Email:</label>
        <RegisterInput
          type="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          required
        />

        <label htmlFor="password">Senha:</label>
        <RegisterInput
          type="password"
          placeholder="Escolha uma senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          required
        />
        <label htmlFor="confirmPassword">Confirmar senha:</label>
        <RegisterInput
          type="password"
          placeholder="Confirme sua senha"
          onChange={(e) => setConfirmPassword(e.target.value)}
          value={confirmPassword}
          name="confirmPassword"
          required
        />

        <RegisterBtn type="submit">Cadastrar</RegisterBtn>
        <p>
          Já tem uma conta?{" "}
          <NavLink to={"/CardBattle/auth/login"}>Entrar</NavLink>
        </p>
      </RegisterForm>
    </RegisterWrapper>
  );
}
