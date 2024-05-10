import { LoadingContainer } from "./styles";
import cardImg from "../../assets/CardLoading.png";

export function LoadingScreen() {
  return (
    <LoadingContainer>
      <img src={cardImg} width={35} height={50} />
      <p>Carregando...</p>
    </LoadingContainer>
  );
}
