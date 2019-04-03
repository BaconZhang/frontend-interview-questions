/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
 *
 * https://leetcode.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (53.54%)
 * Total Accepted:    544.9K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * 
 * 
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you
 * implement both?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// let node = new ListNode(1);
// Array.from({ length: 4 }, (_, index) => index + 2).map(i => new ListNode(i)).reduce((prev, current, currentIndex) => {
//   prev.next = current;
//   return current;
// }, node);

var reverseList = function (head) {
  let cache = new Map();
  let stack = [];
  let current = head;
  while (current !== null && (current.val !== undefined)) {
    if (cache.has(current)) {
      break;
    } else {
      stack.push(new ListNode(current.val));
      cache.set(current, current);
      current = current.next;
    }
  }
  for (let i = stack.length - 1; i >= 0; i--) {
    stack[i].next = i === 0 ? current : stack[i - 1];
  }
  return stack.length ? stack[stack.length - 1] : head;
};

// console.log(reverseList(new ListNode()));

