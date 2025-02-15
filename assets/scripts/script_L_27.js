// For .. in loop
let obj = {
    name: 'John',
    age: 30,
    job: 'developer'
}

for (prop in obj) {
    // console.log(prop);
    // console.log(obj[prop]);
}

// For .. of loop
let arr = ['John', 'developer', 30]

// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for(element of arr) {
//     console.log(element);
// }

// forEach loop

arr.forEach(function(element, index, array){
    // code
});


let myArr = [1, 2, 3, 4, 5, 6];
for(let i = 0; i< myArr.length; i++){
    // console.log(myArr[i]);
}

myArr.forEach(function(el, index, arr){
    // console.log('el:', el);
})

// myArr.forEach((el) => console.log('el:', el))

// Map
// let myArr2 = [2, 4, 6, 8, 10];

// myArr = [1, 2, 3, 4, 5, 6];
// let myArr4 = [7, 2, 9, 4, 11, 6];
let myArr2 = [];

for(let i = 0; i < myArr.length; i++) {
    myArr2.push(myArr[i] * 2);
}

let myArr3 = [];
myArr.forEach((element) => myArr3.push(element * 2))

let myArr4 = myArr.map((el, index, arr) => {
    return index%2 === 0 ? el + arr.length : el;
})
// console.log('myArr4:', myArr4);

let numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach((el) => sum += el);

console.log(sum);

// Reduce

// array.reduce(func, intialValue)
// function(acccumulator, currentEl, index, arr){}

let summ = numbers.reduce((acc, curEl, index, arr) => {
   return acc + curEl
}, 0)


let students = [
    {
        name: 'Bobby',
        mark: 8
    },
    {
        name: 'Sarah',
        mark: 10
    },
    {
        name: 'Charlie',
        mark: 2
    },
    {
        name: 'Bill',
        mark: 6
    }
]

let medium = students.reduce((acc, curEl) => {
   return curEl.mark + acc
}, 0) / students.length


console.log('medium: ', medium);

var friends = [
    { name: "Anna", books: ["Bible", "Harry Potter"], age: 21 },
    { name: "Bob", books: ["War and peace", "Romeo and Juliet"], age: 26 },
    { name: "Alice", books: ["The Lord of the Rings", "The Shining"], age: 18 },
  ];
let books1 = [];
for (let i = 0; i < friends.length; i++) {
    books1 = books1.concat(friends[i].books)
    // for(let j = 0; j < friends[i].books.length; j++) {
    //     books1.push( friends[i].books[j])
    // }
}
console.log('books1', books1);

let books = friends.reduce((acc, curEl) => acc.concat(curEl.books), [])

console.log(books);
