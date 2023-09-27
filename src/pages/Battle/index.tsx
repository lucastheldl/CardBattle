import { useParams } from "react-router-dom";
import { BattleContainer, Container } from "./styles";

import { battleList } from "../../lib/cards";
import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { GameContext } from "../../context/GameContext";
import { CardContext } from "../../context/CardContext";

export function Battle() {
  const { id } = useParams();
  const { cardsInDeck } = useContext(CardContext);
  const { changeGameStage } = useContext(GameContext);

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

  useEffect(() => {
    changeGameStage("selecting");
  }, [changeGameStage]);

  return (
    <BattleContainer>
      <img src={battleObject!.scenarioImg} className="bg" />

      <Container hpamount={(100 * currentHp) / battleObject!.hp}>
        <div className="imageContainer">
          <img src={battleObject!.characterImg} className="enemy" />
          <div className="lifebar">
            <div className="bar">{battleObject!.name}</div>
          </div>
        </div>
        <div>
          <div className="deck">
            {cardsInDeck &&
              cardsInDeck.map((card, i) => {
                return <Card {...card} key={`${card.id}-${i}`} />;
              })}
          </div>
          <img src={""} className="character" />
          <button onClick={() => reduceHp(30)}>Atk-1</button>
          <button onClick={() => reduceHp(10)}>Atk-2</button>
          <button onClick={() => reduceHp(40)}>Atk-3</button>
        </div>
      </Container>
    </BattleContainer>
  );
}
