let person = {
    firstName: 'John',
    lastName: 'smith',
    age: 25,
    greeting: function () {
        return "Hello " + this.firstName + "" + this.lastName;
    }
}

//Object.assign() Method

const person2 = Object.assign(person);

//console.log(person2)

let target = { a: 1, b: 2 }
let source = { b: 3, c: 4 }

const copyObj = Object.assign(target, source);

//console.log(copyObj) //{ a: 1, b: 3, c: 4 }

let obj = { name: "John" };

let clonedObj = Object.assign({}, obj);

//console.log(clonedObj) // { name: 'John' }

obj.name = "Khan";

//console.log(clonedObj)



let personName = { name: "Mikel" }
let personAge = { age: 25 }
let personOccupation = { job: 'web developer' }

let createPerson = Object.assign(personName, personAge, personOccupation);

//console.log(createPerson)  // { name: 'Mikel', age: 25, job: 'web developer' }


let product = {
    category: 'laptop',
    brand: 'ASUS',
    price: 50000
}

Object.freeze(product);

product.brand = "DELL";

product.weight = '50KZ' // try to add new property

console.log(product.brand) // ASUS

console.log(product)  // { category: 'laptop', brand: 'ASUS', price: 50000 }


let product2 = {

    category: 'Mobile',
    brand: 'Vivo',
    price: 20000
}

Object.seal(product2);

product2.brand = "Samsung";

product2.color = "blue" // adding new property to the object

console.log(product2.brand) // Samsung
console.log(product2) //{ category: 'Mobile', brand: 'Samsung', price: 20000 }