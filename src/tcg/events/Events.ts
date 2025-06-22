import Card from "@class/Card";
import { Stat } from "@type/Stats";

type GameEvents = {
  turnStart: [];
  turnEnd: [];
};

type CharacterEvents = {
  hpChange: [{ change: number }];
  statChange: [{ type: Exclude<Stat, "health">; change: number }];
  cardAddedToDeck: [{ card: Card }];
  cardDrawn: [{ card: Card }];
  cardActivated: [{ card: Card }];
  cardSelected: [{ card: Card }];
  cardPlayed: [{ card: Card }];
  cardDiscarded: [{ card: Card }];
  cardRemovedFromDeck: [{ card: Card }];
};

type Events = GameEvents & CharacterEvents;

export type Event = keyof Events;

export default Events;
