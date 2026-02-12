import GameState from "./GameState";
import { addScore } from "./addScore";
import { pipe } from "./stateHelpers";

export type CardData = {
  name: string;
  description: string;
  onPlay: (g: GameState) => GameState;
};

// minimal examples to test engine features
export const fireball = {
  name: "Fireball",
  description: `Add ${3} score, then add ${1} score.`,
  onPlay: pipe(addScore(3), addScore(1)),
} satisfies CardData;

export const lightning = {
  name: "Lightning",
  description: `Add ${2} score per turn, plus an additional ${1} score.`,
  onPlay: (g: GameState) => addScore(g.turn * 2 + 1)(g),
} satisfies CardData;

const booster = {
  name: "Booster",
  description: `When you gain score, gain an additional ${2} score.`,
  onPlay: {},
};
