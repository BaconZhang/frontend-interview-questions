const widthTraverse = (tree) => {
  let queue = [];
  let result = [];
  if (Array.isArray(tree)) {
    for (let i = 0; i < tree.length; i++) {
      queue.push(tree[i]);
    }
    while (queue.length) {
      let node = queue.shift();
      result.push(node);
      if (Array.isArray(node.children)) {
        for (let j = 0; j < node.children.length; j++) {
          queue.push(node.children[j]);
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

log(widthTraverse(nodes));