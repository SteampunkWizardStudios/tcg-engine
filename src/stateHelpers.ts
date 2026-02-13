import { Draft, produce } from "immer";
import GameState from "./GameState";

export type GameAction = (state: GameState) => GameState;

export function action(recipe: (draft: Draft<GameState>) => void): GameAction {
  return (state: GameState) => produce(state, recipe);
}

export function pipe(...actions: GameAction[]) {
  return (state: GameState) => {
    return actions.reduce((currentState, action) => {
      return action(currentState);
    }, state);
  };
}
