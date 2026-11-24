

// 1  Create a Promise that resolves after 2 seconds with the message "Success!". Log the result
// using .then().
// Chain two .then() methods:
// First .then() returns a number 5.
// Second .then() multiplies it by 10 and logs the result.


// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success!");
//     }, 2000);
// });

// myPromise.then((result) => {
//     console.log(result);
// });




// Promise.resolve(10)
//     .then((result) => {
//         return 5;
//     })
//     .then((number) => {
//         const answer = number * 10;
//         console.log(answer);
//     });



// 2  Create a Promise that rejects after 1 second with the error "Failed!". Use .catch() to log the
// error in uppercase.
// Add a .finally() to a Promise chain (whether it resolves or rejects) to log "Operation
// completed.".



// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("Failed!");
//     }, 1000);
// });

// myPromise.catch((error) => {
//     console.log(error.toUpperCase());
// });




// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Success!");
//     }, 1000);
// });

// myPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("Operation completed.");
//     });



// 3 Write an async functiongetUser() that:
// Awaits a Promise resolving after 1.5 seconds with { id: 1, name: "Alice" }
// Returns the user object.


// async function getUser() {
//     const user = await new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Alice" });
//         }, 1500);
//     });

//     return user;
// }

// getUser().then((user) => {
//     console.log(user);
// });


// 4  Use try…catch…finally in a function:
// If age < 18, throw an error "Access denied".
// Log "Cleaning up..." in the finally block.



// function checkAge(age) {
//     try {
//         if (age < 18) {
//             throw new Error("Access denied");
//         }

//         console.log("Access granted!");
//     }
//     catch (error) {
//         console.log(error.message);
//     }
//     finally {
//         console.log("Cleaning up...");
//     }
// }

// checkAge(19);


// 5. Convert this callback function to return a Promise:jsfunction divide(a, b, callback) {
// if (b === 0) callback(new Error("Division by zero"), null);
// else callback(null, a / b);
// }

// function divide(a, b) {
//     return new Promise((resolve, reject) => {
//         if (b === 0) {
//             reject(new Error("Division by zero"));
//         } else {
//             resolve(a / b);
//         }
//     });
// }

// // Calling the function
//  divide(10, 2)
//     .then((result) => {
//         console.log("Result:", result);
//     })
//     .catch((error) => {
//         console.log("Error:", error.message);
//     });


// divide(10, 0)
//     .then((result) => {
//         console.log("Result:", result);
//     })
//     .catch((error) => {
//         console.log("Error:", error.message);
//     });



// 6 Chain three Promises in sequence:
// Start with value 2
// Each Promise waits 500ms, then doubles the value
// Log the final result


// let promise = Promise.resolve(4);

// promise
//     .then((value) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(value * 2);
//             }, 500);
//         });
//     })
//     .then((value) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(value * 2);
//             }, 500);
//         });
//     })
//     .then((value) => {
//         return new Promise((resolve) => {
//             setTimeout(() => {
//                 resolve(value * 2);
//             }, 500);
//         });
//     })
//     .then((result) => {
//         console.log("Final Result:", result);
//     });


//7 Write an async functionfetchData() that:
// Awaits a Promise that rejects with "Network error" after 1 second
// Uses try/catch to handle and log the error


// async function fetchData() {
//     try {
//         await new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject("Network error");
//             }, 1000);
//         });

//     } catch (error) {
//         console.log("Error:", error);
//     }
// }

// fetchData();


//8  Create two functions using setTimeout() and handle with async-await


// function firstTask() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("First task completed");
//             resolve();
//         }, 2000);
//     });
// }

// function secondTask() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("Second task completed");
//             resolve();
//         }, 1000);
//     });
// }

// async function runTasks() {
//     await firstTask();
//     await secondTask();

//     console.log("All tasks completed!");
// }

// runTasks();


//9  Write a program for calculator with promise chaining


// function calculator(a, b, operator) {
//     return new Promise((resolve, reject) => {
//         let result;

//         switch (operator) {
//             case "+":
//                 result = a + b;
//                 break;

//             case "-":
//                 result = a - b;
//                 break;

//             case "*":
//                 result = a * b;
//                 break;

//             case "/":
//                 if (b === 0) {
//                     reject("Cannot divide by zero");
//                     return;
//                 }
//                 result = a / b;
//                 break;

//             default:
//                 reject("Invalid operator");
//                 return;
//         }

//         resolve(result);
//     });
// }

// // Promise chaining
// calculator(20, 10, "+")
//     .then((result) => {
//         console.log("Addition:", result);
//         return calculator(20, 10, "-");
//     })
//     .then((result) => {
//         console.log("Subtraction:", result);
//         return calculator(20, 10, "*");
//     })
//     .then((result) => {
//         console.log("Multiplication:", result);
//         return calculator(20, 10, "/");
//     })
//     .then((result) => {
//         console.log("Division:", result);
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });


// 10  Write a program which return the promise and at the resolve state return users object of
//array



function getUsers() {
    return new Promise((resolve, reject) => {

        const users = [
            { id: 1, name: "Alice", age: 22 },
            { id: 2, name: "Bob", age: 25 },
            { id: 3, name: "Charlie", age: 21 }
        ];

        resolve(users);
    });
}

// Calling the function
getUsers()
    .then((users) => {
        console.log("Users Array:");

        users.forEach((user) => {
            console.log(user);
        });
    })
    .catch((error) => {
        console.log("Error:", error);
    });
