const CARDS = "cards";
export const FETCH_URL = `http://localhost:8080/api/${CARDS}/`;

export type TrumpCard = {
  id: string;
  name: string;
  image: string;
  powerstats: {
    intelligence: string;
    strength: string;
    speed: string;
    durability: string;
    power: string;
    combat: string;
  };
};
export type FetchGameResponse = Array<TrumpCard>;
export const NO_OF_CARDS = 7;

export const Powerstats = [
  "intelligence",
  "strength",
  "speed",
  "durability",
  "power",
  "combat",
] as const;
export type PowerstatsType = (typeof Powerstats)[number];

export type PowerstatsObj = {
  intelligence: string;
  strength: string;
  speed: string;
  durability: string;
  power: string;
  combat: string;
};
export const YOUR_TURN = "Your turn";
export const MY_TURN = "Robot's turn";
export const DRAW = "It's a draw";
export const PLAYER_WIN = "You win this game";
export const PC_WIN = "Robot wins this game";
export const PLAYER_ROUND_WIN = "You win this round";
export const PC_ROUND_WIN = "Robot wins this round";
export const PLAY_CARD_MSG = "Please play your card first";
