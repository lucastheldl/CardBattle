import { useState } from "react";
import { Booster } from "../../components/Booster";
import { boosterList, Boostertype, CardType } from "../../lib/cards";
import {
  ModalContainer,
  ModalContent,
  ModalHeader,
  ShopContainer,
} from "./styles";
import { DefaultBtn } from "../../styles/global";
import { Card } from "../../components/Card";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { X } from "lucide-react";

export function Shop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardBought, setCardBought] = useState<CardType | null>(null);
  const [currentBooster, setIsCurrentBooster] = useState<Boostertype | null>(
    null
  );
  const [currentState, setIsCurrentState] = useState<"IDLE" | "DISPLAYING">(
    "IDLE"
  );

  function handleToggleModal(booster: Boostertype | null) {
    setIsModalOpen((prevstate) => !prevstate);
    setIsCurrentBooster(booster);
    setIsCurrentState("IDLE");
  }
  async function buyRandomCard(booster: Boostertype) {
    const randomIndex = Math.floor(
      Math.random() * currentBooster!.cards.length
    );

    const docRef = doc(db, "cards", booster.cards[randomIndex]);
    const docSnap = await getDoc(docRef);

    const card = docSnap.data() as CardType;

    setIsCurrentState("DISPLAYING");
    setCardBought(card);
  }
  function returnToBooster() {
    setIsCurrentState("IDLE");
    setCardBought(null);
  }
  return (
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
      <ModalContainer state={isModalOpen}>
        <ModalContent state={currentState}>
          <ModalHeader>
            <h3>Pontos: 2000⁋</h3>
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
    </ShopContainer>
  );
}
