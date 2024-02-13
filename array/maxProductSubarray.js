// Given an integer array nums, find a subarray
// that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// my solution O(n)
// var maxProduct = function (nums) {
//   let negProduct = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     const product = nums[i] * nums[i - 1];
//     const minProduct = Math.min(nums[i], product);
//     negProduct = nums[i] * negProduct;
//     nums[i] = Math.max(Math.max(product, nums[i]), negProduct);
//     negProduct = Math.min(minProduct, negProduct);
//   }
//   return Math.max(...nums);
// };

// better solution O(n) only more elegant and less memory requires
var maxProduct = function (nums) {
  let negProduct = nums[0];
  let positiveProduct = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curMax = Math.max(
      nums[i] * positiveProduct,
      nums[i],
      nums[i] * negProduct
    );
    const curMin = Math.min(
      nums[i] * positiveProduct,
      nums[i],
      nums[i] * negProduct
    );
    negProduct = curMin;
    positiveProduct = curMax;
    result = Math.max(result, positiveProduct);
  }
  return result;
};

// Example 1:
// Input: nums = [2, 3, -2, 4];
// Output: 6
// Explanation: [2,3] has the largest product 6.

// Example 2:
// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

// Constraints:
// 1 <= nums.length <= 2 * 104
// -10 <= nums[i] <= 10
