function binarySearch(target: number, arr: number[]): number {
  if (arr.length === 0) {
    return -1;
  } else if (arr.length === 1) {
    return arr[0] === target ? 0 : -1;
  } else {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
      const mid = Math.floor((high + low) / 2);
      const temp = arr[mid];
      if (target < temp) {
        high = mid;
      } else if (target > temp) {
        low = mid;
      } else {
        return mid;
      }
    }
  }
}

console.log(binarySearch(4, [0, 1, 2, 4, 5, 6]));