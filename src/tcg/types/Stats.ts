export type Stat = "health" | "attack" | "defense" | "speed";

type Stats = Record<Stat, number>;

export default Stats;
