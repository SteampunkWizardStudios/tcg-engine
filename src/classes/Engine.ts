import GameState from "@class/GameState";
import Card, { CardArgs } from "@class/Card";
import Player, { PlayerArgs } from "@class/Player";
import Character, { CharacterArgs } from "@class/Character";
import { OwnedGameObjectArgs } from "@class/OwnedGameObject";

export type EngineArgs = {
  gameState?: GameState;
};

export default class Engine {
  public state: GameState;

  constructor(args: EngineArgs) {
    this.state = args.gameState ?? new GameState({});
  }

  public create = {
    player: (args: PlayerArgs) => new Player({ engine: this, ...args }),
    character: (args: CharacterArgs & OwnedGameObjectArgs) =>
      new Character({ engine: this, ...args }),
    card: (args: CardArgs & OwnedGameObjectArgs) =>
      new Card({ engine: this, ...args }),
  };
}
