import { BattleCardContainer } from "./styles";
import { NavLink } from "react-router-dom";

interface BattleCardProps {
  id: string;
  characterImage: string;
}

export function BattleCard({ id, characterImage }: BattleCardProps) {
  return (
    <BattleCardContainer>
      <img src={characterImage} />
      <strong>Batalha 1</strong>
      <NavLink to={`/CardBattle/battles/${id}`}>Lutar</NavLink>
    </BattleCardContainer>
  );
}
