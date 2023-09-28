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
import { useContext, useEffect } from "react";
import { CardContext } from "../../context/CardContext";

export function StartStore() {
  const { OwnCards } = useContext(CardContext);
  const parallax = useParallax({
    translateY: [-10, 50],
  });

  console.log(OwnCards.filter((e) => e.id === cardList[1].id).length > 0);
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
