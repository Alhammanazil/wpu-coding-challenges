// WPU Coding Challenge 2024
// 15/366
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//     if (array === null || array.length <= 2) return 0;
//     const sorted = array.sort((a, b) => a - b);
//     let result = 0;
//     for (let i = 1; i < sorted.length - 1; i++) {
//         result += sorted[i];
//     }
//     return result
// }

// function sumArray(array) {
//     if (array === null || array.length <= 2) return 0;
//     return array
//     .sort((a, b) => a - b)
//     .slice(1, -1)
//     .reduce((acc, cur) => acc + cur, 0)
// }

// function sumArray(array) {
//     return array === null || array.length <= 2
//         ? 0
//         : array
//         .sort((a, b) => a - b)
//         .slice(1, -1)
//         .reduce((acc, cur) => acc + cur, 0)
// }

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0

console.log(sumArray([6, 2, 1, 8, 10]));