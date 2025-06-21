import GameObject, { GameObjectArgs } from "@class/GameObject";
import Player from "@class/Player";

export type OwnedGameObjectArgs = {
  owner: Player;
};

export default class OwnedGameObject extends GameObject {
  public owner: Player;

  constructor(args: OwnedGameObjectArgs & GameObjectArgs) {
    super(args);
    this.owner = args.owner;
  }
}
