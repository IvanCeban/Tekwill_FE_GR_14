// DOM - Document Object Model

// Accessing the DOM
// document.getElementById('id')


document.addEventListener("DOMContentLoaded", function () {
   const btnTimeout = document.getElementById('btnTimeout');
   const btnInterval = document.getElementById('btnInterval');
   const btnStopInterval = document.getElementById('stopInterval');
   const btnStopTimeout = document.getElementById('stopTimeout');
   const btnMoveBlock = document.getElementById('moveBlock');
   const box = document.getElementById('box');

   btnTimeout.addEventListener('click', handleTimeout);
   btnInterval.addEventListener('click', handleInterval);
   btnStopInterval.addEventListener('click', stopInterval);
   btnStopTimeout.addEventListener('click', stopTimeout);
   btnMoveBlock.addEventListener('click', moveBlock);

   function handleTimeout(event) {
        setTimeout(() => {
            console.log('Hello world');
        }, 1000)
   }

   //setTimeout
   //setInterval

   function handleInterval(event) {
        setInterval(() => {
            console.log('Goodbye');
        }, 2000)
   }

   //clearTimeout(timeoutId)
   //clearInterval(intervalId)

   const displayMessage = () => {
     console.log('Message is displayed each 2 sec');   
    }

    // const myInterval = setInterval(displayMessage, 200);

   function stopInterval() {
        clearInterval(myInterval)
   }

   function stopTimeout() {
        clearTimeout(myTimeout)
   }

//    const myTimeout = setTimeout(() => {
//         console.log('Hey there');
        
//         clearInterval(myInterval)
//    }, 1000)
   

    const colorsList = ['red', 'green', 'blue', 'orange', 'cyan']

   function moveBlock() {
        let position = 0;
        let index = 0;
        const myInterval = setInterval(() => {
            position += 1;
            box.style.marginLeft = `${position}px`

            box.style.backgroundColor = colorsList[index]

            index = (index + 1)%colorsList.length;

            // index += 1;
            // if(index === 4) {
            //     index = 0;
            // }
        }, 10)

        setInterval(() => {
            clearInterval(myInterval)
        }, 2000)
   }

   
//    console.log('Start');
//    setTimeout(() => {
//     console.log('Timeout');
//    }, 0)
//    console.log('End');
//    for(let i=0; i < 500; i++) {
//     console.log('Index ' + i);
//    }

//    console.log('start');
//    setTimeout(() => {
//     console.log('timeout');
//    }, 2000) 
//    setInterval(() => {
//     console.log('Interval');
    
//    }, 500)
   
    // console.log('Start');

    // setTimeout(() => {
    //     console.log('Timeout');    
    // }, 0);

    // // while (true) {}

    // console.log('End');


    // console.log('Start');

    // function doTask() {
    //     for(let i=0; i<3; i++) {
    //         console.log('Iteration number: ' + i);
    //     }
    // }
    
    // doTask();

    // console.log('End');
    
    
    // let response = 'Waiting for response';
    // console.log('Start');
    
    // function doAsyncTask(callback) {
    //     setTimeout(() => {
    //         console.log('Async task');
    //         response = 'Response from server';
    //         callback();
    //         // callback(response);
    //     }, 2000);
    // }

    // function handleResponse() {
    //     console.log(response);
    // }

    // // finish();
    // doAsyncTask(handleResponse);

    // console.log('Continue execution');

});

// innerText

// faculties
// departments
// students
// parents
// job

// 

// request faculties
// // handle faculties size


let counter = 0;


function doSomething(callback) {
    setTimeout(() => {
        counter = 1;
        console.log(counter);
        
        callback();
    }, 1000)
}

function doSomethingElse(callback) {
    setTimeout(() => {
        counter = 2;
        console.log(counter);
        callback();
    }, 2000)
}

function doSomethingElseAgain(callback) {
    setTimeout(() => {
        counter = 3;
        console.log(counter);

        callback();
    }, 3000)
}

doSomething(() => {
    doSomethingElse(() => {
        doSomethingElseAgain(() => {
            console.log(counter);
        })
    })
})



// API - Application Programming Interface

// SOAP - Simple Object Access Protocol

// RPC - Remote Procedure Call

// REST - Representational State Transfer

// GET, POST, PUT, DELETE
// www.example.com/api/v1/faculties/getFaculties

// JSON {"key": "value"}

// Websocket API 

// HTTP - HyperText Transfer Protocol 
// HTTPS - HyperText Transfer Protocol Secure
// TLS/SSL - Transport Layer Security/Secure Sockets Layer

// HTML - HyperText Markup Language
