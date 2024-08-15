// 125. Valid Palindrome Solution:
//     1) convert all Uppercase letters and remove all not alphabetic characters
//     2) two pointers, one from the beginning (L) and one from the end (R)
//     - while (R > L))
//         - compare each opposite characters
//         - if they are not equal, return false
//         - move L and R to the next opposite characters
//         - return true in the end;

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
