type CardRankValue = "A" | "2"| "3"| "4"| "5"| "6"| "7"| "8"|
"9"| "10"| "J"| "Q"| "K";
type CardColour = "heart"| "spade"| "diamond"| "club";
type Card = [CardColour, CardRankValue];
type Deck = Card[];
type BetValue = 0 | 50 | 100 | 200;
type AceCount = 0 | 1 | 2 | 3 | 4;


export {CardRankValue, CardColour, Card, Deck, BetValue, AceCount}