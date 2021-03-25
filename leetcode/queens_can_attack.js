console.log('attack!')

// On an 8x8 chessboard, there can be multiple Black Queens and one White King.

// Given an array of integer coordinates queens that represents the positions of the Black Queens, 
// and a pair of coordinates king that represent the position of the White King, 
// return the coordinates of all the queens (in any order) that can attack the King.

var queensAttacktheKing = function(queens, king) {
    let results= []
    let kingRow = king[0], kingColumn = king[1]
    let rows = {}, columns = {}

    for (queen of queens) {
        let queenRow = queen[0], queenColumn = queen[1]
        rows[queenRow] ? rows[queenRow].push(queenColumn) : rows[queenRow] = [queenColumn]
        columns[queenColumn] ? columns[queenColumn].push(queenRow) : columns[queenColumn] = [queenRow]
    }

    //check right
    for (let i = kingColumn + 1; i < 8; i++) {
        if (rows[kingRow] && rows[kingRow].includes(i)) {
            results.push([kingRow, i])
            break
        }
    }
    //check left
    for (let i = kingColumn - 1; i >= 0; i--) {
        if (rows[kingRow] && rows[kingRow].includes(i)) {
            results.push([kingRow, i])
            break
        }
    }
    //check up
    for (let i = kingColumn - 1; i >= 0; i--) {
        if (columns[kingColumn] && columns[kingColumn].includes(i)) {
            results.push([i, kingColumn])
            break
        }
    }
    //check down
    for (let i = kingColumn + 1; i < 8; i++) {
        if (columns[kingColumn] && columns[kingColumn].includes(i)) {
            results.push([i, kingColumn])
            break
        }
    }
    console.log(results)
};

// create map of all queens

// use rows as keys, with an array of columns as the values

// use columns as keys, with an array of rows as the values

// search in all four directions, starting from King and moving outward

queensAttacktheKing(queens = [[0,0],[1,1],[2,2],[3,4],[3,5],[4,4],[4,5]], king = [3,3])
// queensAttacktheKing(queens = [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]], king = [3,4])