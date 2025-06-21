import Engine from "@class/Engine";

console.log("Welcome to TCG Engine");
const engine = new Engine({});
const { create, state } = engine;

const player = 1;

console.log(`Turn ${state.turnCount}`);
console.log(player);
