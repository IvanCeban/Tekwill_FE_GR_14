
// var obj = { }
// var obj2 = new Object();


function Person(name, age, address, hobbies){
    this.name = name;
    this.age = age;
    this.address = address;
    this.hobbies = hobbies;
}

let john = new Person('John', 23, {city: 'New York', country: 'USA'}, ['reading', 'writing', 'coding']);
let mike = new Person('Mike', 25, {city: 'New York', country: 'USA'}, ['reading', 'writing', 'coding']);
let bob = new Person('Bob', 26, {city: 'New York', country: 'USA'}, ['reading', 'writing', 'coding']);

function Car(make, model, year, owner){
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
    this.presentYourself = carGreeting;
}

let johnsCar = new Car('Ford', 'Mustang', 1969, john);
let mikesCar = new Car('Chevy', 'Camaro', 1969, mike);
let bobsCar = new Car('Dodge', 'Charger', 1969, bob);


// console.log('myCar:', johnsCar);
// console.log('mikesCar:', mikesCar);
// console.log('bobsCar:', bobsCar);

Car.prototype.color = 'black';
bobsCar.color = 'red';

function carGreeting(){
    let greetingMessage = `Hello, I am a ${this.year} ${this.make} ${this.model} and my owner is ${this.owner.name}, I am ${this.color}`;
    // console.log(greetingMessage);
}

johnsCar.presentYourself();
bobsCar.presentYourself();
mikesCar.presentYourself();

// var Animal = {
//     type: 'Invertebrates',
//     displayType: function(){
//         console.log('Type:', this.type);
//     }
// }

// var animal1 = Object.create(Animal);
// console.log('animal1:', animal1);
// animal1.displayType();

// var fish = Object.create(Animal);
// fish.type = 'Fishes';
// fish.displayType();


function Owner(name, age) {
    this.name = name;
    this.age = age;
}

function makeNoise() {
    let noise;
    if(this.type === 'dog') {
        noise = 'bark'
    } else if(this.type === 'cat') {
        noise = 'meow'
    } else {
        noise = 'F*ck off!'
    }

    // console.log(noise);
}

let owner1 = new Owner('Vlad', 48);
let owner2 = new Owner('Danila', 70);
let owner3 = new Owner('Tatiana', 21);

function Pet(name, age, type, owner){
    this.name = name;
    this.age = age;
    this.type = type;
    this.owner = owner;
    this.makeNoise = makeNoise;
}

let pet1 = new Pet('Rick', 2, 'dog', owner1);
let pet2 = new Pet('Rick', 6, 'cat', owner3);
let pet3 = new Pet('Rick', 98, 'parrot', owner2);


// console.log('pet1', pet1);
// console.log('pet2', pet2);
// console.log('pet3', pet3);

pet1.makeNoise()
pet2.makeNoise()
pet3.makeNoise()

// console.log(Object.keys(pet1)); // keys
// console.log(Object.getOwnPropertyNames(pet2)); //getOwnPropertyNames
 //for..in

//  for(varName in objectName) {
//     code
//  }

// for(petProp in pet3) {
//     console.log(petProp);
// }

// let newArr = ['1', '2', '3', '4', '5']

// for(num in newArr) {
//     console.log(num);
// }

// console.log(pet3);

// delete pet3.age

// console.log(pet3);

// let fruit1 = {name: 'apple'}
// let fruit2 = {name: 'apple'}

// console.log(fruit1 === fruit2);

// let fruit3 = {name: 'pear'}
// let fruit4 = fruit3;

// fruit3.color = 'orange'
// console.log(fruit3 === fruit4);
// console.log('fruit3', fruit3);
// console.log('fruit4', fruit4);


// While loop

// while(condition) {
//     code
// }

// let i = 1;
// while(i <= 5) {
//     i++;
//     // console.log(i);  
// }

// Do .. While
// let j = 1;
// do {
//     j++;
//     console.log(j);  
//     break;
// } while (j <= 5)

let book = {
    title: 'LoTR',
    author: "Tolkin",
    pages: 100500,
    publishingHouse: {
        title: 'blahblah',
        address: {
            country: "China",
            city: "Hong-Kong"
        }
    }
}

let keys = Object.keys(book);
let keys2 = Object.keys(book.publishingHouse);
let keys3 = Object.keys(book.publishingHouse.address);
// console.log(keys, keys2, keys3);

let newArr = []

newArr.push(keys, keys2, keys3)

// console.log('newArr', newArr.flat(Infinity));
let newarr2 = newArr.flat(Infinity)

let i = 0;
do {
    console.log(newarr2[i]);
    i++;
} while (i < newarr2.length )