import { Draft, produce } from "immer";
import GameState from "./GameState";

export type GameAction = (state: GameState) => GameState;

export const action =
  (recipe: (draft: Draft<GameState>) => void) => (state: GameState) =>
    produce(state, recipe);

export const pipe =
  (...actions: GameAction[]) =>
  (state: GameState) =>
    actions.reduce((currentState, action) => action(currentState), state);
