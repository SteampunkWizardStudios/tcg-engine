/*
for example purposes, there will be a generic score
to test cards on without characters involved yet
*/
type GameState = {
  turn: number;
  score: number;
};

export default GameState;

export const baseState = {
    turn: 1,
    score: 0,
} as const satisfies GameState;