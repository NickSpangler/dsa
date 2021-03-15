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
    let tables = [], foods = [], obj = {}
    for (order of orders) {
        console.log(order)
        tables.push(order[1])
        foods.push(order[2])

        if (!obj[order[2]]) {
            obj[order[2]] = {[order[1]]: 1}
        } else {
            obj[order[2]][order[1]] ? obj[order[2]][order[1]]++ : obj[order[2]][order[1]] = 1         
        }
    }
    console.log(tables)
    console.log(foods)

    tables = [...new Set(tables)].sort((a,b) => a - b)
    console.log(tables)

    foods = [...new Set(foods)].sort()
    console.log(foods)

    foods.unshift('Table')
    console.log(foods)

    console.log(obj)
};

displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]])

// get table numbers into Array
// make uniq and sort

// get foods into Array
// alphabetize
// unshift "table"

// at same time, put foods into object of objects
// each food is a key, with an object as value, which has table numbers as keys, and counts as values

// iterate over table numbers Array, creating a NEW array on each iteration, and push this newly created array
// into the results array



