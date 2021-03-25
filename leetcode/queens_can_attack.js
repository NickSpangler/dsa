console.log('attack!')

// On an 8x8 chessboard, there can be multiple Black Queens and one White King.

// Given an array of integer coordinates queens that represents the positions of the Black Queens, 
// and a pair of coordinates king that represent the position of the White King, 
// return the coordinates of all the queens (in any order) that can attack the King.

var queensAttacktheKing = function(queens, king) {
    let kingRow = king[0], kingColumn = king[1]
    let rows = {}, columns = {}

    for (queen of queens) {
        let queenRow = queen[0], queenColumn = queen[1]

        if (queenRow === 5) console.log('WTF its a 5')
        rows[queenRow] ? rows[queenRow].push(queenColumn) : rows[queenRow] = [queenColumn]
        columns[queenColumn] ? columns[queenColumn].push(queenRow) : columns[queenColumn] = [queenRow]
    }
    console.log(rows)
    console.log(columns)

    
};

// create map of all queens

// use rows as keys, with an array of columns as the values

// use columns as keys, with an array of rows as the values

// search in all four directions, starting from King and moving outward

queensAttacktheKing(queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3])