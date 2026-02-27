import { EventEmitter } from "events";
import GameState from "@engine/GameState";
import { playTurn } from "@engine/core";
import { pipe } from "@engine/gameAction";
import { fireball, lightning } from "@engine/CardData";


const state: GameState = {
  turn: 1,
  score: 0,
  events: new EventEmitter(),
};

pipe(...[fireball, lightning].map(playTurn))(state);
