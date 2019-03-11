// 递归版
const deepTraverse1 = (tree, result = []) => {
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      let node = tree[i];
      result.push(node);
      if (Array.isArray(node.children)) {
        deepTraverse1(node.children, result);
      }
    }
  }
  return result;
};

// 循环版
const deepTraverse2 = (tree) => {
  let stack = [];
  let result = [];
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      stack.push(tree[i]);
      while (stack.length) {
        let node = stack.pop();
        result.push(node);
        let children = node.children;
        if (Array.isArray(children)) {
          for (let j = 0; j < children.length; j++) {
            stack.push(children[j]);
          }
        }
      }
    }
  }
  return result;
}

const log = (nodeList) => {
  console.log(nodeList.map(node => `id: ${node.id}, name: ${node.name}`).join('\n'));
};


const nodes = [
  {
    id: '1',
    name: 'node-1',
    children: [
      {
        id: '1-1',
        name: 'node-1-1',
        children: [
          {
            id: '1-1-1',
            name: 'node-1-1-1'
          },
          {
            id: '1-1-2',
            name: 'node-1-1-2'
          }
        ]
      },
      {
        id: '1-2',
        name: 'node-1-2'
      }
    ]
  },
  {
    id: '2',
    name: 'node-2'
  }
];

log(deepTraverse2(nodes));