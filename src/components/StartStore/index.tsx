import {
  BuyButton,
  CardContainer,
  Cover,
  Deck,
  StartStoreContainer,
  StartStoreWrapper,
} from "./styles";
import bg from "../../assets/Damian.jpg";
import { useParallax } from "react-scroll-parallax";
import { Card } from "../Card";
import { cardList } from "../../lib/cards";
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
//type
import { CardType } from "../../lib/cards";

export function StartStore() {
  const { OwnCards, addOwnCard } = useContext(CardContext);
  const parallax = useParallax({
    translateY: [-10, 50],
  });

  function handleBuy(card: CardType) {
    addOwnCard(card);
  }

  return (
    <StartStoreWrapper>
      <Cover>
        <img src={bg} alt="" ref={parallax.ref} />
      </Cover>

      <StartStoreContainer>
        <h1>Compre sua primeira carta!</h1>
        <Deck>
          <CardContainer>
            <Card {...cardList[1]} />
            <BuyButton
              onClick={() => handleBuy(cardList[1])}
              disabled={
                OwnCards.filter((e) => e.id === cardList[1].id).length > 0
              }
            >
              {OwnCards.filter((e) => e.id === cardList[1].id).length > 0 ? (
                <>Possui</>
              ) : (
                <>Comprar</>
              )}
            </BuyButton>
          </CardContainer>

          <CardContainer>
            <Card {...cardList[2]} />
            <BuyButton
              onClick={() => handleBuy(cardList[2])}
              disabled={
                OwnCards.filter((e) => e.id === cardList[2].id).length > 0
              }
            >
              {OwnCards.filter((e) => e.id === cardList[2].id).length > 0 ? (
                <>Possui</>
              ) : (
                <>Comprar</>
              )}
            </BuyButton>
          </CardContainer>

          <CardContainer>
            <Card {...cardList[0]} />
            <BuyButton
              onClick={() => handleBuy(cardList[0])}
              disabled={
                OwnCards.filter((e) => e.id === cardList[0].id).length > 0
              }
            >
              {OwnCards.filter((e) => e.id === cardList[0].id).length > 0 ? (
                <>Possui</>
              ) : (
                <>Comprar</>
              )}
            </BuyButton>
          </CardContainer>
        </Deck>
      </StartStoreContainer>
    </StartStoreWrapper>
  );
}
