import GameObject from "./GameObject";
import { CardData } from "./CardData";

export default class Card extends GameObject {
  data: CardData;

  constructor(data: CardData) {
    super();
    this.data = data;
  }
}
