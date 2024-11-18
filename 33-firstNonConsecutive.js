// WPU Coding Challenge 2024
// 33/366
// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] - arr[i - 1] !== 1) {
            return arr[i]
        }
    }
    return null
}

// Test cases
console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]))