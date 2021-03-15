// Given the array orders, which represents the orders that customers have done in a restaurant. 
// More specifically orders[i]=[customerNamei,tableNumberi,foodItemi] 
// where customerNamei is the name of the customer, tableNumberi is the table customer sit at, 
// and foodItemi is the item customer orders.

// Return the restaurant's “display table”. 
// The “display table” is a table whose row entries denote how many of each food item each table ordered. 
// The first column is the table number and the remaining columns correspond to each food item in alphabetical order. 
// The first row should be a header whose first column is “Table”, followed by the names of the food items. 
// Note that the customer names are not part of the table. 
// Additionally, the rows should be sorted in numerically increasing order.

var displayTable = function(orders) {
    
};

get table numbers into Array
make uniq and sort

get foods into Array
alphabetize
unshift "table"

at same time, put foods into object of objects
each food is a key, with an object as value, which has table numbers as keys, and counts as values

create Map() (or object) with food as key, value is array of arrays, with table number[0] and count[1]



