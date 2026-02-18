import { GameAction } from "@engine/gameAction.js";
import GameState from "@engine/GameState.js";
import { GameEventEmitter } from "@engine/GameEvent.js";

export default class Engine {
  private state: GameState;
  events = new GameEventEmitter();

  constructor(initialState: GameState) {
    this.state = initialState;
  }

  apply(action: GameAction) {
    const result = action(this.state);
    this.state = result.state;
    if (result.events?.length) {
      for (const event of result.events) {
        this.events.emit(event.type, event.payload);
      }
    }
  }
}
