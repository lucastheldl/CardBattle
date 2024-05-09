import { BoosterContainer } from "./styles";

interface BoosterProps {
  img: string;
}

export function Booster({ img }: BoosterProps) {
  return (
    <BoosterContainer>
      <img src={img} />
    </BoosterContainer>
  );
}
