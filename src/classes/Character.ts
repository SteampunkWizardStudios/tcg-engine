import OwnedGameObject, { OwnedGameObjectArgs } from "@class/OwnedGameObject";
import { GameObjectArgs } from "@class/GameObject";

export type CharacterArgs = {
  name: string;
};

export default class Character extends OwnedGameObject {
  public name: string;

  constructor(args: CharacterArgs & OwnedGameObjectArgs & GameObjectArgs) {
    super(args);
    this.name = args.name;
  }
}
