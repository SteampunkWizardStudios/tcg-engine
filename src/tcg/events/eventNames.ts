type EventName =
  | "game:turnStart"
  | "game:turnEnd"
  | "player:statChange"
  | "player:selectedCard"
  | "card:drawn"
  | "card:played"
  | "card:discarded";

export default EventName;
