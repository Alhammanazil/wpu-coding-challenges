// WPU Coding Challenge 2024
// 18/366
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

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