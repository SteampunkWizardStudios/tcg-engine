import GameObject, { GameObjectArgs } from "@src/tcg/classes/GameObject";
import Character from "@src/tcg/classes/Character";

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
