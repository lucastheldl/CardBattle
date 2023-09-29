import { MadeWithContainer, MadeWithWrapper } from "./styles";

export function MadeWith() {
  return (
    <MadeWithWrapper>
      <h1>Powered by</h1>
      <MadeWithContainer></MadeWithContainer>
    </MadeWithWrapper>
  );
}
