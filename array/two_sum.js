// Given an array of integers nums and an integer target,
//  return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution,
//  and you may not use the same element twice.
// You can return the answer in any order.

const arr = [2,15,11,7];
const n = 9;

// const twoSum = (nums, target) => {
//     const result = [];
//     for (let i = 0; i < nums.length; i++) { // O(n)
//         const xIndex = i;
//         const x = nums[xIndex];
//         const y = nums.indexOf(target - x, i + 1);
//         if (y >= 0 && y !== xIndex) {
//             result.push(xIndex, y);
//             return result;
//         }
//     }
//     return null;
// };

const twoSum = (nums, target) => {
    const result = [];
    for (let i = 0; i < nums.length-1; i++) { // O(n)
      const xIndex = i;
      const x = nums[xIndex];
      const y = target - x;
      const z = nums.indexOf(y, i + 1);
      if (y > 0) {
          result.push(xIndex, z);
      }
      return result;
    }
    return null;
};

console.log(twoSum(arr, n))