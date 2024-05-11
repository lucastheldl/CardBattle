import { BoosterContainer } from "./styles";
import { Boostertype } from "../../lib/cards";

interface BoosterProps {
  img: string;
  name: string;
  handleToggleModal: (booster: Boostertype) => void;
}

export function Booster({ img, name, handleToggleModal }: BoosterProps) {
  return (
    <BoosterContainer onClick={handleToggleModal}>
      <img src={img} title={name} />
    </BoosterContainer>
  );
}
