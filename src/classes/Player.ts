import Engine from "@class/Engine";
import Character, { CharacterArgs } from "@class/Character";
import { CardArgs } from "@class/Card";

export type PlayerArgs = {
  id: string;
  character: Character;
};

export default class Player {
  public engine: Engine;
  public id: string; // discord id
  public character: Character;

  constructor(args: PlayerArgs & { engine: Engine }) {
    this.id = args.id;
    this.character = args.character;
    this.engine = args.engine;
  }

  public create = {
    character: (args: CharacterArgs) =>
      this.engine.create.character({ owner: this, ...args }),
    card: (args: CardArgs) => this.engine.create.card({ owner: this, ...args }),
  };
}
