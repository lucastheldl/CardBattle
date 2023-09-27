import artemia from "../assets/Transcendental been.jpg";
import lDragon from "../assets/light dragon.jpg";
import chaosDragon from "../assets/CaosDragon.png";
import transcendental from "../assets/AthemiaTheImortalQueen.jpg";
//battleimages
import lDragonEnemy from "../assets/LightDragon.png";
import chaosDragonEnemy from "../assets//CaosDragon.png";
//scenario
import space from "../assets/c74e901922011b4516d02e7cff8cb45d.jpg";
import mountain from "../assets/cba62536cf97f1a7441832d5b8bce18b.jpg";

export const cardList = [
  {
    id: "1",
    name: "Arthemia",
    img: artemia,
    hp: 100,
    def: 30,
    atk: 50,
  },
  { id: "2", name: "Light Dragon", img: lDragon, hp: 200, def: 50, atk: 60 },
  {
    id: "3",
    name: "Transcendental Beeing",
    img: transcendental,
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
  },
  {
    id: "2",
    name: "Dragão do caos liberado",
    img: chaosDragon,
    characterImg: chaosDragonEnemy,
    scenarioImg: mountain,
    hp: 270,
  },
];
