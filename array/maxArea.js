// You are given an integer array height of length n.
//  There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container,
//  such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.
// If you simulate the problem, it will be O(n^2) which is not efficient.

var maxArea = function (h) {
  let maxAmount = 0;
  let left = 0;
  let right = h.length - 1;
  let x = right;
  while (left < right) {
    if (h[left] < h[right]) {
      maxAmount = maxAmount > h[left] * x ? maxAmount : h[left] * x;
      left++;
      x--;
    } else {
      maxAmount = maxAmount > h[right] * x ? maxAmount : h[right] * x;
      right--;
      x--;
    }
  }
  return maxAmount;
};

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
//  In this case, the max area of water (blue section) the container can contain is 49.

// Example 2:
// Input: height = [1,1]
// Output: 1

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104
