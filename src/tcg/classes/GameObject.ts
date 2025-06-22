import Engine from "@src/tcg/classes/Engine";
import { EventEmitter } from "node:events";
import Events from "@tcg/events/Events";

export type GameObjectArgs = {
  engine: Engine;
};

export default class GameObject extends EventEmitter<Events> {
  public engine: Engine;

  constructor(args: GameObjectArgs) {
    super();
    this.engine = args.engine;
  }
}

// game-altering effects like Flamme's theories might be better represented as a neutral GameObject (rather than OwnedGameObject)
