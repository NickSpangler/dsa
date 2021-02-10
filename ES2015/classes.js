//Classes are blueprints for creating objects with pre-defined properties and methods
//PRIMARILY SYNTACTICAL SUGAR -> just an easier syntax
//Implememnt a class for each kind of data structure as a class

//simple example of a class, using class constructor
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies =  0
    }

    //instance method
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }

    markLate(){
        this.tardies++
        return `${this.fullName()} has been late ${this.tardies} times.`
    }
}

let nick = new Person("Nick", "Spangler")

//Instance methods
    //functionality that pertains to a specific INSTANCE of a class
