import { CardData } from "@engine/CardData.js";
import { action, pipe, GameAction } from "@engine/gameAction.js";

export type Card = {
  data: CardData;
  play: GameAction;
};

export function createCard(data: CardData): Card {
  const play = pipe(
    action((g, emit) => {
      emit({ type: "cardPlayed", payload: { name: data.name } });
    }),
    data.onPlay,
  );

  return {
    data,
    play,
  };
}
