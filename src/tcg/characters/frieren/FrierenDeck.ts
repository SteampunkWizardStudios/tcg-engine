import { StartingDeck } from "@type/CharacterData";
import CardData, { defineCard } from "@type/CardData";

const zoltraak = defineCard({
  name: "Zoltraak",
  empower: { dmg: 50 },
  onPlay({ dmg }) {
    this.owner.opponent.damage(dmg);
  },
});

const flatZoltraak = defineCard({
  name: "Flat Zoltraak",
  onPlay() {
    this.owner.opponent.damage(50);
  },
});

const frierenDeck: StartingDeck = [
  { card: zoltraak, count: 1, },
  { card: flatZoltraak, count: 1 }
];

export default frierenDeck;
