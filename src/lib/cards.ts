import artemia from "../assets/Transcendental been.jpg";
import lDragon from "../assets/light dragon.jpg";
import transcendental from "../assets/AthemiaTheImortalQueen.jpg";
//battleimages
import lDragonEnemy from "../assets/LightDragon.png";

//scenario
import space from "../assets/c74e901922011b4516d02e7cff8cb45d.jpg";
import mountain from "../assets/cba62536cf97f1a7441832d5b8bce18b.jpg";
//Booster
import boosterDefault from "../assets/Booster_null.jpg";
import booster_1 from "../assets/Booster_1.jpg";

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

export const boosterList = [
  { id: "0", name: "", img: boosterDefault, cards: [""], cost: 0 },
  {
    id: "1",
    name: "Dimentional Strike",
    img: booster_1,
    cards: ["23123132", "f443f34gg"],
    cost: 500,
  },
];

export const battleList = [
  {
    id: "1",
    name: "Dragão da luz",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/ddel9ww-fd553123-8f21-4c16-bc53-b27e961819e5.jpg/v1/fill/w_870,h_918,q_70,strp/eraldic_dragon_of_light_by_tellarheaven_ddel9ww-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTM1MCIsInBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGRlbDl3dy1mZDU1MzEyMy04ZjIxLTRjMTYtYmM1My1iMjdlOTYxODE5ZTUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.JOLnxeRO6rAf3fsijI3HHiLm1BO5bILWqSXwYpB4W7k",
    characterImg:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dhcvrty-24d545a1-eb00-4308-82c4-98e9c72e5016.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGhjdnJ0eS0yNGQ1NDVhMS1lYjAwLTQzMDgtODJjNC05OGU5YzcyZTUwMTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.hFAle4t2gQSOUBzqzIDS99d6MLWXFj9c6UeVjuA-Ydo",
    scenarioImg: space,
    hp: 270,
    atk: 40,
    def: 30,
  },
  {
    id: "2",
    name: "Dragão do caos liberado",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/df385qv-9cbe3530-b733-47c4-a34e-55700af7f3df.jpg/v1/fill/w_933,h_856,q_70,strp/dragon_of_the_unleashed_chaos_by_tellarheaven_df385qv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTE3NSIsInBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGYzODVxdi05Y2JlMzUzMC1iNzMzLTQ3YzQtYTM0ZS01NTcwMGFmN2YzZGYuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.5EkOj-mD10zd3Xdhu7VRILQa5phAjAwDJgCdd01MJtU",
    characterImg:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dhcvrxx-1cb71d2e-b218-4d6d-9143-e6aa30ca67b7.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGhjdnJ4eC0xY2I3MWQyZS1iMjE4LTRkNmQtOTE0My1lNmFhMzBjYTY3YjcucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.n1iCRfSHYl6RDKYiuVngJh_a1RtJpa5uNniynoAGu4A",
    scenarioImg: mountain,
    hp: 270,
    atk: 60,
    def: 40,
  },
  {
    id: "3",
    name: "Caos Fuwen",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dg7w1gv-2ecf8b9e-f1cf-4470-b0f7-cb9a8b35784b.jpg/v1/fill/w_838,h_954,q_70,strp/caos_form_fuwen_artwork_by_tellarheaven_dg7w1gv-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1OCIsInBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGc3dzFndi0yZWNmOGI5ZS1mMWNmLTQ0NzAtYjBmNy1jYjlhOGIzNTc4NGIuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.jsFR5BQwTmJs0vB9FrHPMBW403Xrj0mP_MxnFDB8zb4",
    characterImg:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dhcvrqu-554b3fd0-ae81-4539-adb4-1dfafa9a4d84.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGhjdnJxdS01NTRiM2ZkMC1hZTgxLTQ1MzktYWRiNC0xZGZhZmE5YTRkODQucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.F1Z2dBqt3q_YkclgoFn-pb-4EpiH0zQthVA3MvPjxLc",
    scenarioImg: mountain,
    hp: 200,
    atk: 40,
    def: 30,
  },
  {
    id: "4",
    name: "Ultimate Dinasvora Mech",
    img: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/df1225z-d6ebc253-db11-47a2-8f54-3e7198c1ebe4.jpg/v1/fill/w_1020,h_783,q_70,strp/dinasvora_meach_0_ultimate_eruption_rex_by_tellarheaven_df1225z-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTgzIiwicGF0aCI6IlwvZlwvNGI2YWQ1YjEtY2RmYi00NmRhLTg0MWYtOWIzNmNiNWU0NDNlXC9kZjEyMjV6LWQ2ZWJjMjUzLWRiMTEtNDdhMi04ZjU0LTNlNzE5OGMxZWJlNC5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CqGtJn-GgZVHIcti7riCuftmL8o47ayK92Kzh2RJDFE",
    characterImg:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4b6ad5b1-cdfb-46da-841f-9b36cb5e443e/dhcvrrr-d85cbd5c-a563-4ae6-9f82-683efba317bc.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzRiNmFkNWIxLWNkZmItNDZkYS04NDFmLTliMzZjYjVlNDQzZVwvZGhjdnJyci1kODVjYmQ1Yy1hNTYzLTRhZTYtOWY4Mi02ODNlZmJhMzE3YmMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.YMh3jEf-z5iQsO_2YACzJtZX8C0IHq_0i39wSc-JkpY",
    scenarioImg: mountain,
    hp: 200,
    atk: 40,
    def: 30,
  },
];
