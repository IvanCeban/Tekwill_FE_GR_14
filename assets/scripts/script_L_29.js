
// function sum(a,b) {
//     return a+b
// }

// const sum2 = (a,b) => a+b;

//this
const person = {
    name: 'Phil',
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// person.greet()

const person2 = {
    name: 'Philipp',
    greet: () => {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// person2.greet()

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let john = new Person('John', 30)

// console.log('john', john);

const Person2 = (name, age) => {
    this.name = name;
    this.age = age;
}

// const bobby = new Person2('Bobby', 53)
// console.log('bobby: ', bobby);

function sum() {
    let total = 0;
    // console.log('args: ', arguments);

    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }

    return total;
}

// console.log( sum(1, 2, 3, 4, 5));


let sum2 = (...allnumbers) => {
    let total = 0;
    // console.log('args: ', allnumbers);
    
    for (let i = 0; i < allnumbers.length; i++) {
        total += allnumbers[i]
    }

    return total
}

// console.log(sum2(1, 2, 3, 4, 5));



// JSON

let students = [
    {
        name: 'John Doe',
        age: 20,
        faculty: 'IT'
    }
]

let apiResponse = `
                    {
                        "students": [
                            {
                                "name": "John Doe",
                                "age": 20,
                                "faculty": "IT"
                            },
                            {
                                "name": "John Boe",
                                "age": 22,
                                "faculty": "IT"
                            },
                            {
                                "name": "John Roe",
                                "age": 23,
                                "faculty": "IT"
                            }
                        ]
                    }
                `


// console.log('apiResponse: ', apiResponse);

let responseObj = JSON.parse(apiResponse)

// console.log('json: ', apiResponse);
// console.log('obj: ', responseObj);
// console.log('responseObj: ', responseObj.students[1].name);

// responseObj.students.forEach(element => {
//     console.log(element.name);
//     console.log(element.age);
//     console.log(element.faculty);
// });

responseObj.students.forEach(student => {
    student.age++;
    student.city = 'Chisinau'

    return student
})

// let newStudents = responseObj.students.map(student => {
//     student.age++;
//     student.city = 'Chisinau'

//     return student
// })

// console.log('responseObj: ', responseObj);

let apiRequest = JSON.stringify(responseObj);


// console.log('apiRequest: ', apiRequest);

// Closure

function counter() {
    var count = 0;

    function increment() {
        count++;
        console.log('Count: ', count);
    }

    function decrement() {
        count--;
        console.log('Count: ', count);
    }

    return {
        incrementFunc: increment,
        decrementFunc: decrement
    }
}

let counterInstance = counter();

// counterInstance.incrementFunc();
// counterInstance.incrementFunc();
// counterInstance.incrementFunc();
// counterInstance.decrementFunc();
// counterInstance.decrementFunc();
// counterInstance.decrementFunc();


const student = {
    id: 1,
    name: 'Chuck',
    age: 19,
    scores: {
        math: {
            min: 89,
            max: 99
        },
        english: 98,
        history: 27
    }
}

const student2 = {
    id: 1,
    name: 'Larry',
    age: 23,
    scores: {
        math: {
            min: 11,
            max: 22
        },
        english: 98,
        history: 27
    }
}

const student3 = {
    id: 1,
    name: 'Andy',
    age: 18,
    scores: {
        math: {
            min: 44,
            max: 99
        },
        english: 66,
        history: 22
    }
}

//city: 'Capetown'

let studentUpdated = {...student, city: 'Capetown'}

console.log('studentUpdated: ', studentUpdated);

let {name, scores: {math: {max: mathScore}}} = student
// mathScore
console.log('name: ', name);
// console.log('math: ', math);
console.log('scores: ', mathScore);

function addStudents(student, ...otherStudents) {
    // return [...arguments]
    return [student, ...otherStudents]     
}
const studentsList = addStudents(student, student2, student3)

console.log('studentsList: ', studentsList);

let request = JSON.stringify(studentsList)

console.log('request: ', request);

let response = JSON.parse(request)

console.log('response: ', response);