import Engine from "@class/Engine";

export type GameObjectArgs = {
  engine: Engine;
};

export default class GameObject {
  public engine: Engine;

  constructor(args: GameObjectArgs) {
    this.engine = args.engine;
  }
}

// game-altering effects like Flamme's theories might be better represented as a neutral GameObject (rather than OwnedGameObject)
