import {
  Book,
  Inbox,
  LogIn,
  LogOut,
  Pencil,
  ShoppingBag,
  Swords,
  X,
} from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { BurguerMenuContainer } from "./styles";

interface Props {
  state: boolean;
  toggle: () => void;
}

export function BurguerMenu(props: Props) {
  const { user, logOut } = useContext(AuthContext);
  const { userFileRef } = useContext(AuthContext);
  return (
    <BurguerMenuContainer className={"navlinks"} state={props.state}>
      <li>
        <button onClick={props.toggle}>
          <X width={32} />
        </button>
      </li>
      {userFileRef && userFileRef.role === "ADMIN" ? (
        <li className="criate-opt">
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
    </BurguerMenuContainer>
  );
}
