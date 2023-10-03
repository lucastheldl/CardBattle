import { FormEvent, useState } from "react";
import { LoginBtn, LoginForm, LoginInput, LoginWrapper } from "./styles";
import signIn from "../../../firebase/auth/signIn";
import { NavLink } from "react-router-dom";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { result, error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
  }
  return (
    <LoginWrapper>
      <h2>Entrar com uma conta</h2>
      <LoginForm onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <LoginInput
          type="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          required
        />

        <label htmlFor="password">Senha:</label>
        <LoginInput
          type="password"
          placeholder="Escolha uma senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          required
        />

        <LoginBtn type="submit">Entrar</LoginBtn>
        <p>
          Não tem uma conta?{" "}
          <NavLink to={"/CardBattle/auth/register"}>Cadastre-se</NavLink>
        </p>
      </LoginForm>
    </LoginWrapper>
  );
}
