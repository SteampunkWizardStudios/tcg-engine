import { addScore } from "@actions/addScore.js";
import { pipe } from "@engine/gameAction.js";
import { CardData } from "@engine/Card.js";
import GameState from "@engine/GameState.js";

// minimal examples to test engine features
export const fireball = {
  name: "Fireball",
  description: `Add ${3} score, then add ${1} score.`,
  onPlay: pipe(addScore(3), addScore(1)),
} as const satisfies CardData;

export const lightning = {
  name: "Lightning",
  description: `Add ${2} score per turn, plus an additional ${1} score.`,
  onPlay: (g: GameState) => addScore(g.turn * 2 + 1)(g),
} as const satisfies CardData;

const booster = {
  name: "Booster",
  description: `When you gain score, gain an additional ${2} score.`,
  onPlay: {},
} as const;
