import GameObject, { GameObjectArgs } from "@class/GameObject";
import Character from "@class/Character";

export type OwnedGameObjectArgs = {
  owner: Character;
};

export default class OwnedGameObject extends GameObject {
  public owner: Character;
  private _cachedOpponent: Character | null = null;

  constructor(args: OwnedGameObjectArgs & GameObjectArgs) {
    super(args);
    this.owner = args.owner;
  }

  public get opponent(): Character {
    if (this._cachedOpponent) {
      return this._cachedOpponent;
    }
    this._cachedOpponent =
      this.engine.state.players.find((player) => player.id !== this.owner.id) ??
      null;
    if (!this._cachedOpponent) {
      throw new Error("Opponent not found - incomplete game state");
    }
    return this._cachedOpponent;
  }
}
