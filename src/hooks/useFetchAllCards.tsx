import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";
import { CardType } from "../lib/cards";

export function useFetchAllCards() {
  const [cards, setCards] = useState<CardType[]>([]);

  useEffect(() => {
    async function getCards() {
      const cardsCol = collection(db, "cards");
      const cardsSnapshot = await getDocs(cardsCol);
      const cardsData = cardsSnapshot.docs.map((doc) => {
        const cardData = doc.data();
        return {
          id: doc.id,
          ...cardData,
        } as CardType;
      });
      setCards(cardsData);
    }
    getCards();
  }, []);

  return { cards };
}
