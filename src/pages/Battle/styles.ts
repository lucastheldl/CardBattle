import { styled } from "styled-components";

interface BattleContainerProps {
  hpamount: number;
}
export const BattleContainer = styled.main<BattleContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  width: 100%;

  .imageContainer {
    position: relative;
    z-index: -1;
  }

  .enemy {
    animation: MoveUpDown 4s cubic-bezier(0.62, 0.67, 0.67, 1.05) infinite;
    width: 800px;

    transform: translate(2%, -30%);

    @keyframes MoveUpDown {
      0%,
      100% {
        transform: translate(2%, -25%);
      }
      50% {
        transform: translate(2%, -30%);
      }
    }
  }
  .bg {
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    z-index: -10;

    filter: blur(3px);
  }
  .lifebar {
    width: 500px;
    height: 20px;

    position: absolute;
    bottom: 250px;
    left: 200px;

    border: 1px solid ${(props) => props.theme["gray-900"]};
    border-radius: 6px;
    overflow: hidden;

    background-color: ${(props) => props.theme["gray-900"]};
    .bar {
      width: ${(props) => props.hpamount}%;
      height: 100%;
      background-color: ${(props) => props.theme["red-500"]};
    }
  }
`;

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  width: 100%;
  max-width: 1300px;

  margin: 0 auto;

  .deck {
    position: absolute;
    top: 400px;

    display: flex;
    gap: 0.5rem;
    height: 300px;
    width: 550px;

    padding: 1rem;
    background-color: ${(props) => props.theme["red-500"]};
    border-radius: 6px;
  }
`;
