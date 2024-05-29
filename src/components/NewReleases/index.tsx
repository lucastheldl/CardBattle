import { DefaultBtn } from "../../styles/global";
import HeroImage from "../../assets/HeroImage.png";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { ReleasesWrapper, ReleasesContainer } from "./styles";

export function NewReleases() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  function handleNavigateTo(path: string) {
    navigate(`/CardBattle/${path}`);
  }

  return (
    <ReleasesWrapper>
      <img src={HeroImage} width={600} />
      <ReleasesContainer>
        <h1>Conheça a nova carta a chegar no jogo!</h1>
        <p>“New card”</p>
        <DefaultBtn
          fontSize={1}
          onClick={() =>
            !user ? handleNavigateTo("auth/register") : handleNavigateTo("shop")
          }
        >
          {!user ? "Cadastre-se" : "Comprar"}
        </DefaultBtn>
      </ReleasesContainer>
    </ReleasesWrapper>
  );
}
