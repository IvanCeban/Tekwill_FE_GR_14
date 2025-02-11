
// for(initialization; condition; increment/decrement){
//     // code block to be executed
// }
let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let fruits = ['apple', 'banana', 'mango', 'orange', 'watermelon'];

let newArr = [];
// newArr.push(myArr[0]*2);
// newArr.push(myArr[1]*2);
// newArr.push(myArr[2]*2);
// newArr.push(myArr[3]*2);
// newArr.push(myArr[4]*2);

// console.log('newArr:', newArr);

for(let i = 0; i <= fruits.length - 1; i++){
    // console.log(fruits[i]);   
}

for(let i = 1; i <= myArr.length - 1; i = i + 2){
    newArr.push(myArr[i]*(i+1));  
    // newArr[i+2] = myArr[i]*2;
}
// for(let i = myArr.length - 1; i >= 0; i--){
//     newArr.push(myArr[i]*(i+1));  
//     // newArr[i+2] = myArr[i]*2;
// }

// console.log('newArr:', newArr);

let library = [
    'book0',
    ['book1', 'book2', 'book3'],
    ['book4', 'book5', 'book6'],
    ['book7', 'book8', ['book9', 'book10']],
]

// for(let i = 0; i < library.length; i++){
//     if(Array.isArray(library[i])){
//         for(let j = 0; j < library[i].length; j++){
//             if(Array.isArray(library[i][j])){
//                 for(let k = 0; k < library[i][j].length; k++){
//                     console.log( library[i][j][k]);
//                 }
//             } else {
//                 console.log( library[i][j]);
//             }
//         }
//     } else {
//         console.log(library[i]);
//     }
// }



// let lib = library.flat(Infinity)
// for(let i = 0; i < lib.length; i++){
//     console.log( lib[i]);
// }


// Object
{} // empty object
[] // empty array

let person = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'writing', 'coding'],
}

// console.log('person country:', person.address.city);
// console.log('person age:', person['age']);
// console.log('person age:', person.age);


person.address.city = 'Los Angeles';
person.age = 28;
// console.log('person city:', person);
// console.log('person city:', person.address.city);

let personKeys = Object.keys(person);
// console.log(personKeys);


let myCar = new Object();
myCar.make = 'Ford';
myCar['model'] = 'Mustang';
myCar.year = 1969;
myCar.makeSound = function(){
    console.log('Vroom Vroom');
}

myCar.makeSound();

let myNewCar = {}

myNewCar.make = "Ferrari";
myNewCar.model = 'F50';

// console.log(myNewCar);


let getCarProps = (propName) => {
    // console.log(myCar[propName]);
}

getCarProps('year');



var myObj = new Object(),
    str = 'name',
    randNum = Math.random(),
    obj = {};

myObj.type = 'Dot syntax';
myObj['date created'] = '11.02.2025';
myObj[str] = 'Leonardo';
myObj[randNum] = 'random number';
myObj[{}] = 'even an object';
myObj[''] = 'even an empty string';

// console.log(myObj[""]);


let student1 = {
    name: 'John',
    age: 25,
    address: {
        city: 'New York',
        country: 'USA'
    },
    hobbies: ['reading', 'writing', 'coding'],
    sayHello: function(){
        console.log('Hello, my name is', this.name);
    }
};

let student2 = {
    name: 'Bob',
    age: 23,
    address: {
        city: 'Indianapolis',
        country: 'USA'
    },
    hobbies: ['skiing', 'cycling', 'racing'],
    sayHello: function(){
        console.log('Hello, my name is', this.name);
    }
}
let student3 = {
    name: 'Elizabeth',
    age: 21,
    address: {
        city: 'Las Vegas',
        country: 'USA'
    },
    hobbies: ['dancing', 'hiking', 'music'],
    sayHello: function(){
        console.log('Hello, my name is', this.name);
    }
}


let students = [student1, student2, student3];
console.log(students);
// 1. Make each student say hello
let allHobbies = [];

let allCities = [];

for(let i = 0; i < students.length; i++){
    // students[i].sayHello();
    allHobbies.push(students[i].hobbies);
    allCities.push(students[i].address.city);

    students[i].age = students[i].age + 2;
}

// console.log(allHobbies.flat());
console.log(allCities[1]);
