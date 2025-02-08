
// Array
// var myArray = [1, 2, 3, 4, 5];
// console.log('myArray:', myArray);
// console.log('myArray:', typeof myArray);

// let indexFormula = 4 - 1;
// let singers = ['John', 'Paul', 'George', 'Ringo'];
// console.log('singers:', singers);
// console.log('singers:', singers[singers.length - 1]);
// console.log('singers amount: ', singers.length);

// let array = ['hello', 'world'];
// let array2 = [[1,2,3], 2, [4,5,6], 'hello', [7,8,9]];
// let firstElement = array2[1];
// console.log('array:', array2[array2.length - 2][1]);

// Push & Unshift
var fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
// console.log('fruits:', fruits);
fruits.push('mango');
fruits.push('apricot');
fruits.push(['plum']);
// console.log('fruits:', fruits);
fruits.unshift('pear');
// console.log('fruits:', fruits);

// Pop & Shift

var fruits = ['apple', 'banana', 'orange', 'pineapple', 'plum', 'grape', 'kiwi'];
// let lastElement = fruits.pop();
// console.log('lastElement:', lastElement);
// console.log('fruits:', fruits);
// let firstElement = fruits.shift();
// console.log('firstElement:', firstElement);
// console.log('fruits:', fruits);

let myAppleIndex = fruits.indexOf('orange');
// console.log('myAppleIndex:', myAppleIndex);

let ifTHereIsApple = fruits.includes('pineapple');
// console.log('ifTHereIsApple:', ifTHereIsApple);


var numbers = [1, 2, 3, 4, 5, 6, 4, 5, 1, 2, 9];
let moreThanSix = numbers.find((myEl) => {
    return myEl > 6;
})
let shortFruitName = fruits.find((fruit) => {
    return fruit.length === 6;
});

const fiveLettersFruits = fruits.filter((fruit) => {
    return fruit.length === 6;
})

let shortFruitsArray = fruits.slice(-4, -2);

// Concat
let fruits1 = ['apple', 'banana', 'orange'];
let fruits2 = ['grape', 'kiwi', 'pineapple'];
let fruits3 = ['mango', 'apricot', 'plum'];
let allFruits = fruits2.concat(fruits1).concat(fruits3);
// console.log('allFruits:', allFruits);

let entries = fruits.entries();
// console.log('entries:', entries);
// console.log('entries:', entries.next().value);
// console.log('entries:', entries.next().value);
// console.log('entries:', entries.next().value);
// console.log('entries:', entries.next().value);


var numbers = [[4, 3, 4], [5, 6, 4], [5, 1, 2], [9]];
let areAllEmenentsPositive = numbers.every((el) => {
    return el.length === 3;
});

// console.log('areAllEmenentsPositive:', areAllEmenentsPositive);


var numbers = [1, 2, 3, 4, 5, 6, 4, 5, 1, 2, 3]; 

// let filledArray = numbers.fill(0, 3, 8);
// let filledArray = numbers.fill(6, 3);
// let filledArray = numbers.fill(6, 3, 4);
// // console.log('filledArray:', filledArray);

let findIndex = numbers.findIndex((el) => {
    return el == 5;
});

let findLastIndex = numbers.findLastIndex((el) => {
    return el == 5;
});

// console.log('findIndex:', findIndex);
// console.log('findLastIndex:', findLastIndex);

let find = numbers.find((el) => { 
    return el > 3;
});
let findLast = numbers.findLast((el) => { 
    return el > 3;
});



var newArray = [1, 2, 3, [4, 5, [6, 7, 8, [9, 10]]]];
// console.log('newArray:', newArray);
// console.log('newArray:', newArray.flat(Infinity));

// console.log(Array.isArray('hello'));

// console.log(newArray.flat(Infinity).reverse());

// console.log(fruits.some((el) => el === 'apple'));

// var num = [5, 2, 1, 4, 3, 9, 7, 8, 6];

// console.log('num:', num.sort().reverse());

// console.log('fruits:', fruits.sort().reverse());

console.log('fruits:', fruits);
fruits.splice(0, 0, "pear", "peach");
console.log('fruits:', fruits);

console.log('fruits:', typeof fruits.join(' /-/ '));

let myString = 'hello world, have a nice day';
let myArray = myString.split(',');
console.log('myArray:', myArray);
