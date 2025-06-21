import GameState from "@src/tcg/classes/GameState";
import Card, { CardArgs } from "@src/tcg/classes/Card";
import Character, { CharacterArgs } from "@src/tcg/classes/Character";
import { OwnedGameObjectArgs } from "@src/tcg/classes/OwnedGameObject";

export type EngineArgs = {
  gameState?: GameState;
};

export default class Engine {
  public state: GameState;

  constructor(args: EngineArgs) {
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
