import Card from "@class/Card";

type CardData = {
	name: string;
	onPlay?: (this: Card) => void;
}

export default CardData;