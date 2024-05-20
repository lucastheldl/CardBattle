import { AboutContainer, AboutWrapper } from "./styles";
import HeroImage from "../../assets/HeroImage.png";
import { DefaultBtn } from "../../styles/global";
import { useNavigate } from "react-router-dom";

export function About() {
  const navigate = useNavigate();
  function handleNavigateTo() {
    navigate("/CardBattle/auth/register");
  }
  return (
    <AboutWrapper>
      <AboutContainer>
        <h1>Cartas de batalha!</h1>
        <p>
          “Card Battle e um jogo onde você deverá coletar as cartas mais
          poderosas e enfrentar inimigos perigosos para se tornar imbativel.
          Colecione, batalhe, compre e divirta-se.”
        </p>
        <DefaultBtn fontSize={1} onClick={handleNavigateTo}>
          Cadastre-se
        </DefaultBtn>
      </AboutContainer>
      <img src={HeroImage} width={600} />
    </AboutWrapper>
  );
}
