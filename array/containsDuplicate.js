// Given an integer array nums, return true if any value appears at least twice
// in the array, and return false if every element is distinct.


const containsDuplicate = (nums) => {
  const uniqNums = new Set(nums);
  return uniqNums.size !== nums.length;
};

// var containsDuplicate = function(nums) {
//     const result = {};
//     for (let i = 0; i < nums.length; i++) {
//       if (!result.hasOwnProperty(nums[i])) {
//         result[nums[i]] = 0;
//       } else if(result.hasOwnProperty(nums[i])) {
//         return true;
//       }
//     }
//     return false;
// };

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109