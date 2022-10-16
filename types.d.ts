type CardRankValue = "A" | "2"| "3"| "4"| "5"| "6"| "7"| "8"|
"9"| "10"| "J"| "Q"| "K";
type CardColour = "heart"| "spade"| "diamond"| "club";
type Card = [CardColour, CardRankValue];
type Deck = Card[];

export {CardRankValue, CardColour, Card, Deck}