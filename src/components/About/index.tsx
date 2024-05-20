import { AboutContainer, AboutWrapper } from "./styles";
import HeroImage from "../../assets/HeroImage.png";
import { DefaultBtn } from "../../styles/global";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export function About() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleNavigateTo(path: string) {
    navigate(`/CardBattle/${path}`);
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
        <DefaultBtn
          fontSize={1}
          onClick={() =>
            !user ? handleNavigateTo("auth/register") : handleNavigateTo("shop")
          }
        >
          {!user ? "Cadastre-se" : "Comprar cartas"}
        </DefaultBtn>
      </AboutContainer>
      <img src={HeroImage} width={600} />
    </AboutWrapper>
  );
}
