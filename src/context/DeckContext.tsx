import { ReactNode, createContext, useState } from "react";

interface Card {
  name: string;
  def: number;
  atk: number;
  hp: number;
}

type DeckContextType = {
  addCard: (card: Card) => void;
};
type DeckContextProviderProps = {
  children: ReactNode;
};

export const DeckContext = createContext({} as DeckContextType);

export function DeckContextProvider({ children }: DeckContextProviderProps) {
  const [cards, setCards] = useState<Card[]>([]);

  function addCard(card: Card) {
    setCards((prev) => [...prev, card]);
  }

  return (
    <DeckContext.Provider value={{ addCard }}>{children}</DeckContext.Provider>
  );
}
