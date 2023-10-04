import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetchAllCards } from "../hooks/useFetchAllCards";
import { useGetOwnedCards } from "../hooks/useGetOwnedCards";

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
  avaliableCards: Card[];
  selectedCard: Card | null;
  addCardToDeck: (card: Card) => void;
  removeCardFromDeck: (id: string) => void;
  changeSelectedCard: (card: Card | null) => void;
  /* addOwnCard: (card: Card) => void; */
};
type CardContextProviderProps = {
  children: ReactNode;
};

export const CardContext = createContext({} as CardContextType);

export function CardContextProvider({ children }: CardContextProviderProps) {
  const [cardsInDeck, setCardsInDeck] = useState<Card[]>([]);
  const [avaliableCards, setavaliableCards] = useState<Card[]>([]);
  const [OwnCards, setOwnCards] = useState<Card[]>([]);
  const [selectedCard, setSelectedCard] = useState<Card | null>(null);
  const { cards } = useFetchAllCards();

  const { ownedCards } = useGetOwnedCards();

  useEffect(() => {
    setavaliableCards(cards);
  }, [cards]);

  useEffect(() => {
    setOwnCards(ownedCards);
  }, [ownedCards]);

  function addCardToDeck(card: Card) {
    setCardsInDeck((prev) => [...prev, card]);
  }
  function removeCardFromDeck(id: string) {
    setCardsInDeck(cardsInDeck.filter((card) => card.id !== id));
  }

  function changeSelectedCard(card: Card | null) {
    setSelectedCard(card);
  }

  /*function addOwnCard(card: Card) {
    setOwnCards((prev) => [...prev, card]);
  }*/

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
