import { CardContainer, CardImageArea, CardInfoArea } from "./styles";

interface CardProps {
  name: string;
  img: string;
  //hp: number;
  //def: number;
  //atk: number;
}

function handleClick() {}

export function Card({ name, img /* , hp, def, atk  */ }: CardProps) {
  return (
    <CardContainer onClick={handleClick}>
      <CardImageArea>
        <img src={img} />
      </CardImageArea>
      <CardInfoArea>
        <strong>{name}</strong>
      </CardInfoArea>
    </CardContainer>
  );
}
