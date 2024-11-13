// Problem: https://leetcode.com/problems/two-sum/
// Difficulty: Easy

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // To store the value and its index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return []; // Return empty if no solution is found
};

// Example Usage:
// twoSum([2, 7, 11, 15], 9) should return [0, 1]
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]
