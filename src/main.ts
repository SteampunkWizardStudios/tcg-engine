import GameState from "@engine/GameState.js";
import { pipe } from "@engine/gameAction.js";
import { fireball, lightning } from "@engine/CardData.js";
import Engine from "@engine/Engine.js";
import { createCard } from "./engine/Card.js";

const state: GameState = {
  turn: 1,
  score: 0,
};

const engine = new Engine(state);

engine.events.on("cardPlayed", ({ name }) => {
  console.log(`Played card: ${name}`);
});
engine.events.on("scoreChanged", ({ before, after }) => {
  console.log(`Score changed from ${before} to ${after}`);
});

const cards = [fireball, lightning].map(createCard);

engine.apply(pipe(...cards.map((card) => card.play)));
