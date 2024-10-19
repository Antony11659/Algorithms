// 5. Longest Palindrome

// Given a string s, return the longest palindromic substring in s.

// Solution:
// 1) create a function findLongestPalindrome(L, R, string):
//    - if str[L] === str[R] and L >= 0 and R < str.length then a widow from str[L] till str[R] is Palindrome
// 2) define two windows one is for even case another one is for odd case (str.length is even or odd):
//               a) L = i and R = i+1 in a case "aaaa" (middle elements matters)
//               b) L = i and R = i in a case "aba" (middle element doesn't matter)
// 3) go through all string elements and check which one is longer odd or even

const findLongestPalindrome = (left, right, str) => {
  let window = "";
  let newWindow = "";
  let l = left;
  let r = right;
  while (str[l] === str[r] && l >= 0 && r < str.length) {
    newWindow = str.slice(l, r + 1);
    l--;
    r++;
  }
  if (window.length < newWindow.length) {
    window = newWindow;
  }
  return window;
};
var longestPalindrome = function (s) {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const oddWindow = findLongestPalindrome(i, i, s);
    const evenWindow = findLongestPalindrome(i, i + 1, s);
    if (oddWindow.length > result.length) {
      result = oddWindow;
    }
    if (evenWindow.length > result.length) {
      result = evenWindow;
    }
  }
  return result;
};
const s = "ccc";
const str = "caba";

console.log(longestPalindrome("aaaa"));
