//Define Binary Heap
    //Very similar to binary search tree, but with different rules
    //MaxBinaryHeap - parent nodes are always larger than child nodes
    //MinBinaryHeap - parent nodes are always smaller than child nodes

    //each parent can have at most two child nodes
    //binary heap is AS COMPACT AS POSSIBLE
    //All children of each node are as full as they can be, left children filled first

//Compare and Contrast min and max heaps

//implement methods on heaps

//Where are heaps useful in the real world? And what other data
//structures can be constructed from heaps?

//REPRESENTING A BINARY HEAP AS AN ARRAY:
    //For any index of an array n...
    //LEFT child is stored at 2n + 1
    //RIGHT child is stored at 2n + 2
    //To find PARENT of a node, its index is Math.floor((n-1)/2)