
class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name
    }
}

class AnotherPersonConstructor extends Person {
    constructor(name) {
        super(name)
    }
}

let person = new AnotherPersonConstructor('Mikel');

console.log(person.getName())

