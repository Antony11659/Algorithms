// 5. Longest Palindromic Substring
const isPalindrome = (s) => {
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let l = 0;
  let r = str.length - 1;
  console.log(str);
  while (l < r) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};
// Given a string s, return the longest palindromic substring in s.
// Solution:
// 1) define two pointers LR where L = begin of the s (0) R = the end of the s (s.length - 1);
// 2) define the window (const window = "");
// 3) find the window that can be palindrome i.e (
//                      - if (L = R) => create a string from L till R (const string = "s[L]...s[R]")
//                      - if ( string.length > window.length ) => check if a string is a palindrome:
//                                          - if (isPalindrome(string)) => window = string;

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters.
