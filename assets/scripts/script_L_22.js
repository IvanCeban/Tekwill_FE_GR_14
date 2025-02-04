// +

var a = 5;
var b = 7;
var sum = a + b;
// console.log(sum);

// -
var a = 65;
var b = 7;
var dif = a - b;
// console.log(dif);

// NaN = Not A Number

var a = 5;
var b = 7;
var mult = a * b;
var div = a / b;
// console.log(mult);
// console.log(div);

// % - остаток от деления
var a = 12;
var b = 3;
var mod = a % b;
// console.log(mod);

// ++ / --
var a = 5;
a++;
// a = a + 1;
var b = 2;
b--;
// b = b - 1;
// console.log(a);
// console.log(b);

// ** - возведение в степень
var a = 3;
var b = 2;
var pow = a ** b;
// console.log(pow);

// == - абстрактное равенство
var a = '5';
var b = 5;
// console.log(a == b);

// === - строгое равенство
var a = '5';
var b = 5;
// console.log(a === b);

// != - абстрактное неравенство
var a = '5';
var b = 5;
// console.log(a != b);

// ! - отрицание
var a = 5;
var b = 6;
// console.log(!(a > b));
// console.log((a >= b));
// console.log((a <= b));

// += / -= / *= / /= / %= - операторы присваивания
var a = 5;
var b = 7;

var result = a += b;
// a = a + b;
// console.log(result);

var a = 5;
var result = a -= b;
// a = a - b;
// console.log(result);

var a = 5;
var result = a *= b;
// a = a * b;
// console.log(result);

var a = 5;
var result = a /= b;
// a = a / b;
// console.log(result);


// sqrt - квадратный корень
// var a = 16;
// var result = Math.sqrt(a);
// console.log(result);

// Priority
var a = 5;
var b = 7;
var c = 10;
var d = 3;

var result = a + b * c - d;
// console.log(result);


// if / else

let age = 8;
const MINAGE = 18;
const MAXAGE = 100;
let isOldEnough = age >= MINAGE;
// console.log('Is person old enough? ', isOldEnough);

if(!isOldEnough) {
    let yearsLeft = MINAGE - age;
    // console.log(`You can not vote. wait for ${yearsLeft} years`);
} else if (age >= MAXAGE) {
    // console.log('You are too old to vote');
} else {
    // console.log('You can vote');
}

// NaN - Not A Number

var a = 5;
var b = ['text'];
var sum = a / b;
// console.log(NaN * 5);

// type conversion

// console.log('1: ', typeof 'text');
// console.log('2: ', typeof 5);
// console.log('3: ', typeof NaN);
// console.log('4: ', typeof false);
// console.log('5: ', typeof ['5', '6', '7']);
// console.log('6: ', typeof {'5': 5});
// console.log('7: ', typeof new Date());
// console.log('8: ', typeof null);
// console.log('9: ', typeof myCar);
// console.log('10: ', typeof function(){});

var x = new Date();
// console.log('x: ', x);
// console.log('x: ', x.toString(), typeof x.toString());

var x = '12.6';
// console.log('x: ', x);
// console.log('x: ', Number(x), typeof Number(x));
// console.log('x: ', parseFloat(x), typeof parseFloat(x));
// console.log('x: ', parseInt(x), typeof parseInt(x));

var x = '5';
var y = + x;
// console.log('y: ', y, typeof y);

var x = false;
var y = + x;
// console.log('y: ', y, typeof y);

var x = new Date();
var y = + x;
// console.log('x: ', x, typeof x);
// console.log('y: ', y, typeof y);

var year = '2020';
// console.log(year + 10);


// Truthy & Falsy
// falsy: false, 0, '', null, undefined, NaN
var z = null;


if (z) {
    // console.log('true');
} else {
    // console.log('false');
}

// AND &&
var a = false;
var b = true;
var c = true;

// console.log(a && b && c);

 var studentAge = 19;
 var hasDriverLicense = false;

 if(studentAge >= 18 && hasDriverLicense) {
    //  console.log('You can drive');
 } else {
    // console.log('You can not drive');
 }

 // OR ||

    var a = false;
    var b = false;
    var c = false;
    console.log(a || b || c);
    
    var studentAge = 19;
    var hasParentConsent = true;
    var hasNoDebtAtSchool = true;

    if((studentAge >= 18 || hasParentConsent) && hasNoDebtAtSchool) {
        console.log('You can go to concert');
    } else {
        console.log('You can not go to concert');
    }

    var myBudget = 2000;
    var carPrice = 3000;
    var canGetCredit = false;
    var haveDebt = false;

    var iCanGetACar = (myBudget >= carPrice) || (canGetCredit && !haveDebt);

    if(iCanGetACar) {
        console.log('I can buy a car');
    } else {
        console.log('I can not buy a car');
    }