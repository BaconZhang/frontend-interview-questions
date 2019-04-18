/*
 * @lc app=leetcode id=202 lang=javascript
 *
 * [202] Happy Number
 *
 * https://leetcode.com/problems/happy-number/description/
 *
 * algorithms
 * Easy (44.78%)
 * Total Accepted:    224.3K
 * Total Submissions: 500.7K
 * Testcase Example:  '19'
 *
 * Write an algorithm to determine if a number is "happy".
 * 
 * A happy number is a number defined by the following process: Starting with
 * any positive integer, replace the number by the sum of the squares of its
 * digits, and repeat the process until the number equals 1 (where it will
 * stay), or it loops endlessly in a cycle which does not include 1. Those
 * numbers for which this process ends in 1 are happy numbers.
 * 
 * Example: 
 * 
 * 
 * Input: 19
 * Output: true
 * Explanation: 
 * 1^2 + 9^2 = 82
 * 8^2 + 2^2 = 68
 * 6^2 + 8^2 = 100
 * 1^2 + 0^2 + 0^2 = 1
 * 
 */

const square = i => i * i;
const sum = nums => nums.reduce((prev, num) => {
  prev += num;
  return prev;
}, 0);
const squareSum = nums => sum(nums.map(i => square(i)));
const getNums = n => `${n}`.split("").map(num => parseFloat(num));
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const cache = new Map();
  let result = n;
  while (result !== 1) {
    result = squareSum(getNums(result));
    if (result === 1) {
      break;
    }
    if (cache.has(result)) {
      return false
    }
    cache.set(result, true);
  }
  return true
};

// console.log(isHappy(19))

