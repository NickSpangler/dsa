//Two ways to traverse a tree

//BREADTH FIRST
    //Go across the treet first

//DEPTH FIRST SEARCH
    //IN ORDER
    //PRE ORDER
    //POST ORDER

// BFS or DFS?

// Time complexity is the same. We are visiting each node once. 
//But structure of the tree matters. 
    // A WIDE tree will take up less memory if you use DFS
        // (because ustin BFS, you must store all children of a level at once)
    // A DEEP tree will take up less memory using BFS
        //(because if you go way deep, you must hold on to all previous nodes before coming back up)

//PRE POST and IN Order DFS
    //INOrder will return all the values IN ORDER!

    //Pre Order is good to clone or duplicate a tree. Make the first value the root, and you can reconstruct

    //