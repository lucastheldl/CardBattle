import { MadeWithContainer, MadeWithWrapper } from "./styles";
import FireIcon from "../../assets/FireIcon.svg";
import ReactIcon from "../../assets/ReactIcon.svg";
import TypeIcon from "../../assets/TypeIcon.svg";

export function MadeWith() {
  return (
    <MadeWithWrapper>
      <h1>Powered by</h1>
      <MadeWithContainer>
        <img src={ReactIcon} alt="" title="React" />
        <img src={FireIcon} alt="" title="Firebase" />
        <img src={TypeIcon} alt="" title="Typescript" />
      </MadeWithContainer>
    </MadeWithWrapper>
  );
}
