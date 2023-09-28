import { ReactNode, createContext, useState } from "react";

type GameStage = "display" | "deck" | "selecting" | "battle";
type DeckContextType = {
  gameStage: GameStage;
  changeGameStage: (stage: GameStage) => void;
};
type DeckContextProviderProps = {
  children: ReactNode;
};

export const GameContext = createContext({} as DeckContextType);

export function GameContextProvider({ children }: DeckContextProviderProps) {
  const [gameStage, setGameStage] = useState<GameStage>("deck");

  function changeGameStage(stage: GameStage) {
    setGameStage(stage);
  }
  return (
    <GameContext.Provider value={{ gameStage, changeGameStage }}>
      {children}
    </GameContext.Provider>
  );
}
