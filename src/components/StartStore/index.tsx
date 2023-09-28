import {
  BuyButton,
  CardContainer,
  Deck,
  StartStoreContainer,
  StartStoreWrapper,
} from "./styles";
import bg from "../../assets/Damian.jpg";
import { useParallax } from "react-scroll-parallax";
import { Card } from "../Card";
import { cardList } from "../../lib/cards";

export function StartStore() {
  const parallax = useParallax({
    translateY: [-10, 50],
  });

  return (
    <StartStoreWrapper>
      <div className="cover">
        <img src={bg} alt="" ref={parallax.ref} />
      </div>
      <StartStoreContainer>
        <h1>Compre sua primeira carta!</h1>
        <Deck>
          <CardContainer>
            <Card {...cardList[1]} />
            <BuyButton>Comprar</BuyButton>
          </CardContainer>

          <CardContainer>
            <Card {...cardList[2]} />
            <BuyButton>Comprar</BuyButton>
          </CardContainer>

          <CardContainer>
            <Card {...cardList[0]} />
            <BuyButton>Comprar</BuyButton>
          </CardContainer>
        </Deck>
      </StartStoreContainer>
    </StartStoreWrapper>
  );
}
