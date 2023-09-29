import { ReactNode, createContext, useState } from "react";

interface Card {
  id: string;
  name: string;
  img: string;
  characterImg: string;
  def: number;
  atk: number;
  hp: number;
}

type CardContextType = {
  cardsInDeck: Card[];
  OwnCards: Card[];
  selectedCard: Card | null;
  addCardToDeck: (card: Card) => void;
  removeCardFromDeck: (id: string) => void;
  changeSelectedCard: (card: Card | null) => void;
  addOwnCard: (card: Card) => void;
};
type CardContextProviderProps = {
  children: ReactNode;
};

export const CardContext = createContext({} as CardContextType);

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cardsInDeck, setCardsInDeck] = useState<Card[]>([]);
  const [OwnCards, setOwnCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);

  function addCardToDeck(card: Card) {
    setCardsInDeck((prev) => [...prev, card]);
  }
  function removeCardFromDeck(id: string) {
    setCardsInDeck(cardsInDeck.filter((card) => card.id !== id));
  }

  function changeSelectedCard(card: Card | null) {
    setSelectedCard(card);
  }

  function addOwnCard(card: Card) {
    setOwnCards((prev) => [...prev, card]);
  }

  return (
    <CardContext.Provider
      value={{
        cardsInDeck,
        OwnCards,
        selectedCard,
        addCardToDeck,
        removeCardFromDeck,
        changeSelectedCard,
        addOwnCard,
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
