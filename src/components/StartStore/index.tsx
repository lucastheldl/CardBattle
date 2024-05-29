import {
  BuyButton,
  CardContainer,
  Cover,
  Deck,
  StartStoreContainer,
  StartStoreWrapper,
} from "./styles";
import bg from "../../assets/Damian.jpg";
import { useParallax } from "react-scroll-parallax";
import { Card } from "../Card";
import { useContext, useState } from "react";
import { CardContext } from "../../context/CardContext";
//type
import { CardType } from "../../lib/cards";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { AuthContext } from "../../context/AuthContext";

export function StartStore() {
  const { OwnCards, updateOwnedCards, avaliableCards } =
    useContext(CardContext);
  const { user } = useContext(AuthContext);
  const parallax = useParallax({
    translateY: [-30, 35],
  });
  const [isLoading, setIsLoading] = useState(false);

  const inDisplayCardIds: string[] = [
    "Arthemia",
    "Hallowen Hound",
    "Captão Elister",
  ];
  const inDisplayCards = avaliableCards.filter((c) =>
    inDisplayCardIds.includes(c.name)
  );

  async function handleBuy(card: CardType) {
    //addOwnCard(card);
    if (!user) {
      window.alert("Por favor, crie uma conta ou registre-se para jogar!");
      return;
    }
    setIsLoading(true);
    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      await updateDoc(userDocRef, {
        ownedCards: arrayUnion(card.id),
      });
    } else {
      await setDoc(userDocRef, {
        ownedCards: [card.id],
      });
    }
    updateOwnedCards();
    setIsLoading(false);
  }

  return (
    <StartStoreWrapper>
      <Cover>
        {/*@ts-ignore*/}
        <img src={bg} alt="" ref={parallax.ref} />
      </Cover>

      <StartStoreContainer>
        <h1>Compre sua primeira carta Grátis!</h1>
        <Deck>
          {avaliableCards ? (
            <>
              <CardContainer>
                <Card {...inDisplayCards[1]} />
                <BuyButton
                  onClick={() => handleBuy(inDisplayCards[1])}
                  disabled={
                    OwnCards.filter((e) => e.id === inDisplayCards[1].id)
                      .length > 0 || !user
                  }
                >
                  {OwnCards.filter((e) => e.id === inDisplayCards[1].id)
                    .length > 0 ? (
                    <>Possui</>
                  ) : isLoading ? (
                    <>Carregando...</>
                  ) : (
                    <>Comprar</>
                  )}
                </BuyButton>
              </CardContainer>

              <CardContainer>
                <Card {...inDisplayCards[2]} />
                <BuyButton
                  onClick={() => handleBuy(inDisplayCards[2])}
                  disabled={
                    OwnCards.filter((e) => e.id === inDisplayCards[2].id)
                      .length > 0 || !user
                  }
                >
                  {OwnCards.filter((e) => e.id === inDisplayCards[2].id)
                    .length > 0 ? (
                    <>Possui</>
                  ) : isLoading ? (
                    <>Carregando...</>
                  ) : (
                    <>Comprar</>
                  )}
                </BuyButton>
              </CardContainer>

              <CardContainer>
                <Card {...inDisplayCards[0]} />
                <BuyButton
                  onClick={() => handleBuy(inDisplayCards[0])}
                  disabled={
                    OwnCards.filter((e) => e.id === inDisplayCards[0].id)
                      .length > 0 || !user
                  }
                >
                  {OwnCards.filter((e) => e.id === inDisplayCards[0].id)
                    .length > 0 ? (
                    <>Possui</>
                  ) : isLoading ? (
                    <>Carregando...</>
                  ) : (
                    <>Comprar</>
                  )}
                </BuyButton>
              </CardContainer>
            </>
          ) : (
            <p>Carregando...</p>
          )}
        </Deck>
      </StartStoreContainer>
    </StartStoreWrapper>
  );
}
