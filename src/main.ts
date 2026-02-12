import { EventEmitter } from "events";
import GameState from "./GameState";
import { fireball, lightning } from "./CardData";
import { playTurn } from "./engine";
import { pipe } from "./stateHelpers";

const state: GameState = {
  turn: 1,
  score: 0,
  events: new EventEmitter(),
};

pipe(...[fireball, lightning].map(playTurn))(state);
