// Given a string s, find the length of the longest
// substring without repeating characters.

var lengthOfLongestSubstring = function (str) {
  const letterFrequency = {};
  let longestLengthOfWindow = 0;
  let start = 0;
  for (let end = 0; end < str.length; end++) {
    if (letterFrequency.hasOwnProperty(str[end])) {
      start = Math.max(start, letterFrequency[str[end]] + 1);
    }
    let curLengthOfWindow = end + 1 - start;
    letterFrequency[str[end]] = end;
    longestLengthOfWindow = Math.max(longestLengthOfWindow, curLengthOfWindow);
  }
  return longestLengthOfWindow;
};

// Example 1:
// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:
// Input: s = "bbbbb"
// Output: 1
// Explanation: The ansswer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Solved this problem using Sliding Window Algorithm: O(n)
// The main idea is to count the length of a window that has unique letters and find the largest one
//   const letterFrequency = {}; create letter tracker
//   let longestLengthOfWindow = 0; create result variable
//   let start = 0; start of window
//   looping each letter
//     i ends the window;
//     each iteration does
//       - checks if letterFrequency has the current letter
//           if doesn't, put the current and it's index letter into letterFrequency
//           if does, updates the index of the present letter by current index and change the start of a window
//           start = Math.max(start, letterFrequency[str[end]] + 1);
//             1) start should not be less than it was (window goes only right Math.max helps prevent it)
//             2) add one to the new start (our window starts with absolutely new letters)
//       - let curLengthOfWindow = end + 1 - start; '+1' because 0-index notation
//         longestLengthOfWindow = Math.max(longestLengthOfWindow, curLengthOfWindow);
//         update our result variable if length of our current window is greater then our longest length
