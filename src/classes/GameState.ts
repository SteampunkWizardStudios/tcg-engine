export type GameStateArgs = {
  turnCount?: number;
};

// GameState being a class is kinda unnecessary if its just data, might change

export default class GameState {
  public turnCount: number;

  constructor(args: GameStateArgs) {
    this.turnCount = args.turnCount ?? 0;
  }
}
