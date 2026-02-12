import { CardData } from "./CardData";
import { action, pipe } from "./stateHelpers";
export const logScore = (message: string) =>
  action((g) => {
    console.log(`${message}: ${g.score}`);
  });
export const incrementTurn = () =>
  action((g) => {
    g.turn += 1;
  });

export const playTurn = (card: CardData) =>
  pipe(card.onPlay, incrementTurn(), logScore(`After playing ${card.name}`));
