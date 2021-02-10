//Classes are blueprints for creating objects with pre-defined properties and methods
//PRIMARILY SYNTACTICAL SUGAR -> just an easier syntax
//Implememnt a class for each kind of data structure as a class

//simple example of a class, using class constructor
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    //instance method
    fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

let nick = new Person("Nick", "Spangler")

//Instance methods
    //functionality that pertains to a specific INSTANCE of a class
