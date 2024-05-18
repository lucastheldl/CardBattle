import { AboutContainer, AboutWrapper } from "./styles";
import HeroImage from "../../assets/HeroImage.png";
import { DefaultBtn } from "../../styles/global";

export function About() {
  return (
    <AboutWrapper>
      <AboutContainer>
        <h1>Cartas de batalha!</h1>
        <p>
          “Card Battle e um jogo onde você deverá coletar as cartas mais
          poderosas e enfrentar inimigos perigosos para se tornar imbativel.
          Colecione, batalhe, compre e divirta-se.”
        </p>
        <DefaultBtn fontSize={1}>Cadastre-se</DefaultBtn>
      </AboutContainer>
      <img src={HeroImage} width={600} />
    </AboutWrapper>
  );
}
