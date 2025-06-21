import Engine from "@src/tcg/classes/Engine";

console.log("Welcome to TCG Engine");
const engine = new Engine({});
const { create, state } = engine;

const character = create.character({
  id: "1263256360825524315",
  characterData: {
	name: "Frieren",
	baseStats: {
		health: 400,
		attack: 25,
		defense: 20,
		speed: 25,
	},
	startingDeck: [{ card: { name: "Zoltraak"}, count: 1}]
  }
});

console.log(character);
