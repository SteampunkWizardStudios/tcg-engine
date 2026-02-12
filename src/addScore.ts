import { gameState } from "./stateHelpers.js";

export function addScore(amount: number) {
  return gameState((d) => {
    d.score += amount;
  });
}