export default class GameObject {
  id: string;

  constructor() {
    this.id = crypto.randomUUID();
  }
}
