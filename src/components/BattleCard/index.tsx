import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
import { BattleCardContainer } from "./styles";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

interface BattleCardProps {
  id: string;
  characterImage: string;
}

export function BattleCard({ id, characterImage }: BattleCardProps) {
  const { cardsInDeck } = useContext(CardContext);

  const { user } = useContext(AuthContext);
  return (
    <BattleCardContainer>
      <img src={characterImage} />
      <strong>Batalha {id}</strong>
      {cardsInDeck.length > 0 ? (
        <NavLink to={`/CardBattle/battles/${id}`}>Lutar</NavLink>
      ) : (
        <>
          {!user ? (
            <NavLink to={`/CardBattle/auth/register`}>
              Registre-se para lutar
            </NavLink>
          ) : (
            <NavLink to={`/CardBattle/deck/`}>Montar Deck</NavLink>
          )}
        </>
      )}
    </BattleCardContainer>
  );
}
