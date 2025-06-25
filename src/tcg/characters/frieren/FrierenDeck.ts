import { StartingDeck } from "@type/CharacterData";
import CardData, { defineCard } from "@type/CardData";

const zoltraak = defineCard({
  name: "Zoltraak",
  description: ({ dmg }) => `Deals ${dmg} Damage`, // args must match empower
  empower: { dmg: 50 },
  onPlay({ dmg }) { // args must match empower
    this.owner.opponent.damage(dmg);
  },
});

const flatZoltraak = defineCard({
  name: "Flat Zoltraak",
  description: () => "Zoltraak, no empowerment, 50 Damage",
  onPlay() {
    this.owner.opponent.damage(50);
  },
});

const frierenDeck: StartingDeck = [
  { card: zoltraak, count: 1, },
  { card: flatZoltraak, count: 1 }
];

export default frierenDeck;
