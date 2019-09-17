const data = [{
  id: '1',
  name: 'test1',
  children: [
    {
      id: '11',
      name: 'test11',
      children: [
        {
          id: '111',
          name: 'test111'
        },
        {
          id: '112',
          name: 'test112'
        }
      ]

    },
    {
      id: '12',
      name: 'test12',
      children: [
        {
          id: '121',
          name: 'test121'
        },
        {
          id: '122',
          name: 'test122'
        }
      ]
    }
  ]
}];

const find = (targetId, data, parentIds = []) => {
  let result = [];
  for (let item of data) {
    if (item.id === targetId) {
      result = result.concat([...parentIds, item.id]);
      break;
    }
    if (item.children) {
      result = result.concat(find(targetId, item.children, [...parentIds, item.id]));
    }
  }
  return result;
};

console.log(find("112", data));