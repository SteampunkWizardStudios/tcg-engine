import CharacterData from "@type/CharacterData";
import frierenDeck from "@character/frieren/FrierenDeck";

const Frieren: CharacterData = {
  name: "Frieren",
  baseStats: {
    health: 400,
    attack: 25,
    defense: 20,
    speed: 25,
  },
  startingDeck: frierenDeck,
};

export default Frieren;
