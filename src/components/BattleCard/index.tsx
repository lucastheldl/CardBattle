import { BattleCardContainer } from "./styles";
import img from "../../assets/light dragon.jpg";
import { NavLink } from "react-router-dom";

interface BattleCardProps {
  id: string;
}

export function BattleCard({ id }: BattleCardProps) {
  return (
    <BattleCardContainer>
      <img src={img} />
      <strong>Batalha 1</strong>
      <NavLink to={`/CardBattle/battles/${id}`}>Lutar</NavLink>
    </BattleCardContainer>
  );
}
