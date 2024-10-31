// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// Solution:
// 1) define two functions one checks even cases other one odd and collects how many palindrome str
// 2) add results

const countPalindrome = (start, end, str) => {
  let result = 0;
  let l = start;
  let r = end;
  while (str[l] === str[r] && l >= 0 && r < str.length) {
    result++;
    l--;
    r++;
  }
  return result;
};

var countSubstrings = function (s) {
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    const oddResult = countPalindrome(i, i, s);
    const evenResult = countPalindrome(i, i + 1, s);
    result += oddResult + evenResult;
  }
  return result;
};

console.log(countSubstrings("aaa"));

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

// Constraints:

// 1 <= s.length <= 1000
// s consists of lowercase English letters.
