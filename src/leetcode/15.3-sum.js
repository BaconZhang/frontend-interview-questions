/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 *
 * https://leetcode.com/problems/3sum/description/
 *
 * algorithms
 * Medium (23.64%)
 * Total Accepted:    507.6K
 * Total Submissions: 2.1M
 * Testcase Example:  '[-1,0,1,2,-1,-4]'
 *
 * Given an array nums of n integers, are there elements a, b, c in nums such
 * that a + b + c = 0? Find all unique triplets in the array which gives the
 * sum of zero.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate triplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [-1, 0, 1, 2, -1, -4],
 * 
 * A solution set is:
 * [
 * ⁠ [-1, 0, 1],
 * ⁠ [-1, -1, 2]
 * ]
 * 
 * 
 */
function binarySearch(arr, target) {
  if (arr.length === 0) {
    return false;
  } else if (arr.length === 1) {
    return arr[0] === target;
  } else {
    arr = arr.sort((a, b) => a - b);
    let midIndex = Math.floor(arr.length / 2);
    let mid = arr[midIndex];
    if (mid < target) {
      return binarySearch(arr.slice(midIndex), target);
    } else if (mid > target) {
      return binarySearch(arr.slice(0, midIndex), target);
    } else {
      return true;
    }
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = new Map();
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let arrLeft = nums.slice(0, i);
    let arrRight = nums.slice(i + 1);
    let target = nums[i];

    arrLeft.forEach(num => {
      if (binarySearch(arrRight, -(target + num))) {
        const value = [num, target, -(target + num)];
        const token = value.toString();
        if (!result.has(token)) {
          result.set(token, value);
        }
      }
    })
  }
  return [...result.values()];
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));