import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useFetchAllCards } from "../hooks/useFetchAllCards";
import { useGetOwnedCards } from "../hooks/useGetOwnedCards";
import { CardType } from "../lib/cards";
import { AuthContext } from "./AuthContext";

type CardContextType = {
  cardsInDeck: CardType[];
  OwnCards: CardType[];
  avaliableCards: CardType[];
  selectedCard: CardType | null;
  addCardToDeck: (card: CardType) => void;
  removeCardFromDeck: (id: string) => void;
  changeSelectedCard: (card: CardType | null) => void;
  updateOwnedCards: () => void;
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

  const { user } = useContext(AuthContext);
  const { cards } = useFetchAllCards();
  const { ownedCards, reFetchOwnedCards } = useGetOwnedCards();

  useEffect(() => {
    if (user) {
      updateOwnedCards();
    }
  }, [user]);

  useEffect(() => {
    setavaliableCards(cards);
  }, [cards]);

  useEffect(() => {
    setOwnCards(ownedCards);
    console.log("A lista de cartas possuídas foi atualizada:", ownedCards);
  }, [ownedCards]);

  function addCardToDeck(card: CardType) {
    setCardsInDeck((prev) => [...prev, card]);
  }
  function removeCardFromDeck(id: string) {
    setCardsInDeck(cardsInDeck.filter((card) => card.id !== id));
  }
  const changeSelectedCard = useCallback((card: CardType | null) => {
    setSelectedCard(card);
  }, []);

  /* function changeSelectedCard(card: CardType | null) {
    setSelectedCard(card);
  } */

  function updateOwnedCards() {
    reFetchOwnedCards();
  }

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
        updateOwnedCards,
        /* addOwnCard, */
      }}
    >
      {children}
    </CardContext.Provider>
  );
}
