import Engine from "@class/Engine";

console.log("Welcome to TCG Engine");
const engine = new Engine({});
const { create, state } = engine;

const card = create.card({ name: "Test Card" });

console.log(`Turn ${state.turnCount}`);
