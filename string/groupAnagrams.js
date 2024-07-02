// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.

// Solution #1: O(n * logK)
// 1) create a map and go through all str in an array, sort each one
//      - if the sorted str is not in a map create {key(sortedStr): []}
//      - if the sorted str is in a map that means it is anagram
//        push this str into sorted one {sortedStr: [str, ...]}
//      - iterate the map and return values of each sortedStr

var groupAnagrams = function (strs) {
  const result = {};
  for (let i = 0; i < strs.length; i++) {
    const el = [...strs[i]].sort().join("");
    if (el in result) {
      result[el].push(strs[i]);
    } else {
      result[el] = [strs[i]];
    }
  }
  return Object.values(result);
};

// Example 1:
// Input: "strs = ["eat","tea","tan","ate","nat","bat]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]]
// Example 3:

// Input: strs = ["a"]
// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.
