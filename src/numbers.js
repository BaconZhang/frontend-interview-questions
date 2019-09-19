const numbers = [1, 2, 3, 5, 7, 8, 10, 12, 14, 15, 16, 20];

const last = (arr) => arr.length ? arr[arr.length - 1] : undefined;

function trans(nums) {
  if (!Array.isArray(nums) || !nums.length) {
    return "";
  }
  return nums.reduce((prev, num) => {
    const lastArr = last(prev) || [];
    const lastNum = last(lastArr);
    if (lastNum !== undefined && num - lastNum === 1) {
      lastArr.push(num);
    } else {
      prev.push([num]);
    }
    return prev;
  }, [])
    .map(arr => arr.length > 1 ? arr[0] + "~" + last(arr) : arr[0])
    .join(", ");
}

console.log(trans(numbers));