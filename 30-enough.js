// WPU Coding Challenge 2024
// 30/366
// https://www.codewars.com/kata/5875b200d520904a04000003

// if else
// function enough(cap, on, wait) {
//   if (on + wait > cap) {
//     return on + wait - cap
//   } else {
//     return 0
//   }
// }

// ternary
// function enough(cap, on, wait) {
//   return cap >= on + wait ? 0 : on + wait - cap;
// }

// one line
// const enough = (cap, on, wait) => on + wait > cap ? on + wait - cap : 0

// gunakan math.max
function enough(cap, on, wait) {
  return Math.max(wait + on - cap, 0)
}

// Test cases
console.log(enough(10, 5, 5))
console.log(enough(100, 60, 50))
console.log(enough(20, 5, 5))
console.log(enough(75, 70, 46))