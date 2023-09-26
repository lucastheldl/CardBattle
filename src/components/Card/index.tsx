import { CardContainer, CardImageArea, CardInfoArea } from "./styles";

interface CardProps {
  name: string;
  img: string;
  //hp: number;
  //def: number;
  //atk: number;
}
export function Card({ name, img /* , hp, def, atk  */ }: CardProps) {
  return (
    <CardContainer>
      <CardImageArea>
        <img src={img} />
      </CardImageArea>
      <CardInfoArea>
        <strong>{name}</strong>
      </CardInfoArea>
    </CardContainer>
  );
}
