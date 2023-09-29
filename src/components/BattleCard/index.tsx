import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import { BattleCardContainer } from "./styles";
import { NavLink } from "react-router-dom";

interface BattleCardProps {
  id: string;
  characterImage: string;
}

export function BattleCard({ id, characterImage }: BattleCardProps) {
  const { cardsInDeck } = useContext(CardContext);
  return (
    <BattleCardContainer>
      <img src={characterImage} />
      <strong>Batalha {id}</strong>
      {cardsInDeck.length > 0 ? (
        <NavLink to={`/CardBattle/battles/${id}`}>Lutar</NavLink>
      ) : (
        <NavLink to={`/CardBattle/deck/`}>Montar Deck</NavLink>
      )}
    </BattleCardContainer>
  );
}
