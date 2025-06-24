import OwnedGameObject, { OwnedGameObjectArgs } from "@class/OwnedGameObject";
import { GameObjectArgs } from "@class/GameObject";
import CardData from "@type/CardData";

export type CardArgs = { cardData: CardData };

const empowerBoost = 0.1;

export default class Card extends OwnedGameObject {
  public readonly cardData: CardData; // for accessing things name that aren't specific to the instance
  public empowerLevel: number = 0;

  constructor(args: CardArgs & OwnedGameObjectArgs & GameObjectArgs) {
    super(args);
    this.cardData = args.cardData;
  }

  public play() {
    const move = this.cardData.onPlay;
    if (!move) return;
    
    const empowerArgs = this._empowerValues();
    move.call(this, empowerArgs);
  }

  // had to do some runtime checking here to get some flexibility when defining cards
  private _empowerValues() {
    const empowerArgs: Record<string, number> = {};
    for (const [key, value] of Object.entries(this.cardData.empower ?? {})) {
      if (typeof value !== "number") {
        throw new Error(`Empower value at ${key} for ${this.cardData.name} must be a number, got ${typeof value}`);
      }
      empowerArgs[key] = this.empower(value);
    }
    return empowerArgs;
  }

  public empower(number: number) {
    return number * (1 + empowerBoost * this.empowerLevel);
  }
}
