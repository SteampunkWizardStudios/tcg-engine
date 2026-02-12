import GameState from "./GameState";
import { addScore } from "./addScore";

export type CardData = {
  name: string;
  description: string;
  onPlay: (g: GameState) => GameState;
};

// example format
const fireball = {
  name: "Fireball",
  description: `Add ${3} score.`,
  onPlay: addScore(3),
} satisfies CardData;

const booster = {
  name: "Booster",
  description: `When you gain score, gain an additional ${2} score.`,
  onPlay: (g: GameState) => {
    return g;
  },
};
