import { useContext } from "react";
import {
  CardContainer,
  CardDescription,
  CardImageArea,
  CardInfoArea,
  CardStats,
} from "./styles";
import { GameContext } from "../../context/GameContext";
import { CardContext } from "../../context/CardContext";

import { CardType } from "../../lib/cards";
import { Cross, Shield, Swords } from "lucide-react";

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
    <CardContainer
      onClick={handleClick}
      rarity={props.rarity}
      notInteractable={props.notInteractable}
    >
      <CardImageArea>
        <img src={props.img} loading="lazy" />
      </CardImageArea>
      <CardInfoArea>
        <strong>{props.name}</strong>
      </CardInfoArea>
      <CardDescription>
        {props.moves &&
          props.moves.map((m) => {
            return (
              <p key={m.name}>
                ✨{m.name} | DMG:{m.damage}
              </p>
            );
          })}
      </CardDescription>
      <CardStats>
        <div className="stat-container">
          <Swords size={15} />
          <p>{`: ${props.atk} |`}</p>
        </div>
        <div className="stat-container">
          <Cross size={15} />
          <p>{`: ${props.hp} |`}</p>
        </div>
        <div className="stat-container">
          <Shield size={15} />
          <p>{`: ${props.def}`}</p>
        </div>
      </CardStats>
    </CardContainer>
  );
}
