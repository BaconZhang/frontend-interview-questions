/*
 * @lc app=leetcode id=5 lang=javascript
 *
 * [5] Longest Palindromic Substring
 *
 * https://leetcode.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (26.85%)
 * Total Accepted:    506.1K
 * Total Submissions: 1.9M
 * Testcase Example:  '"babad"'
 *
 * Given a string s, find the longest palindromic substring in s. You may
 * assume that the maximum length of s is 1000.
 * 
 * Example 1:
 * 
 * 
 * Input: "babad"
 * Output: "bab"
 * Note: "aba" is also a valid answer.
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: "cbbd"
 * Output: "bb"
 * 
 * 
 */
/**
 * @param {string} s
 * @return {string}
 */
function isPalindrome(str) {
  return str === str.split("").reverse().join("");
};

function search(s) {
  let test = "";
  let max = "";
  for (let i = 0; i < s.length; i++) {
    test += s[i];
    if (isPalindrome(test) && test.length > max.length) {
      max = test;
    }
  }
  return max;
}

var longestPalindrome = function (s) {
  let max = "";
  while (s.length > max.length) {
    let res = search(s);
    if (res.length > max.length) {
      max = res;
    }
    s = s.slice(1);
  }
  return max;
};
