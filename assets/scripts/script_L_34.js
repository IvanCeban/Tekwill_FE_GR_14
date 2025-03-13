// Async / Await

async function func() {
    return 1;
}

async function func2() {
    return Promise.resolve(1);
}

// let value = await promise
// console.log(func());
// console.log(func2());

// func().then(alert)

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Ready'), 2000)
    });

    let result = await promise;

    console.log(result);   
}


// fetch('https://jsonplaceholder.typicode.com/users/5')
//     .then(response => {
//       if (!response.ok) {
//         throw new Error('Network is down');
//       }
//       return response.json();
//     })
//     .then(userData => {
//       return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`)
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network is down');
//         }
//         return response.json();
//     })
//     .then(postData => {
//         console.log(postData);
//     })
//     .catch(error => {
//       console.log(error);
//     });


const getPosts = async () => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users/5');        
        if (!response.ok) throw new Error(`User fetch failed: ${response.status}`);

        let user = await response.json();

        let postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
        if (!postsResponse.ok) throw new Error(`Posts fetch failed: ${postsResponse.status}`);

        let posts = await postsResponse.json();
        console.log(posts);
        
    } catch(error) {
        console.error(error);
        alert(error.message); // Now alerts on 404 errors
    }
};

getPosts();


// (async () => {
//     let response = await fetch('https://jsonplaceholder.typicode.com/users/5')
//     let user = await response.json()

//     console.log(user);
    
// })()

// async function f2() {
//     await Promise.reject(new Error('Error occured'))
// }

// async function f3() {
//     await new Error('Error occured');
// }

// async function f4() {
//     try {
//         let response = await fetch('/wrong-url');
//         let result = await response;        
//     } catch(error) {
//         alert(error)
//     }
// }

// f4()

// console.log('Start');

// const promise1 = new Promise((resolve, reject) => {
//     console.log(1);

//     resolve(2);
// })

// promise1.then(res => {
//     console.log(res);
// })

// console.log('End');


// console.log('Start');

// const promise2 = new Promise((resolve, reject) => {
//     console.log(1);
//     resolve(2)
//     console.log(3);
// })

// promise2.then(res => {
//     console.log(res);
// })

// console.log('End');


// console.log('Start');

// const promise3 = new Promise((resolve, reject) => {
//     console.log(1);
// })

// promise3.then(res => {
//     console.log(2);
// })

// console.log('End');

// console.log('Start');

// setTimeout(() => {
//     console.log('setTimeout');
// }, 0)

// Promise.resolve().then(() => {
//     console.log('resolve');
// })

// console.log('End');

