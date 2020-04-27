function difference(a, b) {
    return a - b;
}

const result1 = difference(3, 5);
const result2 = Math.abs(difference(3, 5));

// console.log("result1 = ", result1) // result1 =  -2
// console.log("result2 = ", result2) // result2 =  2


//some behavior 

Math.abs('-1')  // 1
Math.abs(-2)   // 2
Math.abs('')   // 0
Math.abs([])   // 0
Math.abs([2])  // 2
Math.abs([1, 2]) // NaN
Math.abs({})    //NaN
Math.abs('string') //NaN
Math.abs()       //NaN

//Math.exp()
console.log(Math.exp(1)) // 2.718281828459045
console.log(Math.exp(-1)) // 0.36787944117144233
console.log(Math.exp(2)) // 7.38905609893065
