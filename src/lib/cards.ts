import artemia from "../assets/Transcendental been.jpg";
import lDragon from "../assets/light dragon.jpg";
import chaosDragon from "../assets/CaosDragonc.jpg";
import transcendental from "../assets/AthemiaTheImortalQueen.jpg";
import chaosFuwen from "../assets/CaosFuwen_Artwork.jpg";
import ulltimateDino from "../assets/UltimateDinoFinal_2.jpg";
//battleimages
import lDragonEnemy from "../assets/LightDragon.png";
import chaosDragonEnemy from "../assets//CaosDragon.png";
import chaosFuwenEnemy from "../assets/CaosFuwen_Artwork.png";
import ultimateDinoEnemy from "../assets/UltimateDino.png";
//scenario
import space from "../assets/c74e901922011b4516d02e7cff8cb45d.jpg";
import mountain from "../assets/cba62536cf97f1a7441832d5b8bce18b.jpg";

export type CardType = {
  id: string;
  name: string;
  img: string;
  characterImg: string;
  def: number;
  atk: number;
  hp: number;
  rarity: "COMMON" | "RARE" | "LEGENDARY";
  moves: { name: string; damage: number; cooldown: number }[];
};

export const cardList = [
  {
    id: "1",
    name: "Arthemia",
    img: artemia,
    characterImg: "",
    hp: 100,
    def: 30,
    atk: 50,
  },
  {
    id: "2",
    name: "Light Dragon",
    img: lDragon,
    characterImg: lDragonEnemy,
    hp: 200,
    def: 50,
    atk: 60,
  },
  {
    id: "3",
    name: "Transcendental Beeing",
    img: transcendental,
    characterImg: "",
    hp: 150,
    def: 30,
    atk: 40,
  },
];

export const battleList = [
  {
    id: "1",
    name: "Dragão da luz",
    img: lDragon,
    characterImg: lDragonEnemy,
    scenarioImg: space,
    hp: 270,
    atk: 40,
    def: 30,
  },
  {
    id: "2",
    name: "Dragão do caos liberado",
    img: chaosDragon,
    characterImg: chaosDragonEnemy,
    scenarioImg: mountain,
    hp: 270,
    atk: 60,
    def: 40,
  },
  {
    id: "3",
    name: "Caos Fuwen",
    img: chaosFuwen,
    characterImg: chaosFuwenEnemy,
    scenarioImg: mountain,
    hp: 200,
    atk: 40,
    def: 30,
  },
  {
    id: "4",
    name: "Ultimate Dinasvora Mech",
    img: ulltimateDino,
    characterImg: ultimateDinoEnemy,
    scenarioImg: mountain,
    hp: 200,
    atk: 40,
    def: 30,
  },
];
