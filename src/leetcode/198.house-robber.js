/*
 * @lc app=leetcode id=198 lang=javascript
 *
 * [198] House Robber
 *
 * https://leetcode.com/problems/house-robber/description/
 *
 * algorithms
 * Easy (40.88%)
 * Total Accepted:    305.1K
 * Total Submissions: 746.2K
 * Testcase Example:  '[1,2,3,1]'
 *
 * You are a professional robber planning to rob houses along a street. Each
 * house has a certain amount of money stashed, the only constraint stopping
 * you from robbing each of them is that adjacent houses have security system
 * connected and it will automatically contact the police if two adjacent
 * houses were broken into on the same night.
 * 
 * Given a list of non-negative integers representing the amount of money of
 * each house, determine the maximum amount of money you can rob tonight
 * without alerting the police.
 * 
 * Example 1:
 * 
 * 
 * Input: [1,2,3,1]
 * Output: 4
 * Explanation: Rob house 1 (money = 1) and then rob house 3 (money =
 * 3).
 * Total amount you can rob = 1 + 3 = 4.
 * 
 * Example 2:
 * 
 * 
 * Input: [2,7,9,3,1]
 * Output: 12
 * Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house
 * 5 (money = 1).
 * Total amount you can rob = 2 + 9 + 1 = 12.
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
// const sum = nums => nums.reduce((prev, num) => prev += num, 0);
// const getMaxValueAndStart = (nums) => {
//   let sums = [
//     (nums[0] || 0) + (nums[2] || 0),
//     (nums[0] || 0) + (nums[3] || 0),
//     (nums[1] || 0) + (nums[3] || 0)
//   ]
//   let max = Math.max(...sums);
//   let maxIndex = sums.findIndex(i => i === max);
//   return {
//     value: max,
//     start: maxIndex ? 5 : 4
//   }
// }


var rob = function (nums) {
  if (nums.length === 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0];
  } else if (nums.length === 2) {
    return Math.max(...nums);
  } else {
    let result = [
      nums[0],
      Math.max(nums[0], nums[1])
    ];
    for (i = 2; i < nums.length; i++) {
      result[i % 2] = Math.max(
        result[i % 2] + nums[i],
        result[(i - 1) % 2]
      );
    };
    return Math.max(...result);
  }
};

// console.log(rob([1, 3, 1, 3, 100]))
// console.log(rob([2, 7, 9, 3, 1]));
// console.log(rob([2, 4, 8, 9, 9, 3]));
