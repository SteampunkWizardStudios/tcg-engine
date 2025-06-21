import Engine from "@class/Engine";
import Character, { CharacterArgs } from "@class/Character";
import { CardArgs } from "@class/Card";

export type PlayerArgs = {
  id: string;
};

export default class Player {
  public engine: Engine;
  public id: string; // discord id
  public declare character: Character;

  private constructor(args: PlayerArgs & { engine: Engine }) {
    this.id = args.id;
    this.engine = args.engine;
  }

  public static createWithCharacter(
    args: PlayerArgs & { engine: Engine },
    characterArgs: CharacterArgs
  ) {
    const player = new Player(args);
    player.character = player.create.character(characterArgs);
    return player;
  }

  public create = {
    character: (args: CharacterArgs) =>
      this.engine.create.character({ owner: this, ...args }),
    card: (args: CardArgs) => this.engine.create.card({ owner: this, ...args }),
  };
}
