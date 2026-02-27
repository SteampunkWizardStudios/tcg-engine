import { action } from "@engine/gameAction";

export const addScore = (amount: number) =>
  action((g) => {
    g.score += amount;
  });
