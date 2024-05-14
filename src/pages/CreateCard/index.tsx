import { useState, FormEvent, ChangeEvent } from "react";

import {
  RegisterWrapper,
  RegisterForm,
  RegisterInput,
} from "../auth/Register/styles";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";
import { DefaultBtn } from "../../styles/global";
import {
  RarityBtnContainer,
  RaritySection,
  RarityTextContainer,
} from "./styles";

export function CreateCard() {
  const [name, setName] = useState("");
  const [atk, setAtk] = useState<number>();
  const [def, setDef] = useState<number>();
  const [hp, setHp] = useState<number>();
  const [imgUrl, setImgUrl] = useState("");
  const [characterImgUrl, setCharacterImgUrl] = useState("");
  const [rarity, setRarity] = useState("COMMON");

  const [moveOneName, setMoveOneName] = useState("");
  const [moveOneDamage, setMoveOneDamage] = useState<number>(0);
  const [moveOneCooldown, setMoveOneCooldown] = useState<number>(0);
  function handleRadioChange(e: ChangeEvent<HTMLInputElement>) {
    setRarity(e.target.value);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      const card = {
        name,
        atk,
        def,
        hp,
        rarity,
        characterImg: characterImgUrl,
        img: imgUrl,
        moves: [
          {
            name: moveOneName,
            damage: moveOneDamage,
            cooldown: moveOneCooldown,
          },
        ],
      };
      await addDoc(collection(db, "cards"), card);

      window.alert("Carta criada com sucesso!");
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <RegisterWrapper>
      <h2>Criar uma carta</h2>
      <RegisterForm onSubmit={handleSubmit}>
        <label>Nome da Carta:</label>
        <RegisterInput
          placeholder="Battle ox"
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
          name="name"
          required
        />

        <label htmlFor="imgUrl">Imagen URL:</label>
        <RegisterInput
          type="text"
          placeholder="Insira uma URL"
          onChange={(e) => setImgUrl(e.target.value)}
          value={imgUrl}
          name="imgUrl"
          required
        />
        <label htmlFor="characterImgUrl">Imagen do personagem URL:</label>
        <RegisterInput
          type="text"
          placeholder="Insira uma URL"
          onChange={(e) => setCharacterImgUrl(e.target.value)}
          value={characterImgUrl}
          name="characterImgUrl"
          required
        />
        <label htmlFor="atk">Atk:</label>
        <RegisterInput
          type="number"
          placeholder="Digite um ataque"
          onChange={(e) => setAtk(Number(e.target.value))}
          value={atk}
          name="atk"
          required
        />
        <label htmlFor="def">Def:</label>
        <RegisterInput
          type="number"
          placeholder="Digite uma defesa"
          onChange={(e) => setDef(Number(e.target.value))}
          value={def}
          name="def"
          required
        />
        <label htmlFor="def">Hp:</label>
        <RegisterInput
          type="number"
          placeholder="Digite um HP"
          onChange={(e) => setHp(Number(e.target.value))}
          value={hp}
          name="hp"
          required
        />
        <h3>Raridade</h3>
        <RaritySection>
          <RarityTextContainer>
            <label>Comun</label>
            <label>Raro</label>
            <label>Lendário</label>
          </RarityTextContainer>
          <RarityBtnContainer>
            <RegisterInput
              type="radio"
              onChange={(e) => handleRadioChange(e)}
              value={"COMMON"}
              name="rarity-1"
              checked={rarity === "COMMON"}
            />
            <RegisterInput
              type="radio"
              onChange={(e) => handleRadioChange(e)}
              value={"RARE"}
              name="rarity-2"
              checked={rarity === "RARE"}
            />
            <RegisterInput
              type="radio"
              onChange={(e) => handleRadioChange(e)}
              value={"LEGENDARY"}
              name="rarity-3"
              checked={rarity === "LEGENDARY"}
            />
          </RarityBtnContainer>
        </RaritySection>
        <h3>Moves</h3>

        <label>Name:</label>
        <RegisterInput
          type="text"
          placeholder="Insira nome"
          onChange={(e) => setMoveOneName(e.target.value)}
          value={moveOneName}
          name="move-1-name"
          required
        />
        <label>Damage:</label>
        <RegisterInput
          type="number"
          placeholder="Insira um dano"
          onChange={(e) => setMoveOneDamage(Number(e.target.value))}
          value={moveOneDamage}
          name="move-1-damage"
          required
        />
        <label>Cooldown:</label>
        <RegisterInput
          type="number"
          placeholder="Insira um cooldown"
          onChange={(e) => setMoveOneCooldown(Number(e.target.value))}
          value={moveOneCooldown}
          name="move-1-cooldown"
          required
        />

        <DefaultBtn type="submit">Criar carta</DefaultBtn>
      </RegisterForm>
    </RegisterWrapper>
  );
}
