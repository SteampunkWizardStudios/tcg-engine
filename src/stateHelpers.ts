import { Draft, produce } from "immer";
import GameState from "./GameState";

export function gameState(
  recipe: (draft: Draft<GameState>) => void
): (state: GameState) => GameState {
  return (state: GameState) => produce(state, recipe);
}