import { Booster } from "../../components/Booster";
import { boosterList } from "../../lib/cards";
import { ShopContainer } from "./styles";

export function Shop() {
  return (
    <ShopContainer>
      {boosterList.map((b) => {
        return <Booster img={b.img} />;
      })}
    </ShopContainer>
  );
}
