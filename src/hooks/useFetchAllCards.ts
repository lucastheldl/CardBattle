import { useEffect, useState } from "react";
import { db } from "../firebase/config";
import { collection, getDocs } from "firebase/firestore";

interface Card {
  id: string;
  name: string;
  img: string;
  characterImg: string;
  def: number;
  atk: number;
  hp: number;
}

export function useFetchAllCards() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    async function getCards() {
      const cardsCol = collection(db, "cards");
      const cardsSnapshot = await getDocs(cardsCol);
      const cardsData = cardsSnapshot.docs.map((doc) => {
        const cardData = doc.data();
        return {
          id: doc.id,
          ...cardData,
        } as Card;
      });
      setCards(cardsData);
    }
    getCards();
  }, []);

  return { cards };
}
