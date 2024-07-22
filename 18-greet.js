// WPU Coding Challenge 2024
// 18/366
// https://www.codewars.com/kata/5772da22b89313a4d50012f7

// menggunakan if else
// function greet (name, owner) {
//     if (name === owner) {
//         return 'Hello boss'
//     } else {
//         return 'Hello guest'
//     }
// }

// menggunakan ternary
const greet = (name, owner) => name === owner ? 'Hello boss' : 'Hello guest'

console.log(greet('Daniel', 'Daniel'))