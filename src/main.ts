import Engine from "@class/Engine";
import Frieren from "@character/frieren/Frieren";

console.log("Welcome to TCG Engine");
const engine = new Engine({});
const { create, state } = engine;

const character = create.character({
  id: "1263256360825524315",
  characterData: Frieren,
});

console.log(character);
