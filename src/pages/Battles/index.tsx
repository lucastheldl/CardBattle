import { BattleCard } from "../../components/BattleCard";
import { BattlesContainer } from "./styles";

export function Battles() {
  return (
    <BattlesContainer>
      <h1>Battle</h1>
      <section>
        <BattleCard id={"1"} />
      </section>
    </BattlesContainer>
  );
}
