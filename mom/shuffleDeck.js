// absolutely 1337h4xx0rz
var shuffleDeck = function(deck) {
  // Your code here
let len = deck.length;

  while (len !== 0) {
   let num = Math.floor(Math.random()*len);
   let next = deck[len-1];
   deck[len-1] = deck[num];
   deck[num] = next;
   --len;
  }
  return deck;
};

// Ordered deck generator provided for your testing convenience
var orderedDeck = function() {
  var suits = [ '♥', '♣', '♠', '♦' ];
  var values = [ 'A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K' ];
  var deck = [];
  suits.forEach(function(suit) {
    values.forEach(function(value) {
      deck.push(value + suit);
    });
  });

  return deck;
};

let deck1 = orderedDeck();
console.log(shuffleDeck(deck1));
// great success
[
  "9♥",
  "K♥",
  "7♣",
  "5♥",
  "J♥",
  "K♠",
  "3♥",
  "J♦",
  "6♠",
  "Q♦",
  "6♦",
  "7♦",
  "4♠",
  "3♦",
  "4♥",
  "3♠",
  "10♥",
  "4♣",
  "2♣",
  "10♠",
  "4♦",
  "Q♥",
  "A♣",
  "K♣",
  "Q♣",
  "9♦",
  "A♦",
  "Q♠",
  "9♣",
  "6♥",
  "A♥",
  "9♠",
  "J♣",
  "8♦",
  "5♠",
  "8♥",
  "7♥",
  "2♠",
  "10♣",
  "A♠",
  "6♣",
  "3♣",
  "2♥",
  "8♣",
  "J♠",
  "5♦",
  "2♦",
  "K♦",
  "5♣",
  "7♠",
  "10♦",
  "8♠",
];