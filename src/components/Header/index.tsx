import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Swords, Inbox } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export function Header() {
  const { user, logOut } = useContext(AuthContext);
  return (
    <HeaderContainer>
      <NavLink to="/CardBattle/">
        Card<span>Battle</span>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/CardBattle/battles">
            <Swords width={22} />
            Batalhas
          </NavLink>
        </li>
        <li>
          <NavLink to="/CardBattle/deck">
            <Inbox width={22} />
            Deck
          </NavLink>
        </li>
        {!user ? (
          <>
            <li>
              <NavLink to="/CardBattle/auth/login">Entrar</NavLink>
            </li>
            <li>
              <NavLink to="/CardBattle/auth/register">Register</NavLink>
            </li>
          </>
        ) : (
          <li>
            <button onClick={logOut}>Sair</button>
          </li>
        )}
      </ul>
    </HeaderContainer>
  );
}
