// Given a string s, find the length of the longest
// substringwithout repeating characters.

var lengthOfLongestSubstring = function (str) {
  const letterFrequency = {};
  let longestLengthOfWindow = 0;
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let end = i;
    if (letterFrequency.hasOwnProperty(str[i])) {
      start = Math.max(start, letterFrequency[str[i]] + 1);
    }
    let curLengthOfWindow = end + 1 - start;
    letterFrequency[str[i]] = i;
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
// Explanation: The answer is "b", with the length of 1.

// Example 3:
// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
