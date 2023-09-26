import { useParams } from "react-router-dom";
import { BattleContainer, Container } from "./styles";

import { battleList } from "../../lib/cards";
import { useContext } from "react";
import { DeckContext } from "../../context/DeckContext";
import { Card } from "../../components/Card";

export function Battle() {
  const { id } = useParams();
  const { cardsInDeck } = useContext(DeckContext);

  const battleObject = battleList.find((battle) => battle.id === id);
  return (
    <BattleContainer>
      <img src={battleObject!.image} className="bg" />
      <Container>
        <div className="deck">
          {cardsInDeck &&
            cardsInDeck.map((card, i) => {
              return <Card {...card} key={`${card.id}-${i}`} />;
            })}
        </div>
      </Container>
    </BattleContainer>
  );
}
