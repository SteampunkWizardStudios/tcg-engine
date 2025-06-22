import OwnedGameObject, { OwnedGameObjectArgs } from "@class/OwnedGameObject";
import { GameObjectArgs } from "@class/GameObject";
import CardData from "@type/CardData";

export type CardArgs = { cardData: CardData };

const empowerBoost = 0.2;

export default class Card extends OwnedGameObject {
  public readonly cardData: CardData; // for accessing things name that aren't specific to the instance
  public empowerLevel: number = 0;

  constructor(args: CardArgs & OwnedGameObjectArgs & GameObjectArgs) {
    super(args);
    this.cardData = args.cardData;
  }

  public play() {
    this.cardData.onPlay?.call(this);
  }
}
