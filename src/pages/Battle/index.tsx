import { useParams } from "react-router-dom";
import { BattleContainer, Container } from "./styles";

import { battleList } from "../../lib/cards";
import { useContext, useState } from "react";
import { DeckContext } from "../../context/DeckContext";
import { Card } from "../../components/Card";

export function Battle() {
  const { id } = useParams();
  const { cardsInDeck } = useContext(DeckContext);

  const battleObject = battleList.find((battle) => battle.id === id);
  const [currentHp, setCurrentHp] = useState(battleObject!.hp);

  async function reduceHp(atk: number) {
    if (currentHp <= atk) {
      setCurrentHp(0);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("VITORIA");
      return;
    }
    setCurrentHp((prev) => (prev -= 50));
    console.log(`Causou:${atk} de dano`);
  }
  return (
    <BattleContainer>
      <img src={battleObject!.scenarioImg} className="bg" />

      <Container hpamount={(100 * currentHp) / battleObject!.hp}>
        <div className="imageContainer">
          <img src={battleObject!.characterImg} className="enemy" />
          <div className="lifebar">
            <div className="bar">{battleObject!.name}</div>
          </div>
          <button onClick={() => reduceHp(30)}>Reduzir</button>
        </div>

        <div className="deck">
          {cardsInDeck &&
            cardsInDeck.map((card, i) => {
              return <Card {...card} key={`${card.id}-${i}`} />;
            })}
        </div>
      </Container>
    </BattleContainer>
  );
}
