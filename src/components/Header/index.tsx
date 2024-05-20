import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import {
  Swords,
  Inbox,
  ShoppingBag,
  Pencil,
  LogIn,
  Book,
  LogOut,
} from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

export function Header() {
  const { user, logOut } = useContext(AuthContext);
  const { userFileRef } = useContext(AuthContext);
  return (
    <HeaderContainer>
      <NavLink to="/CardBattle/" className="logo">
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
              <NavLink to="/CardBattle/auth/login">
                <LogIn width={22} />
                Entrar
              </NavLink>
            </li>
            <li>
              <NavLink to="/CardBattle/auth/register">
                <Book width={22} />
                Cadastrar
              </NavLink>
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
              <button onClick={logOut}>
                <LogOut width={22} />
                Sair
              </button>
            </li>
          </>
        )}
      </ul>
    </HeaderContainer>
  );
}
