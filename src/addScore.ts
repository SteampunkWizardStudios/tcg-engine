import { action } from "./stateHelpers.js";

export const addScore = (amount: number) =>
  action((g) => {
    g.score += amount;
  });
