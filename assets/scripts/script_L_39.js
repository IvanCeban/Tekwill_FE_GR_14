const setCookie = (name, value, daysToExpire) => {
    let date = new Date();   
    console.log(date.toUTCString());
    
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    const expireDate = date.toUTCString();

    console.log(expireDate);

    document.cookie = name + '=' + value + ';'+'expires=' + expireDate;
    
}


setCookie('nameOfCookie', 'valueOfCookie', 7);
setCookie('Cookie2', '12345', 4);

// "nameOfCookie=valueOfCookie;expires=Thu, 27 Mar 2025 18:11:51 GMT"


function getCookie(name) {
    const cookies = document.cookie.split(';');

    console.log('cookies:', cookies);
    
    for(let i=0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if(cookie.startsWith(name+'=')) {
            return cookie.substring(name.length + 1)
        }
    }

    return null;
}

function deleteCookie(name) {
    const pastDate = 'Thu, 01 Jan 1970 00:00:00 UTC'
    document.cookie = `${name}=;expires=${pastDate}`
}

const myCookie = getCookie('Cookie2');
const myCookie2 = getCookie('nameOfCookie');


console.log('myCookie: ', myCookie);
console.log('myCookie: ', myCookie2);

deleteCookie('Cookie2');
const myCookie3 = getCookie('Cookie2');
console.log('myCookie: ', myCookie3);



localStorage.setItem('name1', 'Vasea Pupkin');
localStorage.setItem('name2', 'Vasea Pupkin');
localStorage.setItem('name3', 'Vasea Pupkin');
localStorage.setItem('name4', 'Vasea Pupkin 4');
localStorage.setItem('name5', 'Vasea Pupkin 1234');

// localStorage.clear();

// localStorage.removeItem('SecondName');
// localStorage.removeItem('Secon');

console.log(localStorage.length);
 
// let name = localStorage.getItem('name6');

// console.log('name: ', name);

// let key = localStorage.key(2);
// console.log('key: ', key);

let allKeys = [];
for(let i =0 ; i < localStorage.length; i++) {
    allKeys.push(localStorage.key(i))
}

console.log(allKeys);

let item = localStorage.getItem(allKeys[2])
console.log(item);


sessionStorage.setItem('sessionItem', 'value')
sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
sessionStorage.removeItem('IsThisFirstTime_Log_From_LiveServer');
// sessionStorage.clear()

console.log(sessionStorage.getItem('sessionItem'));


(function(){
    var a = b = 3;
  })();
  
  console.log(typeof a !== 'undefined');
  console.log(typeof b !== 'undefined');