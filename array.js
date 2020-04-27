const arr = [2, 3, 4, 5];

let newArr = arr.every((element, index, array) => {
    console.log(element);
    console.log(index);
    console.log(array);

    return element < 10
});

//console.log(newArr);

var a = ['dog', 'cat']
a[100] = 'fox'

//console.log(a.length)

