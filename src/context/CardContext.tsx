import { ReactNode, createContext, useEffect, useState } from "react";
import { useFetchAllCards } from "../hooks/useFetchAllCards";
import { useGetOwnedCards } from "../hooks/useGetOwnedCards";
import { CardType } from "../lib/cards";

type CardContextType = {
  cardsInDeck: CardType[];
  OwnCards: CardType[];
  avaliableCards: CardType[];
  selectedCard: CardType | null;
  addCardToDeck: (card: CardType) => void;
  removeCardFromDeck: (id: string) => void;
  changeSelectedCard: (card: CardType | null) => void;
  /* addOwnCard: (card: Card) => void; */
};
type CardContextProviderProps = {
  children: ReactNode;
};

export const CardContext = createContext({} as CardContextType);

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cardsInDeck, setCardsInDeck] = useState<CardType[]>([]);
  const [avaliableCards, setavaliableCards] = useState<CardType[]>([]);
  const [OwnCards, setOwnCards] = useState<CardType[]>([]);
  const [selectedCard, setSelectedCard] = useState<CardType | null>(null);
  const { cards } = useFetchAllCards();

  const { ownedCards } = useGetOwnedCards();

  useEffect(() => {
    setavaliableCards(cards);
  }, [cards]);

  useEffect(() => {
    setOwnCards(ownedCards);
  }, [ownedCards]);

  function addCardToDeck(card: CardType) {
    setCardsInDeck((prev) => [...prev, card]);
  }
  function removeCardFromDeck(id: string) {
    setCardsInDeck(cardsInDeck.filter((card) => card.id !== id));
  }

  function changeSelectedCard(card: CardType | null) {
    setSelectedCard(card);
  }

  //function updateOwnedCards() {}

  return (
    <CardContext.Provider
      value={{
        cardsInDeck,
        OwnCards,
        avaliableCards,
        selectedCard,
        addCardToDeck,
        removeCardFromDeck,
        changeSelectedCard,
        /* addOwnCard, */
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
