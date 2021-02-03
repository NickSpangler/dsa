 //A simple example of recursion

 function countDown(num) {
     //ESTABLISH YOUR BASE CASE AND WHAT SHOULD HAPPEN WHEN IT IS HIT
     if (num <= 0) {
         console.log('All done!')
         return
     }
     //THIS IS WHAT EACH ITERATION WILL DO
     console.log(num);

     //HERE IS WHERE YOU CHANGE THE INPUT AND CALL THE FUNCTION AGAIN
     num--
     countDown(num)
 }

 countDown(10)