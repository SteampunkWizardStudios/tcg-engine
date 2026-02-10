import { EventEmitter } from "stream";

export default class GameObject extends EventEmitter {
  id: string;

  constructor() {
    super();
    this.id = crypto.randomUUID();
  }
}
