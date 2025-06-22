import { CardArgs } from "@src/tcg/classes/Card";
import GameObject, { GameObjectArgs } from "@class/GameObject";
import Card from "@class/Card";
import CharacterData from "@type/CharacterData";
import Stats from "@type/Stats";

export type CharacterArgs = {
  id: string;
  characterData: CharacterData;
};

export default class Character extends GameObject {
  public readonly id: string; // player discord id
  public readonly characterData: CharacterData; // for accessing things like base stats or name that aren't specific to the instance
  public stats: Stats;
  public handSize: number = 5;

  public deck: Card[] = []; // all cards
  public drawPile: Card[] = [];
  public hand: Card[] = []; // cards currently in hand
  public activeCards: Card[] = []; // playable cards in hand
  public selectedCard: Card | null = null; // card currently selected for an action
  public discardPile: Card[] = [];

  constructor(args: CharacterArgs & GameObjectArgs) {
    super(args);
    this.id = args.id;
    this.characterData = args.characterData;
    this.stats = { ...args.characterData.baseStats };

    for (const { card, count } of args.characterData.startingDeck) {
      for (let i = 0; i < count; i++) {
        this.create.card({ cardData: card });
      }
    }
  }

  public create = {
    card: (args: CardArgs) => {
      const card = this.engine.create.card({ owner: this, ...args });
      this.addToDrawPile(card);
      return card;
    },
  };

  public addToDrawPile(card: Card) {
    this.deck.push(card);
    this.drawPile.push(card);
    this.emit("cardAddedToDeck", { card });
  }
}
