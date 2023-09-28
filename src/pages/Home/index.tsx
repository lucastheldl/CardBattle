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
      <h1>Home</h1>
      <About />
      <StartStore />
    </HomeContainer>
  );
}
