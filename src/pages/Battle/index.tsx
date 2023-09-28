import { useNavigate, useParams } from "react-router-dom";
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
  const { cardsInDeck, selectedCard, changeSelectedCard } =
    useContext(CardContext);
  const { gameStage, attacked, changeGameStage, changeAttacked } =
    useContext(GameContext);

  const navigate = useNavigate();
  const battleObject = battleList.find((battle) => battle.id === id);

  const [currentHp, setCurrentHp] = useState(battleObject!.hp);
  const [currentPlayerHp, setCurrentPlayerHp] = useState(0);
  const [characterCurrentImg, setCharacterCurrentImg] = useState("");
  const [currentDeck, setCurrentDeck] = useState(cardsInDeck);
  const [hit, setHit] = useState(0);

  async function reduceHp(atk: number) {
    if (currentHp <= atk) {
      setCurrentHp(0);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      window.alert("VITÓRIA!");

      return;
    }
    setCurrentHp((prev) => (prev -= atk));
    changeAttacked(true);
    //console.log(`Causou:${atk} de dano`);

    await new Promise((resolve) => setTimeout(resolve, 2000));
    reducePlayerHp();
  }

  async function reducePlayerHp() {
    if (currentPlayerHp <= battleObject!.atk) {
      setCurrentPlayerHp(0);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCurrentDeck(
        currentDeck.filter((card) => card.id !== selectedCard!.id)
      );
      console.log(currentDeck);
      //se ainda houver cartas pra pegar

      return;
    }
    setCurrentPlayerHp((prev) => (prev -= battleObject!.atk));
    changeAttacked(false);
    //console.log(`Recebeu:${battleObject!.atk} de dano`);
  }
  useEffect(() => {
    if (currentDeck.length > 0) {
      changeSelectedCard(null);
      changeGameStage("selecting");
    } else {
      //se nao
      window.alert("Você foi derrotado!");
      navigate("/CardBattle/");
    }
    // action on update of movies
  }, [currentDeck]);

  useEffect(() => {
    changeGameStage("selecting");
  }, []);

  useEffect(() => {
    if (!selectedCard) {
      setCharacterCurrentImg("");
      return;
    }
    setCurrentPlayerHp(selectedCard.hp);
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
          {selectedCard && (
            <LifeBar hpamount={(100 * currentPlayerHp) / selectedCard.hp}>
              <div className="bar">
                <p>{selectedCard.name}</p>
              </div>
            </LifeBar>
          )}
          <Deck gamestate={gameStage}>
            {currentDeck &&
              currentDeck.map((card, i) => {
                return <Card {...card} key={`${card.id}-${i}`} />;
              })}
          </Deck>

          {!attacked && (
            <>
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
            </>
          )}
        </ImageContainer>
      </Container>
    </BattleContainer>
  );
}
