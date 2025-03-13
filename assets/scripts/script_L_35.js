// 1. Regular expression  RegEx RegEx literal

const regex = /a/g;

// 2. RegEx constructor
const regex2 = new RegExp('a', 'g');

// /hello/

// 'i' - 'HelloWorld' || 'helloworld'
// 'g' - global

// 'hellohell'
// /h/g

// patterns
// '[abcd]' - any "a", "b", "c" or "d"
// '[a-z]' - any letter
// '[0-9]' - any digit
// '[^abc]' - any other, but not a,b,c
// '^' - string start
// '$' - string end

// 'HelloWorld'

// Metacharacters 
// '.' - any symbol, except new line
// '\d' - any digital symbol
// '\w' - any letter, any digit or _ 
// '\s' - space
// '\b' - break

// Match
const text = 'Call my number: 123-111-1233'
const phoneRegex = /\d{3}-\d{3}-\d{4}/;
const phoneNumber = text.match(phoneRegex)[0]

// console.log(phoneNumber);

const text2 = 'hello, contact me by email: myemail@gmail.com or anotheremail@yahoo.com';

// const emailRegex = /[\w.-]+@[\w]+\.[a-zA-Z]{2,4}/g
// const emailAdresses = text2.match(emailRegex)
// console.log(emailAdresses);

// const breakRegex = /\b/
const wholeWordRegex = /\bemail\b/g;
const break1 = text2.match(wholeWordRegex)
// console.log('break1: ', break1);

const text3 = 'I have 505 apples and 13 bananas';
const numbersRegex = /\d+/g

const numbers = text3.match(numbersRegex)
console.log(numbers);

let mySymbol = '+-'

const emailRegex = /^[a-zA-Z0-9._+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$/
const emailRegex2 = new RegExp(`^[a-zA-Z0-9._${mySymbol}]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,5}$`)

const email = 'tekwil.1234@gmail.com'

if(emailRegex.test(email)) {
    console.log('Email is correct');
} else {
    console.log('Email is incorrect');
}


const text4 = 'Today is a beautiful day'
const regexReplace = /beautiful/
const newText = text4.replace(regexReplace, 'wonderful');

console.log(text4);
console.log(newText);

const urlString = 'https://www.google.com'
const urlRegex = /^((http|https):\/\/)?w{3}\.[a-zA-Z0-9-_]+\.[a-z]{2,6}$/
const urlRegex2 = /^(https?):\/\/w{3}\.[a-zA-Z0-9-_]+\.[a-z]{2,6}$/

if(urlRegex.test(urlString)) {
    console.log('URL is correct');
} else {
    console.log('Url is incorrect');   
}

const textDate = 'Meeting on 12/05/2025. Report due by 2025-06-15. Another meeting on 01-07-2025'

// const dateRegex = /^(0?[1-2][1-9])(10)|(20)|(30)|(31)\/[0-9]{2}\/[0-9]{4}$/g

const dateRegex = /^(0?[1-9]|1[0-2])\/(0?[1-9]|[12]\d|3[01])\/\d{4}|(0?[1-9]|[12]\d|3[01])-(0?[1-9]|1[0-2])-\d{4}|\d{4}-(0?[1-9]|1[0-2])-(0?[1-9]|[12]\d|3[01])$/g;

const matches = textDate.matchAll(dateRegex);



for (const match of matches) {
    console.log("Extracted date:", match[0]);
   }
   