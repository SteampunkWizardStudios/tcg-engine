import Card from "@class/Card";
	
type CardData<EmpowerArgs extends Record<string, number> = {}> = {
  name: string;
  empower?: EmpowerArgs;
  onPlay: (this: Card, empower: EmpowerArgs) => void;
};

// typescript moment
export function defineCard<EmpowerArgs extends Record<string, number>>(card: CardData<EmpowerArgs>): CardData<EmpowerArgs> {
  return card;
}

export default CardData;