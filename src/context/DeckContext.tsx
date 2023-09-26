import { ReactNode, createContext, useState } from "react";

interface Card {
  id: string;
  name: string;
  img: string;
  def: number;
  atk: number;
  hp: number;
}

type DeckContextType = {
  cardsInDeck: Card[];
  addCardToDeck: (card: Card) => void;
  removeCardFromDeck: (id: string) => void;
};
type DeckContextProviderProps = {
  children: ReactNode;
};

export const DeckContext = createContext({} as DeckContextType);

export function DeckContextProvider({ children }: DeckContextProviderProps) {
  const [cardsInDeck, setCardsInDeck] = useState<Card[]>([]);

  function addCardToDeck(card: Card) {
    setCardsInDeck((prev) => [...prev, card]);
  }
  function removeCardFromDeck(id: string) {
    setCardsInDeck(cardsInDeck.filter((card) => card.id !== id));
  }

  return (
    <DeckContext.Provider
      value={{ cardsInDeck, addCardToDeck, removeCardFromDeck }}
    >
      {children}
    </DeckContext.Provider>
  );
}
