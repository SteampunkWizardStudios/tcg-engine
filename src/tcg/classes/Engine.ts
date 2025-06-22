import GameState from "@class/GameState";
import Card, { CardArgs } from "@class/Card";
import Character, { CharacterArgs } from "@class/Character";
import { OwnedGameObjectArgs } from "@class/OwnedGameObject";
import { EventEmitter } from "node:events";
import Events from "@tcg/events/Events";

export type EngineArgs = {
  gameState?: GameState;
};

export default class Engine extends EventEmitter<Events>{
  public state: GameState;

  constructor(args: EngineArgs) {
	super();
    this.state = args.gameState ?? new GameState({});
  }

  public create = {
    character: (args: CharacterArgs) => {
      const character = new Character({ engine: this, ...args });
      this.state.players.push(character);
      return character;
    },
    card: (args: CardArgs & OwnedGameObjectArgs) =>
      new Card({ engine: this, ...args }),
  };
}
