// WPU Coding Challenge 2024
// 28/366
// https://www.codewars.com/kata/56f6ad906b88de513f000d96

// if else
// function bonusTime(salary, bonus) {
//     if (bonus === true) {
//         return '£' + salary * 10
//     } else {
//         return '£' + salary
//     }
// }

// ternary
// function bonusTime(salary, bonus) {
//     return bonus ? '£' + salary * 10 : '£' + salary
// }

// one line
const bonusTime = (salary, bonus) => `£${bonus ? salary * 10 : salary}`;

// Test cases
console.log(bonusTime(10000, true))
console.log(bonusTime(25000, true))
console.log(bonusTime(10000, false))
console.log(bonusTime(60000, false))
console.log(bonusTime(2, true))