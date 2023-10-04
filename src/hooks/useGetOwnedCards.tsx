import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../firebase/config";
import { AuthContext } from "../context/AuthContext";

interface Card {
  id: string;
  name: string;
  img: string;
  characterImg: string;
  def: number;
  atk: number;
  hp: number;
}

export function useGetOwnedCards() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState<boolean>(true);
  const [ownedCards, setOwnedCards] = useState<Card[]>([]);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    async function fetchOwnedCards() {
      try {
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
            } as Card;
          });
          console.log(cardsData);
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
    }

    fetchOwnedCards();
  }, [user]);

  return { ownedCards, loading };
}
