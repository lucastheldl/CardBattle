import { useEffect, useContext } from "react";
import { About } from "../../components/About";
import { StartStore } from "../../components/StartStore";
import { HomeContainer } from "./styles";
import { GameContext } from "../../context/GameContext";

export function Home() {
  const { changeGameStage } = useContext(GameContext);

  useEffect(() => {
    changeGameStage("display");
  }, [changeGameStage]);
  return (
    <HomeContainer>
      <About />
      <StartStore />
    </HomeContainer>
  );
}
