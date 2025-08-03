// const loadData = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => console.log(res))
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => console.log(err));
// }
// loadData();

// const { captureOwnerStack } = require("react");


// const fetchData = () => {
//     return new Promise((reslove, reject) => {
//         const status = true;

//         if(status) {
//             reslove({name: "hero"})
//         }
//         else {
//             reject("serber error")
//         }
//     })
// }

// fetchData()
// .then(res => console.log(res))
// .catch(err => console.log(err))


// const fetchData = () => {
//     return new Promise((reslove, reject) => {
//         const status = true;

//        if (status) {
//         const mockData = {
//             json: () => Promise.resolve({name: "hero"})
//         }
//         reslove(mockData)
//        }else {
//         reject("server error")
//        }
//     })
// }

// fetchData()
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))


// const urls = [
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/comments",
//     "https://jsonplaceholder.typicode.com/albums",
//     "https://jsonplaceholder.typicode.com/photos",
//     "https://jsonplaceholder.typicode.com/todos",
//     "https://jsonplaceholder.typicode.com/users"
// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(res => res.json()).then(data => console.log(data))
// }))
// .catch(err => console.log(err));




// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const status = true;

//         if (status) {
//             resolve({ name: "hero"});
//         }else {
//             reject("server error");
//         }
//     });
// };

// fetchData()
// .then(res => console.log(res))
// .catch(err => console.log(err));



// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const status = true;

//         if (status) {
//             const mockData = {
//                 json: () => Promise.resolve({ name: "hero"})
//             }
//             resolve(mockData);
//         }else {
//             reject("sever error");
//         }
//     })
// }

// fetchData()
// .then(res => res.json())
// .then(data => console.log(data));



// const urls = [

//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/comments",
//     "https://jsonplaceholder.typicode.com/albums",
//     "https://jsonplaceholder.typicode.com/photos",
//     "https://jsonplaceholder.typicode.com/todos",
//     "https://jsonplaceholder.typicode.com/users"  
// ];

// Promise.all(urls.map(url => {
//     return fetch(url).then(res => res.json())
// }))
// .then(data => {
//     data.forEach((item => console.log(item)));
// })
// .catch(err => console.log(err));


// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const status = true;

//         if (status) {
//             resolve({ name: "hero", age: 30, city: "Dhaka", country: "BD"});

//         }else {
//             reject("server error");
//         }
//     });

// };

// fetchData()
// .then(res => console.log(res))
// .catch(err => console.log(err));




// const urls = [
//    "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
//     "https://jsonplaceholder.typicode.com/photos" 
// ];

// Promise.all(urls.map(url => fetch(url).then(res => res.json())))
// .then(data => {
//     data.forEach(item => console.log(item));
// })
// .catch(err => console.log(err));




// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const status = false;

//         if (status) {
//             resolve({name: "hero", age: 435, city: "Raj"});
//         }else {
//             reject("server error");
//         }
//     });
// };

// fetchData()
// .then(res => console.log(res))
// .catch(err => console.log("Error this:", err));


// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const status = false; // error simulate করছি

//         if (status) {
//             resolve({ name: "hero" });
//         } else {
//             reject("server error");
//         }
//     });
// };

// fetchData()
//     .then(res => console.log(res)) 
//     .catch(err => console.log("Error dhora porse: ", err));  



// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const status = false;

//         if (status) {
//             resolve({ name: "hero"});
//         }else {
//             reject("server error");
//         }
//     });
// };
// fetchData()
// .then(res => console.log(res))
// .catch(err => console.log("Error:", err));



// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         const status = true; // এখন status true

//         if (status) {
//             resolve({ name: "hero" });
//         } else {
//             reject("server error");
//         }
//     });
// };

// fetchData()
//     .then(res => console.log(res))  // Success case
//     .catch(err => console.log("Error: ", err));  // Error case




// function orderFurniture(furniture) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (furniture === "chair") {
//                 resolve("i'm successfully ordered a chair");
//             } else if (furniture === "table") {
//                 reject("i'm failed to order a table");
//             }else {
//                 reject("onjana asbap potro")
//             }
//         }, 2000);
//     }
//     )
// }
// orderFurniture("chair")
// .then(respose => {
//     console.log(respose);
// })
// .then(error => {
//     console.log(error);
// })


// function orderFurniture(furniture) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (furniture === "chair") {
//                 resolve("I'm successfully ordered a chair");
//             }else if (furniture === "table") {
//                 reject("i'm failed to order a table");
//             }else {
//                 reject("o jana asbab portro");
//             }
        
            
//         }, 2000);
//     })
// }

// orderFurniture("chair")
// .then(response  => {
// console.log(response);
// })
// .catch(error => {
//     console.log(error);
// });



