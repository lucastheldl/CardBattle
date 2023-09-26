import { useContext } from "react";
import { CardContainer, CardImageArea, CardInfoArea } from "./styles";
import { DeckContext } from "../../context/DeckContext";

interface CardProps {
  id: string;
  name: string;
  img: string;
  def: number;
  atk: number;
  hp: number;
}

export function Card(props: CardProps) {
  const { cardsInDeck, addCardToDeck, removeCardFromDeck } =
    useContext(DeckContext);

  function handleClick() {
    if (cardsInDeck && cardsInDeck.find((card) => card.id === props.id)) {
      removeCardFromDeck(props.id);
      return;
    }
    if (cardsInDeck.length >= 3) {
      return;
    }
    addCardToDeck(props);
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
