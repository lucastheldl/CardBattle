import { DeckContainer } from "./styles";
import { cardList } from "../../lib/cards";
import { Card } from "../../components/Card";

export function Deck() {
  return (
    <DeckContainer>
      <h1>Deck</h1>
      <section className="avaliableCards">
        {cardList.map((card) => {
          return <Card img={card.img} name={card.name} />;
        })}
      </section>
      <section className="deck"></section>
    </DeckContainer>
  );
}
