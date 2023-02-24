export class Card {
  value: number = 0;
  type: string = "";
}
export class Hand {
  cards: Array<Card> = [];
  sortedCards: Array<Card> = [];
}