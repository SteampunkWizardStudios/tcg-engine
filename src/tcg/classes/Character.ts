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
  private _cachedOpponent: Character | null = null;

  public handSize: number = 5;

  public stats: Stats;

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

  public get opponent(): Character {
    if (this._cachedOpponent) {
      return this._cachedOpponent;
    }
    this._cachedOpponent =
      this.engine.state.players.find((player) => player.id !== this.id) ?? null;
    if (!this._cachedOpponent) {
      throw new Error("Opponent not found - incomplete game state");
    }
    return this._cachedOpponent;
  }

  public addToDrawPile(card: Card) {
    this.deck.push(card);
    this.drawPile.push(card);
    this.emit("cardAddedToDeck", { card });
  }

  public selectCard(card: Card) {
    if (!this.hand.includes(card)) {
      throw new Error("Card not in hand");
    }
    this.selectedCard = card;
    this.emit("cardSelected", { card });
  }

  public playSelectedCard() {
    if (!this.selectedCard) {
      throw new Error("No card selected");
    }
    if (!this.activeCards.includes(this.selectedCard)) {
      throw new Error("Selected card not an active card");
    }

    this.activeCards = this.activeCards.filter(
      (card) => card !== this.selectedCard
    );
    this.hand = this.hand.filter((card) => card !== this.selectedCard);
    this.discardPile.push(this.selectedCard);
	this.selectedCard.play();

    this.emit("cardPlayed", { card: this.selectedCard });
    this.selectedCard = null;
  }

  public damage(amount: number) {
    const damage = Math.min(1, amount);
    this.stats.health -= damage;
    this.emit("hpChange", { change: -damage });
    return damage;
  }

  public heal(amount: number) {
    const heal = Math.min(
      amount,
      this.characterData.baseStats.health - this.stats.health
    );
    this.stats.health += heal;
    this.emit("hpChange", { change: heal });
    return heal;
  }
}
