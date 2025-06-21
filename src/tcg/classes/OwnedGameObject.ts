import GameObject, { GameObjectArgs } from "@class/GameObject";
import Character from "@class/Character";

export type OwnedGameObjectArgs = {
  owner: Character;
};

export default class OwnedGameObject extends GameObject {
  public owner: Character;

  constructor(args: OwnedGameObjectArgs & GameObjectArgs) {
    super(args);
    this.owner = args.owner;
  }
}
