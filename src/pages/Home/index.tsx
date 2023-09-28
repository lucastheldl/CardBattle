import { useEffect, useContext } from "react";
import { About } from "../../components/About";
import { StartStore } from "../../components/StartStore";
import { HomeContainer } from "./styles";
import { GameContext } from "../../context/GameContext";
import { CardContext } from "../../context/CardContext";

export function Home() {
  const { changeGameStage } = useContext(GameContext);
  const { changeSelectedCard } = useContext(CardContext);

  useEffect(() => {
    changeGameStage("display");
    changeSelectedCard(null);
  }, [changeGameStage]);
  return (
    <HomeContainer>
      <About />
      <StartStore />
    </HomeContainer>
  );
}
