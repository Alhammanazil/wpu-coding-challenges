// WPU Coding Challenge 2024
// 21/366
// https://www.codewars.com/kata/568d0dd208ee69389d000016

// menggunakan if else
// function rentalCarCost(d) {
//     const dailyRate = 40;
//     let totalCost = dailyRate * d;
  
//     if (d >= 7) {
//       totalCost -= 50; // Apply $50 discount for rentals of 7 or more days
//     } else if (d >= 3) {
//       totalCost -= 20; // Apply $20 discount for rentals of 3 or more days
//     }
  
//     return totalCost;
//   }

  // menggunakan ternary
  const rentalCarCost = (d) => d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0);
  
  // Example usage:
  console.log(rentalCarCost(1)); // 40
  console.log(rentalCarCost(3)); // 100 (120 - 20)
  console.log(rentalCarCost(7)); // 230 (280 - 50)