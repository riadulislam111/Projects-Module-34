// const loadData = async () => {
//     try {
//         console.log("ami prothom")
//         console.log("ami second")
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const data = await response.json();
//         console.log(data)
//         const result = 10 + 10;
//         console.log(result)
//         console.log("ami third")
//     }
//     catch {
//         console.log("error")
//     }
// }
// loadData();


// const loadData = async () => {
//     try
// } 


// function orderFurniture(furniture) {
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             if (furniture === "chair") {
//                 resolve("chair ordered successfully");
//             } else if (furniture === "table") {
//                 reject("table unsuccessfully ordered");
//             }else {
//                 reject("ojana asbab potro");
//             }
//         }, 2000);
//     });
// }
// // orderFurniture("chair")
// // .then(successMessage => {
// //     console.log(successMessage);
// // })
// // .catch((errorMessage) => {
// //     console.error(errorMessage);
// // });




// // 1st case: "chair" pass kora
// orderFurniture("chair")
// .then(successMessage => {
//     console.log(successMessage);  // Expected output: "chair ordered successfully"
// })
// .catch((errorMessage) => {
//     console.error(errorMessage);  // N/A for this case
// });

// // 2nd case: "table" pass kora
// orderFurniture("table")
// .then(successMessage => {
//     console.log(successMessage);  // N/A for this case
// })
// .catch((errorMessage) => {
//     console.error(errorMessage);  // Expected output: "table unsuccessfully ordered"
// });

// // 3rd case: "sofa" pass kora
// orderFurniture("sofa")
// .then(successMessage => {
//     console.log(successMessage);  // N/A for this case
// })
// .catch((errorMessage) => {
//     console.error(errorMessage);  // Expected output: "ojana asbab potro"
// });

// // 4th case: "bed" pass kora
// orderFurniture("bed")
// .then(successMessage => {
//     console.log(successMessage);  // N/A for this case
// })
// .catch((errorMessage) => {
//     console.error(errorMessage);  // Expected output: "ojana asbab potro"
// });

// // 5th case: "desk" pass kora
// orderFurniture("desk")
// .then(successMessage => {
//     console.log(successMessage);  // N/A for this case
// })
// .catch((errorMessage) => {
//     console.error(errorMessage);  // Expected output: "ojana asbab potro"
// });

// // orderFurniture("bed")
// // .then(successMessage => {
// //     console.log(successMessage);
// // })
// // .then((errorMessage) => {
// //     console.error(errorMessage);
// // });
// // .catch((errorMessage) => {
// //     console.error(errorMessage);
// // });




