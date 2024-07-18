// WPU Coding Challenge 2024
// 16/366
// https://www.codewars.com/kata/563e320cee5dddcf77000158

// function getAverage(marks){
//     let total = 0;
//     for (let i = 0; i < marks.length; i++) {
//         total += marks[i];
//     }
//     return Math.floor(total / marks.length)
//     }

function getAverage(marks){
    return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
  }

console.log(getAverage([1, 2, 3, 4, 5]));