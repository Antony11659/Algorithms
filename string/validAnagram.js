// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
//  typically using all the original letters exactly once.

// Solution:
//     1) create a map with all letters from 's' and count how many letters in 's'
//     2) loop throw all letters in 't':
//             - if the map has a letter from 't' reduce one time map[t[i]]--
//             - if the map doesn't have a letter from 't' add the letter to the  map (map[t[i]]++)
//     3) in the end if the map consists only zero values return True otherwise return False

var isAnagram = function (s, t) {
  const map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] ? map[s[i]]++ : (map[s[i]] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    map[t[i]] ? map[t[i]]-- : (map[t[i]] = 1);
  }
  return Object.values(map).filter((el) => el !== 0).length === 0;
};

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

// Constraints:

// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.
