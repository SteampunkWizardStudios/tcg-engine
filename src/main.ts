type GameState = { turn: number };

type Card = {
  name: string;
  description: (state: GameState) => string;
  onPlay: (state: GameState) => void;
};

const fireball = {
  name: "Fireball",
  description: (state: GameState) =>
    `Deal ${state.turn * 2 + 3} damage to all enemies.`,
  onPlay: (state: GameState) => {},
} satisfies Card;
