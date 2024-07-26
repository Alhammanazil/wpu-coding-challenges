// WPU Coding Challenge 2024
// 26/366
// https://www.codewars.com/kata/58649884a1659ed6cb000072

// menggunakan switch
// function updateLight(current) {
//     switch (current) {
//         case 'green':
//             return 'yellow';
//         case 'yellow':
//             return 'red';
//         case 'red':
//             return 'green';
//     }
// }

// menggunakan ternary
const updateLight = current => current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green';

// Test cases
console.log(updateLight('green'))
console.log(updateLight('yellow'))
console.log(updateLight('red'))