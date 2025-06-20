import Engine from "@class/Engine";

export type EngineArgs = {
    engine: Engine;
}

export default class GameObject {
    public engine: Engine;

    constructor(args: EngineArgs) {
        this.engine = args.engine;
    }
}