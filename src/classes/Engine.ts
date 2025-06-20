import GameState from "@class/GameState"

export type EngineArgs = {
    gameState?: GameState;
}

export default class Engine {
    public state: GameState;

    constructor(args: EngineArgs) {
        this.state = args.gameState ?? new GameState({});
    }
}