import { EventEmitter } from "events";

/*
for example purposes, there will be a generic score
to test cards on without characters involved yet
*/
type GameState = {
  turn: number;
  score: number;
  events: EventEmitter;
};

export default GameState;
