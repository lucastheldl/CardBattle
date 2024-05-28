import { BoosterContainer } from "./styles";

interface BoosterProps {
  img: string;
  name: string;
  handleToggleModal: () => void;
}

export function Booster({ img, name, handleToggleModal }: BoosterProps) {
  return (
    <BoosterContainer onClick={handleToggleModal}>
      <img src={img} title={name} />
    </BoosterContainer>
  );
}
