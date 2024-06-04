// Given two strings s and t of lengths m and n respectively, return the minimum window substring
//  of s such that every character in t (including duplicates) is included
//  in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:
// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.

// Example 2:
// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.

// Example 3:
// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Solution:
//     Sliding Window Algorithm O(n)

// Steps:
//     1) create an object with substring substr = { A:0, B:0, C:0 }
//     2) create begin = 0 of a window end = i;
//     3) create minWindowLength
//        logic of building a window:
//          - check if our string[end] is in substring if so substring[string[end]]++
//          - until our string consists of all substring letter our window is being building
//          - now we have our window with all substring letters try to shrink it:
//                  a) begin++ (shrink a window)
//                  b) if string[begin] is in substring substring[string[begin]] -= 1
//                     minWindowLength = current window if it is smaller
//                     new window starts until the logic of building a window be satisfied again
//                  c) if b is false repeat a) (shrink a window)

// const allSubstrLettersInWindow = (substr) => {
//   const result = Object.entries(substr)
//     .map(([, el]) => el > 0)
//     .filter((el) => el === false);
//   return result.length <= 0;
// };

// var minWindow = function (s, t) {
//   if (s.length < t.length) return "";
//   const substr = Object.assign(...t.split("").map((v) => ({ [v]: 0 })));
//   let begin = 0;
//   let minWindow = "";
//   let minWindowLength = s.length;
//   for (let end = 0; end < s.length; end++) {
//     if (substr.hasOwnProperty(s[end])) {
//       substr[s[end]]++;
//     }
//     if (allSubstrLettersInWindow(substr)) {
//       const currentWindow = s.slice(begin, end + 1);
//       /////
//       let cutWindow;
//       const window = currentWindow.split("");
//       for (let i = 0; i < currentWindow.length; i++) {
//         if (substr.hasOwnProperty(currentWindow[i])) {
//           substr[currentWindow[i]]--;
//         }
//         if (allSubstrLettersInWindow(substr)) {
//           window.shift();
//           begin++;
//         } else {
//           cutWindow = window.join("");
//           break;
//         }
//       }
//       /////////
//       if (minWindowLength >= cutWindow.length) {
//         minWindow = cutWindow;
//         minWindowLength = cutWindow.length;
//       }
//       begin++;
//     }
//   }
//   console.log(substr);
//   return minWindow;
// };
// const string = "ADOBECODEBANC",
//   substring = "ABC";
const string = "aa",
  substring = "aa";

var minWindow = function (s, t) {
  if (s.length < t.length) return "";
  const tCount = {};
  for (let char of t) {
    tCount[char] = (tCount[char] || 0) + 1;
  }
  let needCount = Object.keys(tCount).length;
  let haveCount = 0;
  let left = 0;
  let idxResultWindow = [0, Infinity]; // Store the start and end of the minimum window
  const windowCount = {};

  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    windowCount[char] = (windowCount[char] || 0) + 1;

    if (windowCount[char] === tCount[char]) {
      haveCount++;
    }

    // when the current window satisfy the needs, try to shrink the window
    while (haveCount === needCount) {
      // Update result if this window is smaller than the previous one
      if (right - left < idxResultWindow[1] - idxResultWindow[0]) {
        idxResultWindow = [left, right];
      }

      // slide the left window pointer to minimize the solution
      windowCount[s[left]]--;
      if (windowCount[s[left]] < tCount[s[left]]) {
        haveCount--;
      }
      left++;
    }
  }
  console.log(idxResultWindow);
  return idxResultWindow[1] === Infinity
    ? ""
    : s.slice(idxResultWindow[0], idxResultWindow[1] + 1);
};

console.log(minWindow(string, substring));

// my new solution
const minWindow = (s, t) => {
  if (s.length < t.length) return "";
  const substr = {};
  const map = {};
  for (let char of t) {
    substr[char] = (substr[char] || 0) + 1;
  }
  let substrLength = Object.keys(substr).length;
  let shouldCreateWindow = 0;
  let left = 0;
  const minWindowIndex = [0, Infinity];
  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (substr[char]) {
      map[char] = (map[char] || 0) + 1;
    }

    if (map[char] === substr[char]) {
      shouldCreateWindow++;
    }
    while (substrLength === shouldCreateWindow) {
      if (right - left < minWindowIndex[1] - minWindowIndex[0]) {
        minWindowIndex[0] = left;
        minWindowIndex[1] = right;
      }
      if (map[s[left]]) {
        map[s[left]]--;
        shouldCreateWindow--;
        left++;
      }
      left++;
    }
  }
  return minWindowIndex;
};

const s = "ADOBECODEBANC";
t = "ABC";
console.log(minWindow(s, t));
