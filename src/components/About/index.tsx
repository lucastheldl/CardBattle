import { AboutContainer, AboutWrapper } from "./styles";
import HeroImage from "../../assets/HeroImage.png";
import { DefaultBtn } from "../../styles/global";

export function About() {
  return (
    <AboutWrapper>
      <AboutContainer>
        <h1>Colecione suas cartas de batalha!</h1>
        <p>
          “Bem vindo ao Card Battle, um jogo onde você deverá coletar as cartas
          mais poderosas e enfrentar inimigos perigosos para melhorar sua
          coleção e se tornar imbativel. Colecione, batalhe, compre e
          divirta-se.”
        </p>
        <DefaultBtn>Cadastrar</DefaultBtn>
      </AboutContainer>
      <img src={HeroImage} width={600} />
    </AboutWrapper>
  );
}
