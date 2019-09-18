class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function init() {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  let i = 0;
  const head = new Node(nums[0]);
  let current = head;
  while (i < nums.length - 1) {
    i += 1;
    current.next = new Node(nums[i]);
    current = current.next;
  }
  return head;
}

function traverse(node, callback) {
  let i = 0;
  while (node) {
    callback && callback(i, node);
    node = node.next;
    i += 1;
  }
  return i;
}

function print(node) {
  const callback = (i, node) => console.log(`${i}, value: ${node.value}`);
  traverse(node, callback);
}
// 循环
function reverse(head) {
  if (head === null || head.next === null) {
    return head;
  } else {
    let prev = head;
    let cur = head.next;
    while (cur) {
      const temp = cur.next;
      cur.next = prev;
      prev = cur;
      cur = temp;
    }
    head.next = null;
    return prev;
  }
}
