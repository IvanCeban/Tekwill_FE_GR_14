// Promise
// pending, resolved, rejected 

const promise = new Promise((resolve, reject) => {
    const result = 42;
    
    if(!!result) {
        resolve(result)
    } else {
        reject('Error')
    }
})

// const promise2 = new Promise((resolve, reject) => {
//     const error = 'Error';
    
//     if(!!error) {
//         reject(error)
//     } else {
//         resolve(result)
//     }
// })

// !!true = true
// !!123 = true
// !!0 = false
// !!'' = false

// console.log('Start');

const promise1 = new Promise((resolve, reject) => {
    // Async operation
    let result;
    // setTimeout(() => {
    //     console.log('Promis 1');
    // }, 500)

    result = 42;
    if(!!result) {
        resolve(result)
    } else {
        reject('Error')
    }
})

const promise2 = promise1.then((result) => {
    //Async action
    // setTimeout(() => {
    //     console.log('Promis 2');
    // }, 500)

    const result2 = 2;

    return result * result2;
})


promise2.then((result) => {
    // console.log('promise2 result: ', result);  
})

// console.log('Finish');


// Promise.all


document.addEventListener("DOMContentLoaded", function () {
    const imageUrls = [
        'https://img.freepik.com/free-photo/medium-shot-latin-people-training-outdoors_23-2151039433.jpg?t=st=1717513330~exp=1717516930~hmac=bcf80ea40fc5d1b737606a54131b27c53a6a016317e172f62520a715153bc671&w=1380',
        'https://img.freepik.com/premium-photo/full-length-woman-exercising-field_1048944-30351094.jpg?w=1380',
        'https://img.freepik.com/premium-photo/authentic-scenes-plus-size-males-playing-basketball_23-2150961227.jpg?w=1380'
        ];
        

    function downloadImage(imageUrl) {
        return new Promise((resolve, reject) => {
            const image = new Image();
            console.log('Image download');
            

            image.onload = () => resolve(image)
            image.onerror = (error) => reject(error)
            image.src = imageUrl
        })
    }

    const imageContainer = document.getElementById('image_container')

    const downloadAllImages = () => {
        const imagesToDownloadPromises = imageUrls.map(url => downloadImage(url))

        Promise.all(imagesToDownloadPromises)
            .then((images) => {
                console.log('Images were downloaded', images);

                images.forEach((image) => {
                    imageContainer.appendChild(image)
                })
            })
            .catch((err) => {
                console.log(err);
                
            })
    }


    // downloadAllImages();



// const image = document.getElementById('flag')
// const name = document.getElementById('name')
// const population = document.getElementById('population')

// console.log(image);

//     const fetchData = () => {
//         fetch('https://restcountries.com/v3.1/all')
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 const country = data[249]
//                 console.log('country', country);
                
//                 image.src = country.flags.svg
//                 name.innerText = country.name.official
//                 population.innerText = country.population
                
                
//             })
//             .catch(error => {
//                 console.log(error);
                
//             })
//     }
    
//     fetchData();

// });


//Fetch

// fetch(url, options)
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         // Show to user data
//         console.log(data);
        
//     })
//     .catch(error => {
//         console.log(error);

//         // if(error.code === 500) {
//         //     alert('Server is down')
//         // }
//     });


  fetch('https://jsonplaceholder.typicode.com/users/5')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network is down');
      }
      return response.json();
    })
    .then(userData => {
      return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network is down');
        }
        return response.json();
    })
    .then(postData => {
        console.log(postData);
    })
    .catch(error => {
      console.log(error);
    });

});