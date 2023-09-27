import { About } from "../../components/About";
import { StartStore } from "../../components/StartStore";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <About />
      <StartStore />
    </HomeContainer>
  );
}
