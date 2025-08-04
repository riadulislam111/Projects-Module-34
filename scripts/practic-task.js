// function displayMessage() {
//     setTimeout(() => {
//         console.log("This message is displayed after 5 seconds");
//     }, 5000);
// }

// displayMessage();

// function displayMessage2() {
//     setTimeout(() => {
//         console.log("This message is displayed after 5 seconds")
//     }, 5000);
// }

// displayMessage2();

// function displayMessage3() {
//     setTimeout(() => {
//         console.log("This message is displayed after 5 seconds");
//     }, 5000);
// }

// displayMessage3();


// function displayMessage4() {
//     setTimeout(() => {
//         console.log("this is a 4numbar message");
//     }, 5000);
// }

// displayMessage4();


// function displayMessage5() {
//     setTimeout(() => {
//         console.log("This message is a five number message");
//     }, 5000);
// }

// displayMessage5();



// //////



// function delayedGreeting(name, delayTime) {
//     setTimeout(() => {
//         console.log(`Hello, ${name}!`);
//     }, delayTime);
// }

// delayedGreeting("Alic", 2000);



// function delayedGreeting(name, delayTime){
// setTimeout(() => {
//     console.log(`Hello, ${name}!`);
// }, delayTime);
// }

// delayedGreeting("Alice", 2000);

// function delayedGreeting(name, delayTime) {
//     setTimeout(() => {
//         console.log(`Hello, ${name}!`);
//     }, delayTime);
// }
// delayedGreeting("Alice", 2000);


// function delayedGreeting4(name, delayTime) {
//     setTimeout(() => {
//         console.log(`Hello, ${name}!`);
//     }, delayTime);
// }

// delayedGreeting4("Alice", 2000);

// function delayedGreeting5(name, delayTime) {
//     setTimeout(() => {
//         console.log(`Hello, ${name}! `)
//     }, delayTime);
// }

// delayedGreeting5("Alice", 2000);


////

// function tellJoke() {
//     console.log("Why don't scientists trust atoms? Because they make up everything!");

//     const jokeInterval = setInterval(()=>{
//         console.log("Why don't scientists trust atoms? Because they make up everything!");

//     }, 2000);

//     setTimeout(() => {
//         clearInterval(jokeInterval);
//         console.log("okay, okay, no more jokes!");
//     }, 1000);
// }

// tellJoke();


// function tellJoke() {
//     console.log("Why don't scientists trust atoms? Because they make up everything!");

//     const jokeInterval = setInterval(() => {
//         console.log("Why don't scientists trust atoms? Because they make up everything!");
//     }, 2000);

//     setTimeout(() => {
//         clearInterval(jokeInterval);
//         console.log("No more jokes!");
//     }, 10000);
// }

// tellJoke();



// const tellJoke4 = () => {
//     console.log("Why don't scientists trust atoms? Because they make up everything!");

//     const jokeInterval = setInterval(() => {
//         console.log("Why don't scientists trust atoms? Because they make up everything!");

//     }, 2000);

//     setTimeout(() => {
//         clearInterval(jokeInterval);
//         console.log("No more jokes!");
//     }, 10000);

// }

// tellJoke4();



// function tellJoke5() {
//     console.log("Why don't scientists trust atoms? Because they make up everything!");

//     const jokeInterval = setInterval(() => {
//         console.log("Why don't scientists trust atoms? Because they make up everything!");
//     }, 2000);

//     setTimeout(() => {
//         clearInterval(jokeInterval);
//         console.log("No More Jokes!");
//     }, 10000);
// }

// tellJoke5();



// async function fetchJoke() {
//     try {
//         const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
//         const data = await response.json();

//         if (data.joke) {
//             console.log(data.joke);
//         }else {
//             console.log("Joke unavailable.");
//         }
//     } catch (error) {
//         console.log("Error fetching joke:", error);
//     }
// }

// fetchJoke();


// async function fetchUserData() {
//  try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
   
//     if (!response.ok) throw new Error("Network response was no ok");
//     const user = await response.json();
//     console.log(`User: ${user.name}, Email: ${user.email}`);




//  } catch (error) {
//  console.log("Error fetching user:", error);   
//  }   
// }


// fetchUserData();


// async function fetchAndLogJoke() {
//     try {
//         const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
       

//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const data = await response.json();

//     console.log(data.joke);


//     } catch (error) {
//         console.log("Error fetching joke:", error.message);
//     }
// }

// fetchAndLogJoke();



// async function fetchAndLogJoke() {
//     try {
//         const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');
        
//         if (!response.ok) {
//             throw new Error(`HTTP error"! status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log(data.joke);
//     } catch (error) {
//         console.log("Error fetching joke:", error.message);
//     }
// }

// fetchAndLogJoke();



// async function fetchAndLogJoke() {
//     try {
//         const response = await fetch('https://v2.jokeapi.dev/joke/Programming?type=single');

//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }

//         const data = await response.json();

//         console.log(data.joke);
//     } catch (error) {
//         console.log("Error fetching joke:", error.message);
//     }
// }

// fetchAndLogJoke();