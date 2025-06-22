import Engine from "@class/Engine";
import Frieren from "@character/frieren/Frieren";
import Card from "@class/Card";

console.log("Welcome to TCG Engine");
const engine = new Engine({});
const { create, state } = engine;

const character = create.character({
  id: "1263256360825524315",
  characterData: Frieren,
});

character.on("cardAddedToDeck", ({ card }) => {
  console.log(
    `Card added to ${character.characterData.name}'s deck: ${card.cardData.name}`
  );
});

character.create.card({ cardData: { name: "Test" } });
