const nums = [1, 3, 4, 5, 6, 8, 9, 10, 14, 15, 16, 19, 20, 21, 23, 25, 26, 27];

const serach = (arr, target) => {
  let step = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const midEl = arr[mid];

    if (midEl < target) {
      left = mid + 1;
      step++;
    }

    if (midEl > target) {
      right = mid - 1;
      step++;
    }

    if (midEl === target) {
      step++;
      console.log("found an el for " + step + " steps");
      return mid;
    }
  }
  return -1;
};

console.log(serach(nums, 27));
