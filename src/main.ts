import Engine from "@class/Engine";

console.log("Welcome to TCG Engine");
const engine = new Engine({});
const { create, state } = engine;

const player = engine.create.player({ id: "player1" }, { name: "Hero" });

console.log(`Turn ${state.turnCount}`);
console.log(player);
console.log(player.character);
