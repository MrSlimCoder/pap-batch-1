// console.log("hello world");

/* Synchronous - Code Executes Immediately

// Memory Heap - Var, Let, Const, Function  - Hoisting

// Variable (var)
console.log(a); //null/undefined
var a; //Memory heap (hoisting)
a=5;
console.log(a); //5

// Function - Memory Heap (Hoisting)
function myFunc() {
    console.log("my func");
}

// Constant (const) - No Hoisting
const b = 10;
console.log(b);

// Let - No Hoisting
let c;
console.log(c);

// Const, Let (Block Scope)
// Var (Global Scope)


// function myFn() {
//     let b =5;
//     if(b) {
//         let b =6;
//     }
// }

// Call Stack - Invoked Function (Execution)
myFunc(); // Invoked - Call Stack

*/

/* Asynchrous - Code Executions isn't imediately*/

// Web API's - setInterval(), setTimeout(), AJAX, DOM, Database Calls


// Event Loop executes Asynchrous Operations 

// CallBack Queue after that Event Loop
// setInterval(() => console.log("hello world 1"), 5000);
// setInterval(() => console.log("hello world 2"), 1000);


// setInterval(() => console.log("internal"), 1000);
// setTimeout(() => console.log("timeout"), 1000);

// console.log(1); // sync (callstack, js, execute)
// setTimeout(() => console.log(3), 0); //async (callback queue, event loop, execute)
// console.log(2); // sync