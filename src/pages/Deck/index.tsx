import { DeckContainer } from "./styles";
import { Card } from "../../components/Card";
import { useContext, useEffect } from "react";
import { CardContext } from "../../context/CardContext";
import { GameContext } from "../../context/GameContext";

export function Deck() {
  const { cardsInDeck, changeSelectedCard, OwnCards /*, avaliableCards */ } =
    useContext(CardContext);
  const { changeGameStage } = useContext(GameContext);

  useEffect(() => {
    changeGameStage("deck");
    changeSelectedCard(null);
  }, [changeGameStage]);

  return (
    <DeckContainer>
      <h1>Montar Deck</h1>
      <p>
        Passe o mouse na parte inferior da tela para ver suas cartas
        selecionadas
      </p>
      <section className="avaliableCards">
        {OwnCards.map((card) => {
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
