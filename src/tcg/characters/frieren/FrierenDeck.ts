import { StartingDeck } from "@type/CharacterData";
import CardData from "@type/CardData";

const zoltraak: CardData = {
  name: "Zoltraak",
  onPlay() {
    this.owner.opponent.damage(50);
  },
};

const frierenDeck: StartingDeck = [{ card: zoltraak, count: 1 }];

export default frierenDeck;
