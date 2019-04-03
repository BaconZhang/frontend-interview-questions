/*
 * @lc app=leetcode id=169 lang=javascript
 *
 * [169] Majority Element
 *
 * https://leetcode.com/problems/majority-element/description/
 *
 * algorithms
 * Easy (51.94%)
 * Total Accepted:    362.1K
 * Total Submissions: 697.2K
 * Testcase Example:  '[3,2,3]'
 *
 * Given an array of size n, find the majority element. The majority element is
 * the element that appears more than ⌊ n/2 ⌋ times.
 * 
 * You may assume that the array is non-empty and the majority element always
 * exist in the array.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,3]
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: [2,2,1,1,1,2,2]
 * Output: 2
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  if (nums.length <= 2) {
    return nums[0];
  }
  let cache = new Map();
  let majority = Math.ceil(nums.length / 2);
  for (let num of nums) {
    if (cache.has(num)) {
      const count = cache.get(num) + 1;
      if (count >= majority) {
        return num;
      } else {
        cache.set(num, count);
      }
    } else {
      cache.set(num, 1);
    }
  }
};

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
