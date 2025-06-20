import GameState from "@class/GameState"
import GameObject from "@class/GameObject";

export type EngineArgs = {
    gameState?: GameState;
}

export default class Engine {
    public state: GameState;

    constructor(args: EngineArgs) {
        this.state = args.gameState ?? new GameState({});
    }

    public createGameObject<T extends GameObject>(GameObjectClass: new (args: any) => T, args: object): T {
        return new GameObjectClass({ engine: this, ...args });
    }
}