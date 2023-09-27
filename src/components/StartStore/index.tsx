import { StartStoreContainer, StartStoreWrapper } from "./styles";
import bg from "../../assets/Damian.jpg";

export function StartStore() {
  return (
    <StartStoreWrapper>
      <StartStoreContainer>
        <h1>Compre sua primeira carta aqui!</h1>
        <img src={bg} alt="" />
        <div className="deck"></div>
      </StartStoreContainer>
    </StartStoreWrapper>
  );
}
