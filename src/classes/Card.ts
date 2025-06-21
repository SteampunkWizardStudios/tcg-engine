import GameObject, { GameObjectArgs } from "@class/GameObject";

export type CardArgs = {
  name: string;
};

export default class Card extends GameObject {
  public name: string;

  constructor(args: CardArgs & GameObjectArgs) {
    super(args);
    this.name = args.name;
  }
}
