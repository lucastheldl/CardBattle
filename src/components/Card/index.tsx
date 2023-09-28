import { useContext } from "react";
import { CardContainer, CardImageArea, CardInfoArea } from "./styles";
import { GameContext } from "../../context/GameContext";
import { CardContext } from "../../context/CardContext";

interface CardProps {
  id: string;
  name: string;
  img: string;
  characterImg: string;
  def: number;
  atk: number;
  hp: number;
}

export function Card(props: CardProps) {
  const { cardsInDeck, addCardToDeck, removeCardFromDeck, changeSelectedCard } =
    useContext(CardContext);
  const { gameStage } = useContext(GameContext);

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
