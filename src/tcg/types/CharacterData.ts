import Stats from "@type/Stats";
import CardData from "@type/CardData";

type CharacterData = {
  name: string;
  baseStats: Stats;
  startingDeck: { card: CardData; count: number }[];
};

export default CharacterData;
