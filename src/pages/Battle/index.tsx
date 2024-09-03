import { useNavigate, useParams } from "react-router-dom";
import {
  AttackBtn,
  AttackOptions,
  BattleContainer,
  Bg,
  CharacterImage,
  CharacterImageContainer,
  Container,
  Deck,
  EnemyImage,
  LifeBar,
} from "./styles";

import { battleList } from "../../lib/cards";
import { useContext, useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { GameContext } from "../../context/GameContext";
import { CardContext } from "../../context/CardContext";
import { AuthContext } from "../../context/AuthContext";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

interface Moves {
  name: string;
  cooldown: number;
  defauldCooldown: number;
  damage: number;
}

export function Battle() {
  const { id } = useParams();
  const { cardsInDeck, selectedCard, changeSelectedCard } =
    useContext(CardContext);
  const { gameStage, attacked, changeGameStage, changeAttacked } =
    useContext(GameContext);

  const { user, userFileRef } = useContext(AuthContext);

  const navigate = useNavigate();
  const battleObject = battleList.find((battle) => battle.id === id)!;

  const [currentHp, setCurrentHp] = useState(battleObject!.hp);
  const [currentPlayerHp, setCurrentPlayerHp] = useState(0);
  const [currentMoves, setCurrentMoves] = useState<Moves[] | []>([]);
  const [characterCurrentImg, setCharacterCurrentImg] = useState("");
  const [currentDeck, setCurrentDeck] = useState(cardsInDeck);
  const [hit, setHit] = useState(0);
  const [playerHit, setPlayerHit] = useState(0);
  const [enemyAttack, setEnemyAttack] = useState(0);
  const [playerAttack, setPlayerAttack] = useState(0);

  //reduces enemy HP then makes enemy attack back
  async function reduceHp(atk: number) {
    //ativate player attack anim
    setPlayerAttack(1);
    await new Promise((resolve) => setTimeout(resolve, 500));
    //ativate enemy hit anim
    setHit(1);

    if (currentHp <= atk) {
      setCurrentHp(0);
      await new Promise((resolve) => setTimeout(resolve, 500));
      window.alert("*VITÓRIA!*");
      window.alert(`Recompoensa recebida: ${battleObject?.reward}⁋`);
      //Add reward
      const userDocRef = doc(db, "users", user!.uid);

      const userDocSnapshot = await getDoc(userDocRef);

      if (userDocSnapshot.exists() && userFileRef) {
        const newMoneyAmount = (userFileRef.money += battleObject?.reward);

        await updateDoc(userDocRef, {
          money: newMoneyAmount,
        });
      }
      //reward
      navigate("/CardBattle/battles/");

      return;
    }
    setCurrentHp((prev) => (prev -= atk));
    //inform ir player has attacked
    changeAttacked(true);

    await new Promise((resolve) => setTimeout(resolve, 3000));
    reducePlayerHp();
    reduceMovesCooldown();
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

  function reduceMovesCooldown() {
    console.log(currentMoves);
    setCurrentMoves(
      currentMoves.map((m) => ({ ...m, cooldown: m.cooldown - 1 }))
    );
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
    // action on update of moves
  }, [currentDeck, changeGameStage, navigate, changeSelectedCard]);

  //change game stage when start
  useEffect(() => {
    changeGameStage("selecting");
  }, [changeGameStage]);

  //update player info when start
  useEffect(() => {
    if (!selectedCard) {
      setCharacterCurrentImg("");
      return;
    }
    setCurrentPlayerHp(selectedCard.hp);
    setCharacterCurrentImg(selectedCard.characterImg);
    setCurrentMoves(
      selectedCard.moves!.map((m) => ({ ...m, defauldCooldown: m.cooldown }))
    );
  }, [selectedCard]);

  return (
    <BattleContainer>
      <Bg src={battleObject!.scenarioImg} className="bg" />

      <Container>
        <CharacterImageContainer>
          <EnemyImage
            src={battleObject!.characterImg}
            onAnimationEnd={() => {
              setHit(0);
              setEnemyAttack(0);
            }}
            enemyattack={enemyAttack}
            hit={hit}
            className="character"
          />
          <Card {...battleObject} rarity={"COMMON"} notInteractable={true} />
          <LifeBar hpamount={(100 * currentHp) / battleObject!.hp}>
            <p>{battleObject!.name}</p>
            <div className="bar"></div>
          </LifeBar>
        </CharacterImageContainer>

        <CharacterImageContainer>
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
          {selectedCard && (
            <Card
              {...selectedCard}
              rarity={selectedCard.rarity}
              notInteractable={true}
            />
          )}
          {/*Handle card attack options */}
          {!attacked && selectedCard && (
            <AttackOptions>
              <AttackBtn
                onClick={() => {
                  reduceHp(selectedCard.atk);
                }}
                cooldown={0}
              >
                Ataque básico
                <div className="slider" />
              </AttackBtn>
              {currentMoves.map((c) => {
                return (
                  <AttackBtn
                    onClick={() => reduceHp(c.damage)}
                    disabled={c.cooldown > 0}
                    key={c.name}
                    cooldown={(c.cooldown * 100) / c.defauldCooldown}
                  >
                    {c.name}
                    <div className="slider" />
                  </AttackBtn>
                );
              })}
            </AttackOptions>
          )}
          {/*Handle card Lifebar */}
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
        </CharacterImageContainer>
      </Container>
    </BattleContainer>
  );
}
