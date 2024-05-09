import { useState } from "react";
import { Booster } from "../../components/Booster";
import { boosterList } from "../../lib/cards";
import { ModalContainer, ModalContent, ShopContainer } from "./styles";

export function Shop() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleToggleModal() {
    setIsModalOpen((prevstate) => !prevstate);
  }
  return (
    <ShopContainer>
      {boosterList.map((b) => {
        return (
          <Booster
            img={b.img}
            name={b.name}
            handleToggleModal={handleToggleModal}
          />
        );
      })}
      <ModalContainer state={isModalOpen}>
        <ModalContent />
      </ModalContainer>
    </ShopContainer>
  );
}
