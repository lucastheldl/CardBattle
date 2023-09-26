import { BattleCardContainer } from "./styles";
import img from "../../assets/light dragon.jpg";
import { NavLink } from "react-router-dom";

export function BattleCard() {
  return (
    <BattleCardContainer>
      <img src={img} />
      <strong>Batalha 1</strong>
      <NavLink to={"/CardBattle"}>Lutar</NavLink>
    </BattleCardContainer>
  );
}
