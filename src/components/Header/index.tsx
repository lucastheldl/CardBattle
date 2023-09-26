import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/CardBattle/">Card Battle</NavLink>
      <ul>
        <li>
          <NavLink to="/CardBattle/battles">Battles</NavLink>
        </li>
        <li>
          <NavLink to="/CardBattle/deck">Deck</NavLink>
        </li>
      </ul>
    </HeaderContainer>
  );
}
