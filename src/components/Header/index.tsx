import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { Swords, Inbox } from "lucide-react";

export function Header() {
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
        <li>
          <NavLink to="/CardBattle/auth/register">
            <Inbox width={22} />
            Register
          </NavLink>
        </li>
      </ul>
    </HeaderContainer>
  );
}
