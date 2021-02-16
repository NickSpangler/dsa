//In a deck of cards, every card has a unique integer.  You can order the deck in any order you want.

// Initially, all the cards start face down (unrevealed) in one deck.

// Now, you do the following steps repeatedly, until all cards are revealed:

// Take the top card of the deck, reveal it, and take it out of the deck.
// If there are still cards in the deck, put the next top card of the deck at the bottom of the deck.
// If there are still unrevealed cards, go back to step 1.  Otherwise, stop.
// Return an ordering of the deck that would reveal the cards in increasing order.

// The first entry in the answer is considered to be the top of the deck.

var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a-b)
    let mid = Math.ceil(deck.length / 2)
    let smaller = deck.slice(0, mid)
    let bigger = deck.slice(mid)
    let biggest = bigger.pop()
    bigger.reverse()
    console.log(bigger)
    let newDeck = []
    console.log(deck)
    console.log(smaller)
    console.log(bigger)
    for (let i = 0; i < smaller.length; i++) {
        newDeck.push(smaller[i])
        bigger[i] && newDeck.push(bigger[i])
    }
    console.log(newDeck)
};

//highest needs to start second to last (if odd or even?)
//order deck
//split in half
//reverse higher half (minus highest number)
//merge smaller and reversed higher half
//add largest number at the end (if odd or even?)

deckRevealedIncreasing([17,13,11,2,3,5,7])