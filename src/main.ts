import Engine from "@class/Engine";
import Frieren from "@character/frieren/Frieren";

console.log("Welcome to TCG Engine");
const engine = new Engine({});
const { create, state } = engine;

// for testing only, not the example usage

const character = create.character({
  id: "1263256360825524315",
  characterData: Frieren,
});

const character2 = create.character({
  id: "1263256360825524316",
  characterData: Frieren,
});

character.on("cardAddedToDeck", ({ card }) => {
  console.log(
    `Card added to ${character.characterData.name}'s deck: ${card.cardData.name}`
  );
});

character.on("cardPlayed", ({ card }) => {
  console.log(
    `${character.characterData.name} played card: ${card.cardData.name}`
  );
});

// simulate playing a card

character.hand[0] = character.deck[0];
character.selectCard(character.hand[0]);
character.activeCards.push(character.selectedCard!);

// test empowerment

character.selectedCard!.empowerLevel = 1;
character.playSelectedCard();
console.log(`character2's health: ${character2.stats.health}/${character2.characterData.baseStats.health}`)