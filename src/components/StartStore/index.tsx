import { StartStoreContainer, StartStoreWrapper } from "./styles";
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
        <h1>Compre sua primeira carta aqui!</h1>
        <div className="deck">
          <Card {...cardList[1]} />
          <Card {...cardList[2]} />
          <Card {...cardList[0]} />
        </div>
      </StartStoreContainer>
    </StartStoreWrapper>
  );
}
