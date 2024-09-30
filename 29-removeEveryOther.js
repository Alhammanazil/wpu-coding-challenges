// WPU Coding Challenge 2024
// 28/366
// https://www.codewars.com/kata/5769b3802ae6f8e4890009d2

// function removeEveryOther(arr){
//     return arr.filter((_, i) => i % 2 === 0)
//   }

  // one line
  const removeEveryOther = arr => arr.filter((_, i) => i % 2 === 0)

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));