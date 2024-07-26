// WPU Coding Challenge 2024
// 27/366
// https://www.codewars.com/kata/568dcc3c7f12767a62000038

// menggunakan if else
// function setAlarm(employed, vacation){
//     if (employed && !vacation) {
//         return true
//     } else {
//         return false
//     }
// }

// menggunakan ternary
// function setAlarm(employed, vacation){
//     return employed && !vacation
// }

// one line
const setAlarm = (employed, vacation) => employed && !vacation;

// Test cases
console.log(setAlarm(true, true))
console.log(setAlarm(false, true))
console.log(setAlarm(false, false))