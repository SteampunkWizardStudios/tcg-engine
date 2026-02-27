import GameObject from "@engine/GameObject";
import { CardData } from "@engine/CardData";

export default class Card extends GameObject {
  data: CardData;

  constructor(data: CardData) {
    super();
    this.data = data;
  }
}
