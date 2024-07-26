// WPU Coding Challenge 2024
// 25/366
// https://www.codewars.com/kata/56b1f01c247c01db92000076

// function doubleChar(str) {
//     return str.split('').map(char => char + char).join('');
//   }

// one line
const doubleChar = str => str.split('').map(char => char + char).join('');

  // Test cases
  console.log(doubleChar("abcd"))
  console.log(doubleChar("Adidas"))
  console.log(doubleChar("1337"))