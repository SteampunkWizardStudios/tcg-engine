import Character from "@class/Character";

export type GameStateArgs = {
  turnCount?: number;
  players?: Character[];
};

// GameState being a class is kinda unnecessary if its just data, might change

export default class GameState {
  public turnCount: number;
  public players: Character[];

  constructor(args: GameStateArgs) {
    this.turnCount = args.turnCount ?? 0;
    this.players = args.players ?? [];
  }
}
