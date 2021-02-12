//WHAT IS A STACK?
    //LIFO data strcture
    //LAST IN, FIRST OUT


//USE CASES FOR A STACK
    //Managing function invocations
    //Undo / Redo
    //Routing -> history object is treated like a stack

//IMPLEMENT OPERATIONS ON A STACK DATA STRUCTURE
//JAVASCRIPT DOES NOT HAVE ITS OWN STACK DATA STRUCTURE\

//Simply using an Array
let stack = []

stack.push('Google')
stack.push('Instagram')
stack.push('Youtube')

//if you are ONLY pushing and popping to retrieve the data, it is operating as a STACK!

stack.pop()
stack.pop()
stack.pop()

//ONLY DO IT THIS WAY. DO NOT SHIFT AND UNSHIFT!!!

