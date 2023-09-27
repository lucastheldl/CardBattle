import { css, styled } from "styled-components";

interface ContainerProps {
  hpamount: number;
}
export const BattleContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  .bg {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: -10;

    filter: blur(3px);
  }
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  max-width: 1300px;

  margin: 0 auto;

  .deck {
    display: flex;
    gap: 0.5rem;
    height: 300px;
    width: 550px;

    padding: 1rem;
    background-color: ${(props) => props.theme["red-500"]};
    border-radius: 6px;
  }

  .imageContainer {
    position: relative;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }

  .enemy {
  }
  .character {
    width: 900px;
    position: absolute;
    top: -300px;

    z-index: -1;
  }

  .lifebar {
    width: 500px;
    height: 20px;

    position: absolute;
    top: 430px;
    left: 50px;

    border: 1px solid ${(props) => props.theme["gray-900"]};
    border-radius: 6px;
    overflow: hidden;

    background-color: ${(props) => props.theme["gray-900"]};
    .bar {
      display: flex;
      justify-content: center;

      width: ${(props) => props.hpamount}%;
      height: 100%;
      background-color: ${(props) => props.theme["red-500"]};

      p {
        font-weight: bold;
        color: ${(props) => props.theme["gray-100"]};
      }
    }
  }
`;

interface EnemyImageProps {
  hit: number;
}
export const EnemyImage = styled.img<EnemyImageProps>`
  ${(props) =>
    props.hit <= 0
      ? css`
          animation: MoveUpDown 4s cubic-bezier(0.62, 0.67, 0.67, 1.05) infinite;
        `
      : css`
          animation: GetHit 0.2s cubic-bezier(0.62, 0.67, 0.67, 1.05) 1;
          filter: grayscale(100%);
        `}

  width: 700px;
  position: absolute;
  top: -30;
  left: -70px;
  z-index: -1;

  @keyframes MoveUpDown {
    0%,
    100% {
      transform: translate(2%, -5%);
    }
    50% {
      transform: translate(2%, -0%);
    }
  }
  @keyframes GetHit {
    0%,
    100% {
      transform: translate(-10%, -5%);
    }
    50% {
      transform: translate(10%, -5%);
    }
  }
`;
