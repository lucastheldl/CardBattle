import { css, styled } from "styled-components";

export const BattleContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  overflow-x: clip;

  width: 100%;
`;
export const Bg = styled.img`
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  z-index: -10;

  filter: blur(3px);
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1300px;

  margin: 0 auto;
`;
interface DeckProps {
  gamestate: "display" | "deck" | "selecting" | "battle";
}
export const Deck = styled.div<DeckProps>`
  position: absolute;
  bottom: 0;
  left: -250px;
  display: flex;
  gap: 0.5rem;
  height: 300px;
  width: 550px;

  padding: 1rem;
  background-color: ${(props) => props.theme["red-500"]};
  border-radius: 6px;

  transition: 1s all;

  ${(props) =>
    props.gamestate === "battle" &&
    css`
      transform: translateX(100%);
      opacity: 0;
    `}
`;

export const CharacterImageContainer = styled.div`
  position: relative;
  min-height: 600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

interface ContainerProps {
  hpamount: number;
}

export const LifeBar = styled.div<ContainerProps>`
  width: 500px;
  height: 20px;

  position: absolute;
  top: 430px;
  left: -50%;

  border: 1px solid ${(props) => props.theme["gray-900"]};
  border-radius: 6px;
  overflow: hidden;

  background-color: ${(props) => props.theme["gray-900"]};
  p {
    font-weight: bold;
    color: ${(props) => props.theme["gray-100"]};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .bar {
    display: flex;
    justify-content: center;

    width: ${(props) => props.hpamount}%;
    height: 100%;
    background-color: ${(props) => props.theme["red-500"]};
  }
`;

interface EnemyImageProps {
  hit: number;
  enemyattack: number;
}
export const EnemyImage = styled.img<EnemyImageProps>`
  width: 500px;
  position: absolute;
  top: -50px;
  right: -30%;

  ${(props) =>
    props.hit <= 0
      ? css`
          animation: MoveUpDown 4s cubic-bezier(0.62, 0.67, 0.67, 1.05) infinite;
        `
      : css`
          animation: GetHit 0.2s cubic-bezier(0.62, 0.67, 0.67, 1.05) 1;
          filter: grayscale(100%);
        `}

  ${(props) =>
    props.enemyattack > 0 &&
    css`
      animation: EnemyAttack 0.5s cubic-bezier(0.65, 0.22, 0.37, 1.01) 1;
    `}

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translate(2%, -5%);
    }
    50% {
      transform: translate(2%, -0%);
    }
  }
  @keyframes EnemyAttack {
    0% {
      transform: translate(0%, -5%);
    }
    50% {
      transform: translate(-30%, -30%);
    }
    70% {
      transform: translate(50%, -5%);
    }
    100% {
      transform: translate(0%, -5%);
    }
  }
`;
interface CharacterImageProps {
  hit: number;
  playerattack: number;
}
export const CharacterImage = styled.img<CharacterImageProps>`
  width: 500px;
  position: absolute;
  top: -50px;
  right: -30%;

  ${(props) =>
    props.hit <= 0
      ? css`
          animation: MoveUpDown 4s cubic-bezier(0.62, 0.67, 0.67, 1.05) infinite;
        `
      : css`
          animation: GetHit 0.2s cubic-bezier(0.62, 0.67, 0.67, 1.05) 1;
          filter: grayscale(100%);
        `}
  ${(props) =>
    props.playerattack > 0 &&
    css`
      animation: Attack 0.5s cubic-bezier(0.65, 0.22, 0.37, 1.01) 1;
    `}
  @keyframes GetHit {
    0%,
    100% {
      transform: translate(-10%, -5%);
    }
    50% {
      transform: translate(10%, -5%);
    }
  }
  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translate(2%, -5%);
    }
    50% {
      transform: translate(2%, -0%);
    }
  }
  @keyframes Attack {
    0% {
      transform: translate(0%, -5%);
    }
    50% {
      transform: translate(30%, -30%);
    }
    70% {
      transform: translate(-50%, -5%);
    }
    100% {
      transform: translate(0%, -5%);
    }
  }
`;

export const AttackOptions = styled.div`
  position: absolute;
  bottom: 300px;
  left: -50%;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  min-width: 100px;
`;
interface AttackBtnProps {
  cooldown: number;
}
export const AttackBtn = styled.button<AttackBtnProps>`
  position: relative;
  border: none;
  border-radius: 50px;
  padding: 1rem;

  color: ${(props) => props.theme["gray-100"]};
  text-align: center;

  background-color: ${(props) => props.theme["red-500"]};
  border: 1px solid transparent;
  box-sizing: border-box;

  transform: translatey(100px);
  overflow: hidden;
  .slider {
    background-color: ${(props) => props.theme["gray-800"]};
    border-left: 1px solid
      ${(props) =>
        props.cooldown > 0 ? props.theme["gray-900"] : props.theme["red-500"]};
    width: ${(props) => props.cooldown}%;
    position: absolute;
    top: 0;
    right: 0%;
    height: 100%;
    z-index: -1;
  }
  &:disabled {
    border: 1px solid ${(props) => props.theme["gray-800"]};
    cursor: not-allowed;
  }
  &:not(:disabled):hover {
    transition: 0.2s background-color;
    background-color: ${(props) => props.theme["red-300"]};
    border: 1px solid ${(props) => props.theme["gray-800"]};
    cursor: pointer;
  }
`;
