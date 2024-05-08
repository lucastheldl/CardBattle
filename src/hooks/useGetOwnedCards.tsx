import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useCallback, useContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";
import { CardType } from "../lib/cards";

export function useGetOwnedCards() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [ownedCards, setOwnedCards] = useState<CardType[]>([]);

  const fetchOwnedCards = useCallback(async () => {
    setLoading(true);
    try {
      if (!user) {
        return;
      }

      const userDocRef = doc(db, "users", user!.uid);
      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        const ownedCardsIds = userData.ownedCards || [];

        const cardsCollection = collection(db, "cards");
        const queryByCardIds = query(
          cardsCollection,
          where("__name__", "in", ownedCardsIds)
        );

        const querySnapshot = await getDocs(queryByCardIds);

        const cardsData = querySnapshot.docs.map((doc) => {
          const cardData = doc.data();
          return {
            id: doc.id,
            ...cardData,
          } as CardType;
        });
        setOwnedCards(cardsData);
      } else {
        setOwnedCards([]);
      }
    } catch (error) {
      console.error("Error fetching owned cards:", error);
      // Handle the error as needed (e.g., display an error message)
    } finally {
      setLoading(false);
    }
  }, [user]);

  useEffect(() => {
    fetchOwnedCards();
  }, [user, fetchOwnedCards]);

  const reFetchOwnedCards = () => {
    fetchOwnedCards();
  };

  return { ownedCards, loading, reFetchOwnedCards };
}
