class PublicInstanceMethod {

    publicMethod() {
        return " I love coding"
    }
    anotherPublicMethod() {
        return "Hello developers"
    }
}

let publicInstance = new PublicInstanceMethod();

let anotherPublicInstance = new PublicInstanceMethod();

console.log(publicInstance.publicMethod()) // I love coding
console.log(anotherPublicInstance.anotherPublicMethod()) // Hello developers