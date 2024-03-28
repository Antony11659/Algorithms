// You are given a string s and an integer k. You can choose any character of
// the string and change it to any other uppercase English character. You can perform this
// operation at most k times.

// Return the length of the longest substring containing the same letter you can get
// after performing the above operations.

// Example 1:
// Input: s = "ABAB", k = 2
// Output: 4
// Explanation: Replace the two 'A's with two 'B's or vice versa.

// Example 2:
// Input: s = "AABABBA", k = 1
// Output: 4
// Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
// The substring "BBBB" has the longest repeating letters, which is 4.
// There may exists other ways to achieve this answer too.

// Constraints:

// 1 <= s.length <= 105
// s consists of only uppercase English letters.
// 0 <= k <= s.length

// Solution:
//   Sliding Window Algorithm O(n)
// Steps:
//   1) put each letter in an object and count it's frequency
//   2) define topFrequentLetter
//   3) ( (end - begin + 1) - topFrequentLetter <= k ) the window can grow while this line is true
//      if it's not true:
//        - decrease count of map[str[begin]]
//        - slide window begin++
//   4) count longestWindow Math.max(end - begin + 1, longestWindow)

var characterReplacement = function (s, k) {
  const map = {};
  let begin = 0;
  let topFrequentLetter = 0;
  let longestWindow = 0;
  for (let end = 0; end < s.length; end++) {
    map[s[end]] = (map[s[end]] || 0) + 1;
    topFrequentLetter = Math.max(map[s[end]], topFrequentLetter);
    if (end - begin + 1 - topFrequentLetter > k) {
      map[s[begin]] -= 1;
      begin++;
    }
    longestWindow = Math.max(end - begin + 1, longestWindow);
  }
  return longestWindow;
};
