// switch(expression) {
//     case x:
//         // code block x
//         break;
//     case y:
//         // code block y
//         break;
//     default:
//         // code block default
//         break;
// }

// if (expression = x) {
//     // code block x
// } else if (expression = y) {
//     // code block y
// } else {
//     // code block default
// }

// let day = 'Friday';

// if (day === "Monday") {
//     console.log('I go for a walk');
// } else if (day === "Tuesday") {
//     console.log('I walk my dog');
// } else if (day === "Wednesday") {
//     console.log('I go to swim');
// } else if (day === "Thursday") {
//     console.log('I go for a cofee');
// } else if (day === "Friday") {
//     console.log('I do my homework');
// } else if (day === "Saturday") {
//     console.log('I meet my friends');
// } else if (day === "Sunday") {
//     console.log('I do my housework');
// } else {
//     console.log('There is no such day');
// }


// switch(day) {
//     case "Monday":
//     case "Tuesday":
//     case "Wednesday":
//     case "Thursday":
//     case "Friday":
//         console.log('I walk my dog');
//         break;
//     case "Saturday":
//         console.log('I meet my friends');
//         break;
//     case "Sunday":
//         console.log('I do my housework');
//         break;
//     default:
//         console.log('There is no such day');
//         break;
// }



// Ternary operator

// let age = 18;
// let sex = 'F';
// let isAdult;
// if(age >= 18) {
//     isAdult = 'Yes';
// } else {
//     isAdult = 'No';
// }

// let isAdultTernary = 
//     age >= 18 
//         ? sex ='F' 
//             ? 'Yes, woman'
//             : 'Yes, man' 
//         : 'No';

// console.log('Is he adult? ', isAdult);
// console.log('Is he adult? ', isAdultTernary);


// ES6 == ECMAScript 6 == ECMAScript 2015 == JavaScript == JS

// Deprecated

// Changelog

// Function
// function noiseCountFunc() {
//     let noiseCount = 3;
//     noiseCount++;
//     noiseCount++;
//     noiseCount++;

//     return noiseCount;
// }

// function makeNoise() {
//     let noise = 'Bing!';
//     let count = noiseCountFunc();

//     let text = `${noise} ${count} times`;
//     console.log(text);
//     bark();
// }

// let animal = 'cat';
// if(animal === 'dog') {
//     bark(); 
// } else if(animal === 'cat') {
//     meow();
// }

// makeNoise();

// function bark() {
//     console.log('Woof!');
// }
// function meow() {
//     console.log('Meow!');
// }


// function sum(a, b, c, d) {
//     return a + b + c + d;
// }
// function volume(width, height, depth) {
//     return width * height * depth;
// }

// let box1 = volume(2, 3, 4);
// let box2 = volume(3, 4, 5);
// let box3 = volume(4, 5, 6);

// console.log(box1);
// console.log(box2);
// console.log(box3);

// const ringFunc = function() {
//     console.log('din-don');
// }

// ringFunc()


// function bark(voice = 'Meow', times = 3.5) {
//     console.log(voice.repeat(times));
// }

// bark('Woof ', 5.5);


// Arrow function

const bark = (times = 3) => {
    console.log('Woof!'.repeat(times));
}

bark(7);

