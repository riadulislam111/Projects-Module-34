// const person = {
//     name: "hero"
// }
// console.log(person);


// document.getElementById("mybtn").addEventListener("click", () => {
//     alert("Button Clicked");
// });


// let obj1 = {x : 1};
// let obj2 = {x : 1};
// obj1.y = 3;
// console.log(obj1);
// console.log(obj2);


// function add(a, b) {
//     return a + b;
// }
// add(1, 2);
// add("1", "2");



// function getX(obj) { return obj.x; }

// // First call: Slow (lookup 'x')
// getX({ x: 1 });  

// // Later calls: Fast (cached location)
// getX({ x: 2 });  

////////


// const a =  10;

// const first = () => {
//     second();
//     console.log("hello i am form first");
// }

// const second = () => {
//     third();
//     console.log("hello i am form second");
// }

// const third = () => {
//     console.log("hello i am form third");
// }


// const b = 20;
// first();
// console.log("hello i am form last");


// var x = 10;

// function foo(y) {
//     var z = 20;
//     return x + y + z;
// }
// var result = foo(5);
// console.log(result);



// console.log(b);
// let b = 20;



// function outer() {
//     let x = 10;
//     return function inner() {
//         console.log(x);
//     };

// }
// const innerFn = outer();
// innerFn();


// const obj = {
//     name: "Alice",
//     greet: function() {
//         console.log(this.name);
//     }
// };
// obj.greet(); 


// function countdown(n) {
//     if (n === 0) return;
//     console.log(n);
//     countdown(n -1);
// }
// countdown(100);


// function firstFunction() {
//     console.log("First function called");
//     secondFunction();
//     console.log("First function ended");
// }

// function secondFunction() {
//     console.log("Second function called");
//     thirdFunction();
//     console.log("Second function ended");
// }

// function thirdFunction() {
//     console.log("Third function called");
// }

// firstFunction();


// function outerFn() {
//     const secret = 10;
//     function innerFn() {
//         console.log(secret);
//     }
// return innerFn;
// }
// const myFn = outerFn();
// myFn();