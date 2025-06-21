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
