// function grow(x) {
//   let result = x[0];
//   for (let i = 1; i < x.length; i++) {
//     result = result * x[i];
//   }
//   return result;
// }

// function grow(x) {
//     return x.reduce((acc, cur) => acc * cur);
// }

const grow = (x) => x.reduce((acc, cur) => acc * cur);

// Test
console.log(grow([2, 2, 2, 2, 2, 2]));