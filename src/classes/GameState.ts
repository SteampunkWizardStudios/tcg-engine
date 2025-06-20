export type GameStateArgs = {
    turnCount?: number
}

export default class GameState {
    public turnCount: number

    constructor(args: GameStateArgs) {
        this.turnCount = args.turnCount ?? 0;
    }
}