// sum(10, 20);

// diff(10, 20);

// function sum(x, y) {
//     console.log(x + y);
// }

// let diff = () => {
//     console.log(x - y);
// }

var a = 1;

function f1() {
    console.log(a)
}

function f2() {
    var a = 2;
    var b = 3;
    f1();
}
f2()

console.log(b)
