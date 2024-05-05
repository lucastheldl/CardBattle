import { useContext } from "react";
import { CardContainer, CardImageArea, CardInfoArea } from "./styles";
import { GameContext } from "../../context/GameContext";
import { CardContext } from "../../context/CardContext";

import { CardType } from "../../lib/cards";

export function Card(props: CardType) {
  const { cardsInDeck, addCardToDeck, removeCardFromDeck, changeSelectedCard } =
    useContext(CardContext);
  const { gameStage, changeGameStage, changeAttacked } =
    useContext(GameContext);

  function handleClick() {
    switch (gameStage) {
      case "deck":
        manageDeck();
        break;
      case "selecting":
        selectCard();
        break;
      case "display":
        return;
      default:
        break;
    }
  }
  function manageDeck() {
    if (cardsInDeck && cardsInDeck.find((card) => card.id === props.id)) {
      removeCardFromDeck(props.id);
      return;
    }
    if (cardsInDeck.length >= 3) {
      return;
    }
    addCardToDeck(props);
  }

  function selectCard() {
    changeSelectedCard(props);
    changeGameStage("battle");
    changeAttacked(false);
  }

  return (
    <CardContainer onClick={handleClick}>
      <CardImageArea>
        <img src={props.img} />
      </CardImageArea>
      <CardInfoArea>
        <strong>{props.name}</strong>
      </CardInfoArea>
    </CardContainer>
  );
}
