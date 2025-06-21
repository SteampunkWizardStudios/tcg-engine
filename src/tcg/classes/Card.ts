import OwnedGameObject, {
  OwnedGameObjectArgs,
} from "@src/tcg/classes/OwnedGameObject";
import { GameObjectArgs } from "@src/tcg/classes/GameObject";
import CardData from "@type/CardData";

export type CardArgs = { cardData: CardData };

export default class Card extends OwnedGameObject {
  public readonly cardData: CardData; // for accessing things name that aren't specific to the instance

  constructor(args: CardArgs & OwnedGameObjectArgs & GameObjectArgs) {
    super(args);
    this.cardData = args.cardData;
  }
}
