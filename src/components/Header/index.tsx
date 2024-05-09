import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Swords, Inbox, ShoppingBag, Pencil } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export function Header() {
  const { user, logOut } = useContext(AuthContext);
  const { userFileRef } = useContext(AuthContext);
  return (
    <HeaderContainer>
      <NavLink to="/CardBattle/">
        Card<span>Battle</span>
      </NavLink>
      <ul>
        {userFileRef && userFileRef.role === "ADMIN" ? (
          <li>
            <NavLink to="/CardBattle/createCard">
              <Pencil width={22} />
              Criar
            </NavLink>
          </li>
        ) : (
          <></>
        )}
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
              <NavLink to="/CardBattle/auth/register">Cadastrar</NavLink>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink to="/CardBattle/shop">
                <ShoppingBag width={22} />
                Loja
              </NavLink>
            </li>
            <li>
              <button onClick={logOut}>Sair</button>
            </li>
          </>
        )}
      </ul>
    </HeaderContainer>
  );
}
