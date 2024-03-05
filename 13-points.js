// WPU Coding Challenge 2024
// 13/366
// https://www.codewars.com/kata/5bb904724c47249b10000131

// function points(games) {
//     let result = 0;
//     for (let i = 0; i < games.length; i++) {
//         let x = games[i].split(':')[0];
//         let y = games[i].split(':')[1];
//         if (x > y) {
//             result += 3;
//         } else if (x === y) {
//             result += 1;
//         }
//     }
//     return result;
// }

// function points(games) {
//     return games.reduce((total, game) => {
//         const [x, y] = game.split(':').map(Number);
//         return total + (x > y ? 3 : x === y ? 1 : 0);
//     }, 0);
// }

const points = (games) => games.reduce((acc, [x, _, y]) => (x > y ? 3 : x < y ? 0 : 1) + acc, 0);

// Test cases
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));