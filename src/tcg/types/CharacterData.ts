import Stats from "@type/Stats";
import CardData from "@type/CardData";

export type StartingDeck = { card: CardData; count: number }[];

type CharacterData = {
  name: string;
  baseStats: Stats;
  startingDeck: StartingDeck;
};

export default CharacterData;
