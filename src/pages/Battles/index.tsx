import { BattleCard } from "../../components/BattleCard";
import { BattlesContainer } from "./styles";

import { battleList } from "../../lib/cards";

export function Battles() {
  return (
    <BattlesContainer>
      <h1>Battle</h1>
      <section>
        {battleList.map((battle) => {
          return (
            <BattleCard
              id={battle.id}
              characterImage={battle.img}
              key={`${battle.id}-battle`}
            />
          );
        })}
      </section>
    </BattlesContainer>
  );
}
