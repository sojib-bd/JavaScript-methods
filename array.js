const arr = [2, 3, 4, 5];

let newArr = arr.every((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);

    return element < 10
});

//console.log(newArr);

var a = ['dog', 'cat', 'hen']
a[100] = 'fox'

//console.log(a.length) // 101

let months = ['January', 'February', 'March', 'April'];

months.sort();
console.log(months) // [ 'April', 'February', 'January', 'March' ]




