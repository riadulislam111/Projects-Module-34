// // function a() {
// //     b()
// //     console.log("a")
// // }
// // function b() {
// //     c()
// //     console.log("b")
// // }
// // console.log("Hello");
// // function c() {
// //     d()
// //     console.log("c")
// // }

// // setTimeout(() => {
// //      console.log("ami setTimeout")
// // },3000)

// // setTimeout(() => {
// //     console.log("ami setTimeout 2")
// // },4000)

// // function d() {
// //     e()
// //     console.log("d")
// // }
// // function e() {
// //     f()
// //     console.log("e")
// // }
// // function f() {
  
// //     console.log("f")
// // }

// // for (let i = 0; i < 5; i++) {
// //     a();
// // }




// function a() {
//     b();
//     console.log("a");
// }

// function b() {
//     c();
//     console.log("b");
// }

// console.log("Hello");

// function c() {
//     d();
//     console.log("c");
// }

// setTimeout(() => {
//     console.log("ami setTimeout");
// }, 3000);

// setTimeout(() => {
//     console.log("ami setTimeout 2");
// },4000)

// function d() {
//     e();
//     console.log("d");
// }

// function e() {
//     f();
//     console.log("e")
// }

// function f() {
//     console.log("f")
// }

// for (let i = 0; i < 5; i++) {
//     a();
// }

// console.log("Start");

// setTimeout(() => {
//     console.log("Timeout 1");
// },1000);

// setTimeout(() => {
//     console.log("Timeout 2");
// }, 0);

// console.log("End");


// console.log("Start");

// setTimeout(() => {
// console.log("Timeout 1");
// }, 0);


// Promise.resolve().then(() => {
//     console.log("Promise 1");
// });


// console.log("END");


// setTimeout(() => {
//     console.log("This runs after 2 seconds");
// }, 2000);

// const count = 0;
// const clockID =setInterval(() => {
//     count++;
//     console.log(`This runs ${count} seconds after the last run`)
//     // console.log("This runs every 3 seconds");
    
// }, 3000);





// const TimeoutID = setTimeout(() => {
//     console.log("This runs after 2 seconds");

// }, 2000)

//     clearTimeout(TimeoutID);


// const intervalId = setInterval(() => {
//     console.log("This runs repeatedly");
// }, 2000);

// setTimeout(() => {
//     clearInterval(intervalId)
// }, 5000);


// // setTimeout(() => {
// //     console.log("Task started");

// //     for (let i = 0; i < 1e8; i++) {}
// //         console.log("Task finished");
    
// // }, 2000);
//


// const timeoutID = setTimeout(() => {
//     console.log("Task started");


//     for (let i = 0; i < 18; i++) {}
//     console.log("Task finished");
    
// }, 2000);


// clearTimeout(timeoutID);


// setTimeout(() => {
//     console.log("This runs after 2 seconds (once)");
// }, 2000);


// setInterval(() => {
//     console.log("This runs every 3 seconds");
//    
// }, 3000);



// function regularFunction() {
//     console.log("step 1");
//     console.log("step 2");
//     console.log("step 3");
// }

// regularFunction();


// async function asyncFunction() {
//     console.log("Step 1");
//     await someAsyncOperation();
//     console.log("Step 2");
    
// }

// asyncFunction();


// async function asyncFunction() {
//   console.log("Step 1");
//   await someAsyncOperation();  // Pause here until promise resolves
//   console.log("Step 2");
// }

// asyncFunction();  // Executes Step 1, waits for async operation, then Step 2


// function regularFunction() {
//     return "Hello!";
// }
// const result = regularFunction();
// console.log(result);




// async function asyncError() {
//     throw new Error("Something went wrong!");
// }

// asyncError()
// .catch(err => console.log(err));


// function fetchData() {
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.error(err));
// }

// fetchData();


// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }

// fetchData();


// function example() {
//     try{
//         throw new Error("Something went wrong");
//     }catch(err) {
//         console.log("Caught an error:", err);
//     }
// }

// example();


// fetchData()
// .then(result => console.log(result))
// .catch(error => console.log("Error:", error));


// async function fetchData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//         const data = await response.json();
//         console.log(data);
//     }catch (error) {
//         console.log("Caught an error:", error);
//     }
// }

// fetchData();



// function blockingFunction() {
//     console.log("Start");

//     for (let i = 0; i < 1e9; i++) {}
//     console.log("End");
// }

// blockingFunction();


