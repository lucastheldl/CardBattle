import { ReactNode, createContext, useCallback, useState } from "react";

type GameStage = "display" | "deck" | "selecting" | "battle";
type DeckContextType = {
  gameStage: GameStage;
  attacked: boolean;
  changeGameStage: (stage: GameStage) => void;
  changeAttacked: (status: boolean) => void;
};
type DeckContextProviderProps = {
  children: ReactNode;
};

export const GameContext = createContext({} as DeckContextType);

export function GameContextProvider({ children }: DeckContextProviderProps) {
  const [gameStage, setGameStage] = useState<GameStage>("deck");
  const [attacked, setAttacked] = useState(false);

  const changeGameStage = useCallback((newStage: GameStage) => {
    setGameStage(newStage);
  }, []);
  /* function changeGameStage(stage: GameStage) {
    setGameStage(stage);
  } */
  function changeAttacked(status: boolean) {
    setAttacked(status);
  }
  return (
    <GameContext.Provider
      value={{ gameStage, attacked, changeGameStage, changeAttacked }}
    >
      {children}
    </GameContext.Provider>
  );
}
