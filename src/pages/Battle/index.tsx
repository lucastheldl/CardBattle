import { useNavigate, useParams } from "react-router-dom";
import {
  AttackBtn,
  AttackOptions,
  BattleContainer,
  Bg,
  CharacterImage,
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
  const [playerHit, setPlayerHit] = useState(0);
  const [enemyAttack, setEnemyAttack] = useState(0);
  const [playerAttack, setPlayerAttack] = useState(0);

  async function reduceHp(atk: number) {
    //ativate player attack anim
    setPlayerAttack(1);
    await new Promise((resolve) => setTimeout(resolve, 500));
    //ativate enemy hit anim
    setHit(1);

    if (currentHp <= atk) {
      setCurrentHp(0);
      await new Promise((resolve) => setTimeout(resolve, 500));
      window.alert("VITÓRIA!");
      navigate("/CardBattle/battles/");

      return;
    }
    setCurrentHp((prev) => (prev -= atk));
    //inform ir player has attacked
    changeAttacked(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));
    reducePlayerHp();
  }

  async function reducePlayerHp() {
    setEnemyAttack(1);
    await new Promise((resolve) => setTimeout(resolve, 500));
    setPlayerHit(1);
    if (currentPlayerHp <= battleObject!.atk) {
      setCurrentPlayerHp(0);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setCurrentDeck(
        currentDeck.filter((card) => card.id !== selectedCard!.id)
      );

      return;
    }
    setPlayerHit(1);
    setCurrentPlayerHp((prev) => (prev -= battleObject!.atk));
    changeAttacked(false);
  }

  //update battle deck
  useEffect(() => {
    if (currentDeck.length > 0) {
      changeSelectedCard(null);
      changeGameStage("selecting");
    } else {
      //se nao
      window.alert("Você foi derrotado!");
      navigate("/CardBattle/battles/");
    }
    // action on update of movies
  }, [currentDeck]);

  //change game stage when start
  useEffect(() => {
    changeGameStage("selecting");
  }, []);

  //update player info when start
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
            onAnimationEnd={() => {
              setHit(0);
              setEnemyAttack(0);
            }}
            enemyattack={enemyAttack}
            hit={hit}
          />
          <LifeBar hpamount={(100 * currentHp) / battleObject!.hp}>
            <div className="bar">
              <p>{battleObject!.name}</p>
            </div>
          </LifeBar>
        </ImageContainer>

        <ImageContainer>
          <CharacterImage
            src={characterCurrentImg}
            onAnimationEnd={() => {
              setPlayerHit(0);
              setPlayerAttack(0);
            }}
            playerattack={playerAttack}
            hit={playerHit}
            className="character"
          />
          {!attacked && selectedCard && (
            <AttackOptions>
              <AttackBtn
                onClick={() => {
                  reduceHp(selectedCard.atk);
                }}
              >
                Atk-1
              </AttackBtn>
              <AttackBtn onClick={() => reduceHp(selectedCard.atk)}>
                Atk-2
              </AttackBtn>
              <AttackBtn onClick={() => reduceHp(selectedCard.atk)}>
                Atk-3
              </AttackBtn>
            </AttackOptions>
          )}
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
        </ImageContainer>
      </Container>
    </BattleContainer>
  );
}
