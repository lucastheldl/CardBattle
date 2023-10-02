import { FormEvent, useState } from "react";
import { RegisterWrapper } from "./styles";
import signUp from "../../../firebase/auth/signUp";

export function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const { result, error } = await signUp(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
  }
  return (
    <RegisterWrapper>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input type="text" placeholder="Escolha um nome de usuario" />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          placeholder="email@email.com"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name="email"
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          placeholder="escolha uma senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          name="password"
          required
        />

        <button type="submit">Registrar</button>
      </form>
    </RegisterWrapper>
  );
}
