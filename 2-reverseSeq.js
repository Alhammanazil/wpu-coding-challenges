// WPU Coding Challenge 2024
// 2/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = n => {
//   const result = [];
//   for (let i = n; i > 0; i--) {
//     result.push(i);
//   }
//   return result;
//   };

const reverseSeq = (n) => [...Array(n)].map((e, i) => n - i);

console.log(reverseSeq(5));
