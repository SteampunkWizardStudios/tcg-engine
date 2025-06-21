import GameState from "@class/GameState";
import Card, { CardArgs } from "@class/Card";

export type EngineArgs = {
  gameState?: GameState;
};

export default class Engine {
  public state: GameState;

  public create = {
    card: (args: CardArgs) => new Card({ engine: this, ...args }),
  };

  constructor(args: EngineArgs) {
    this.state = args.gameState ?? new GameState({});
  }
}
