
// sort

// Array.sort()

let myArr = [1, 2, 5, 6, 3, 1, 3, 2, 7, 0]

let sortedArray = myArr.sort((a, b) => a - b)
// console.log(sortedArray);

let myArr2 = ['hello', 'people', 'apple', 'latte']
// console.log(myArr2.sort());

const products = [
    {
        name: 'Tablet',
        price: 800
    },
    {
        name: 'Laptop',
        price: 1000
    },
    {
        name: 'Phone',
        price: 500
    },
]

let productsSorted = products.sort((a, b) => a.name.localeCompare(b.name))
// console.log(productsSorted);


let students = [
    {
        name: 'Alex',
        age: 25
    },
    {
        name: 'Fred',
        age: 21
    },
    {
        name: 'Alexa',
        age: 21
    },
    {
        name: 'Lily',
        age: 20
    },
    {
        name: 'Tom',
        age: 23
    }
]

let sortedStudents = students.sort((a,b) => {

    let sortingLogic

    if(a.age === b.age) {
        sortingLogic = a.name.localeCompare(b.name)
    } else {
        sortingLogic = a.age - b.age
    }
    
    return sortingLogic
})


// Destructuring

let person = {
    name: 'Josh',
    age: 30,
    address: {
        country: 'USA',
        city: 'Palo Alto'
    },
    profession: 'teacher',
    salary: 100500
}

// let name1,
//     age,
//     city

// name1 = person.name
// age = person.age
// city = person.address.city

// let {name: personsName, age, address: {city: personsCity}} = person
let {name: personsName, age} = person

// console.log('name: ', personsName);
// console.log('age: ', age);
// console.log('city: ', personsCity);


// let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// let [first, second, , fourth] = week

// console.log('first: ', first);
// console.log('second: ', second);
// console.log('third: ', fourth);


// let func = (a, b, c) => {
//     console.log('a:', a);
//     console.log('b:', b);   
//     console.log('c:', c);   
// }

// func(1, 2, 3)

// Spread syntax ...

let numbers = [1, 2, 3]
let newNumbers = [...numbers, 4, 5]

// newNumbers.push(numbers)

// numbers.forEach(number => {
//     newNumbers.push(number)
// })

// newNumbers.push(4)
// newNumbers.push(5)


// console.log('newNumbers: ', newNumbers);

// [1, 2, 3, 4, 5]

let human = {
    name: 'Alice',
    age: 54,
    address: {
        city: '',
        country: ''
    },
    profession: 'pilot'
}

let newHuman = {city: 'London', ...human}

// console.log('human: ', human);
// console.log('newHuman: ', newHuman);

// Rest syntax ...

let week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// let [first, second, third, ...rest] = week
// console.log('first: ', first);
// console.log('second: ', second);
// console.log('rest: ', rest);

// let [...rest1] = week

// console.log('rest1: ', rest1);

// let anotherHuman = {
//     name,
//     age,
//     ...rest
// } = human

// console.log('name: ', name);
// console.log('age: ', age);
// console.log('rest: ', rest);

// name, age, rest


let orders = [
    {
        id: 1,
        customer: 'Bobby',
        items: ['laptop', 'phone'],
        total: 1500
    },
    {
        id: 2,
        customer: 'Silvester',
        items: ['mouse', 'pad'],
        total: 200
    },
    {
        id: 3,
        customer: 'Arnold',
        items: ['monitor', 'headphones'],
        total: 500
    },
    {
        id: 4,
        customer: 'Jean',
        items: ['bottle'],
        total: 10
    }
]

// ordersStructured = [{id, customer, details: {items, total}}]

// let ordersStructured = []

// orders.forEach(({id, customer, ...details}) => {
//     // let {id, customer, ...details} = order
//     let orderObj = {
//         id,
//         customer,
//         details
//     }
//     ordersStructured.push(orderObj)
// })

let ordersStructured = orders.map(({id, customer, ...details}) => ({
        id,
        customer,
        details
    })
)

let newOrder =  {
    id: 5,
    customer: 'Chuck',
    items: ['water'],
    total: 5
}

let updatedOrders = [...orders, newOrder]
console.log('updatedOrders: ', updatedOrders);

let sortedOrders = updatedOrders.sort((a, b) => a.total - b.total)

console.log('sortedOrders: ', sortedOrders);

let [first, , third, ...rest] = sortedOrders

console.log('first: ', first);
console.log('third: ', third);
console.log('rest: ', rest);

// 1, 3, rest
