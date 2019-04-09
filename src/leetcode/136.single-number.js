/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 *
 * https://leetcode.com/problems/single-number/description/
 *
 * algorithms
 * Easy (59.53%)
 * Total Accepted:    438.6K
 * Total Submissions: 736.8K
 * Testcase Example:  '[2,2,1]'
 *
 * Given a non-empty array of integers, every element appears twice except for
 * one. Find that single one.
 * 
 * Note:
 * 
 * Your algorithm should have a linear runtime complexity. Could you implement
 * it without using extra memory?
 * 
 * Example 1:
 * 
 * 
 * Input: [2,2,1]
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [4,1,2,1,2]
 * Output: 4
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = nums.reduce((prev, num) => {
    if (prev[num]) {
      Reflect.deleteProperty(prev, num)
    } else {
      Reflect.set(prev, num, 1);
    }
    return prev;
  }, {});
  return Object.keys(result)[0]
};

// console.log(singleNumber([4, 1, 2, 1, 2]));

