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
import { useContext } from "react";
import { CardContext } from "../../context/CardContext";
//type
import { CardType } from "../../lib/cards";

export function StartStore() {
  const { OwnCards, addOwnCard, avaliableCards } = useContext(CardContext);
  const parallax = useParallax({
    translateY: [-30, 35],
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
            <Card {...avaliableCards[1]} />
            <BuyButton
              onClick={() => handleBuy(avaliableCards[1])}
              disabled={
                OwnCards.filter((e) => e.id === avaliableCards[1].id).length > 0
              }
            >
              {OwnCards.filter((e) => e.id === avaliableCards[1].id).length >
              0 ? (
                <>Possui</>
              ) : (
                <>Comprar</>
              )}
            </BuyButton>
          </CardContainer>

          <CardContainer>
            <Card {...avaliableCards[2]} />
            <BuyButton
              onClick={() => handleBuy(avaliableCards[2])}
              disabled={
                OwnCards.filter((e) => e.id === avaliableCards[2].id).length > 0
              }
            >
              {OwnCards.filter((e) => e.id === avaliableCards[2].id).length >
              0 ? (
                <>Possui</>
              ) : (
                <>Comprar</>
              )}
            </BuyButton>
          </CardContainer>

          <CardContainer>
            <Card {...avaliableCards[0]} />
            <BuyButton
              onClick={() => handleBuy(avaliableCards[0])}
              disabled={
                OwnCards.filter((e) => e.id === avaliableCards[0].id).length > 0
              }
            >
              {OwnCards.filter((e) => e.id === avaliableCards[0].id).length >
              0 ? (
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
