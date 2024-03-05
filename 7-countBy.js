// WPU Coding Challenge 2024
// 7/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//         z.push(x * i);
//     }
//     return z;
// }

// const countBy = (x, n) => Array.from({ length: n }, (_, i) => (i + 1) * x);

const countBy = (x, n) => [...Array(n)].map((_, i) => (i + 1) * x);

// Test cases
console.log(countBy(5, 5));