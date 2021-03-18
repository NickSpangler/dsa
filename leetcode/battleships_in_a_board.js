console.log('fire!')

// Given an 2D board, count how many battleships are in it. 
// The battleships are represented with 'X's, 
// empty slots are represented with '.'s. 

// You may assume the following rules:
// You receive a valid board, made of only battleships or empty slots.
// Battleships can only be placed horizontally or vertically. In other words, 
// they can only be made of the shape 1xN (1 row, N columns) or Nx1 (N rows, 1 column), 
// where N can be of any size.
// At least one horizontal or vertical cell separates between two battleships 
// - there are no adjacent battleships.

var countBattleships = function(board) {
    
};

// iterate through all arrays
// five conditions:
//     if current spot is an X
//         if row above exists && if i of row above is NOT an X
//         && if index left of i exists && index left is NOT an X

// If all five of those are true, increment the count