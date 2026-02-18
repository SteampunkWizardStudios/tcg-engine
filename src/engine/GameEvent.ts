import { EventEmitter } from "events";

export type Events = {
  cardPlayed: { name: string };
  scoreChanged: { before: number; after: number };
};

export type GameEvent = {
  [K in keyof Events]: { type: K; payload: Events[K] };
}[keyof Events];

export class GameEventEmitter extends EventEmitter {
  on(event: keyof Events, listener: (payload: Events[keyof Events]) => void) {
    return super.on(event, listener);
  }
  emit(event: keyof Events, payload: Events[keyof Events]) {
    return super.emit(event, payload);
  }
}
