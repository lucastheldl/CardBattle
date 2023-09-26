import { DeckContainer } from "./styles";
import { cardList } from "../../lib/cards";
import { Card } from "../../components/Card";
import { useContext } from "react";
import { DeckContext } from "../../context/DeckContext";

export function Deck() {
  const { cardsInDeck } = useContext(DeckContext);
  return (
    <DeckContainer>
      <h1>Deck</h1>
      <section className="avaliableCards">
        {cardList.map((card) => {
          return <Card {...card} key={card.id} />;
        })}
      </section>
      <section className="deck">
        {cardsInDeck &&
          cardsInDeck.map((card, i) => {
            return <Card {...card} key={`${card.id}-${i}`} />;
          })}
      </section>
    </DeckContainer>
  );
}
