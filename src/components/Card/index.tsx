import { CardContainer } from "./styles";

interface CardProps {
  //name: string;
  img: string;
  //hp: number;
  //def: number;
  //atk: number;
}
export function Card({ /* name, */ img /* , hp, def, atk  */ }: CardProps) {
  console.log(img);
  return (
    <CardContainer>
      <img src={img} />
    </CardContainer>
  );
}
