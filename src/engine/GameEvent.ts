import { EventEmitter } from "events";

export type Events = {
  cardPlayed: { name: string };
  scoreChanged: { before: number; after: number };
};

export type GameEvent = {
  [K in keyof Events]: { type: K; payload: Events[K] };
}[keyof Events];

export class GameEventEmitter extends EventEmitter {
  on<K extends keyof Events>(event: K, listener: (payload: Events[K]) => void) {
    return super.on(event as string | symbol, listener);
  }

  emit<K extends keyof Events>(event: K, payload: Events[K]) {
    return super.emit(event as string | symbol, payload);
  }
}
