import { useParams } from "react-router-dom";
import {
  BattleContainer,
  Bg,
  Container,
  Deck,
  EnemyImage,
  ImageContainer,
  LifeBar,
} from "./styles";

import { battleList } from "../../lib/cards";
import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { GameContext } from "../../context/GameContext";
import { CardContext } from "../../context/CardContext";

export function Battle() {
  const { id } = useParams();
  const { cardsInDeck, selectedCard } = useContext(CardContext);
  const { changeGameStage } = useContext(GameContext);

  const battleObject = battleList.find((battle) => battle.id === id);

  const [currentHp, setCurrentHp] = useState(battleObject!.hp);
  const [characterCurrentImg, setCharacterCurrentImg] = useState("");
  const [hit, setHit] = useState(0);

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

  useEffect(() => {
    if (!selectedCard) {
      setCharacterCurrentImg("");
      return;
    }
    console.log(selectedCard);
    setCharacterCurrentImg(selectedCard.characterImg);
  }, [selectedCard]);

  return (
    <BattleContainer>
      <Bg src={battleObject!.scenarioImg} className="bg" />

      <Container>
        <ImageContainer>
          <EnemyImage
            src={battleObject!.characterImg}
            onAnimationEnd={() => setHit(0)}
            hit={hit}
          />
          <LifeBar hpamount={(100 * currentHp) / battleObject!.hp}>
            <div className="bar">
              <p>{battleObject!.name}</p>
            </div>
          </LifeBar>
        </ImageContainer>

        <ImageContainer>
          <img src={characterCurrentImg} className="character" />
          <Deck>
            {cardsInDeck &&
              cardsInDeck.map((card, i) => {
                return <Card {...card} key={`${card.id}-${i}`} />;
              })}
          </Deck>

          <button
            onClick={() => {
              reduceHp(30);
              setHit(1);
            }}
          >
            Atk-1
          </button>
          <button onClick={() => reduceHp(10)}>Atk-2</button>
          <button onClick={() => reduceHp(40)}>Atk-3</button>
        </ImageContainer>
      </Container>
    </BattleContainer>
  );
}
