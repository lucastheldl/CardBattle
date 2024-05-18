import { useContext, useState } from "react";
import { Booster } from "../../components/Booster";
import { boosterList, Boostertype, CardType } from "../../lib/cards";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ShopContainer,
  ShopWrapper,
} from "./styles";
import { DefaultBtn } from "../../styles/global";
import { Card } from "../../components/Card";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { ShoppingBag, X } from "lucide-react";
import { CardContext } from "../../context/CardContext";
import { AuthContext } from "../../context/AuthContext";

export function Shop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardBought, setCardBought] = useState<CardType | null>(null);
  const [currentBooster, setIsCurrentBooster] = useState<Boostertype | null>(
    null
  );
  const [currentState, setIsCurrentState] = useState<"IDLE" | "DISPLAYING">(
    "IDLE"
  );

  const { updateOwnedCards } = useContext(CardContext);
  const { user, userFileRef } = useContext(AuthContext);

  function handleToggleModal(booster: Boostertype | null) {
    setIsModalOpen((prevstate) => !prevstate);
    setIsCurrentBooster(booster);
    setIsCurrentState("IDLE");
  }
  async function buyRandomCard(booster: Boostertype) {
    if (!user || !userFileRef) {
      return;
    }

    if (userFileRef.money < booster.cost) {
      return window.alert("Pontos insuficientes!");
    }
    const randomIndex = Math.floor(
      Math.random() * currentBooster!.cards.length
    );

    const docRef = doc(db, "cards", booster.cards[randomIndex]);
    const docSnap = await getDoc(docRef);

    const card = docSnap.data() as CardType;
    const cardId = docSnap.id;

    //set card on db

    const userDocRef = doc(db, "users", user!.uid);

    const userDocSnapshot = await getDoc(userDocRef);

    if (userDocSnapshot.exists()) {
      const newMoneyAmount = (userFileRef.money -= booster.cost);

      await updateDoc(userDocRef, {
        ownedCards: arrayUnion(cardId),
        money: newMoneyAmount,
      });
    } else {
      await setDoc(userDocRef, {
        ownedCards: [cardId],
      });
    }
    updateOwnedCards();

    setIsCurrentState("DISPLAYING");
    setCardBought(card);
  }
  function returnToBooster() {
    setIsCurrentState("IDLE");
    setCardBought(null);
  }
  return (
    <ShopWrapper>
      <h1>
        <ShoppingBag size={30} /> Compre pacotes para receber uma carta
        aleátoria
      </h1>
      <ShopContainer>
        {boosterList.map((b) => {
          return (
            <Booster
              key={b.id}
              img={b.img}
              name={b.name}
              handleToggleModal={() => handleToggleModal(b)}
            />
          );
        })}
      </ShopContainer>
      <ModalContainer state={isModalOpen}>
        <ModalContent state={currentState}>
          <ModalHeader>
            <h3>Pontos: {userFileRef?.money}⁋</h3>
            <button onClick={() => handleToggleModal(null)} title="Fechar">
              <X size={30} />
            </button>
          </ModalHeader>
          {isModalOpen && (
            <>
              <div className="boosterArea">
                <img src={currentBooster!.img} width={180} height={350} />
              </div>
              <div className="cardArea">
                {cardBought && (
                  <>
                    <Card {...cardBought} />
                  </>
                )}
              </div>
              <DefaultBtn
                onClick={
                  currentState === "IDLE"
                    ? () => buyRandomCard(currentBooster!)
                    : returnToBooster
                }
              >
                {currentState === "IDLE"
                  ? `Comprar: ${currentBooster!.cost}⁋`
                  : "Continuar"}
              </DefaultBtn>
            </>
          )}
        </ModalContent>
      </ModalContainer>
    </ShopWrapper>
  );
}
