/**
 *
 * @param list
 * @param item
 * @return {number}
 */
const binarySearch = (list, item) => {
  let stepsCount = 0;
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];
    stepsCount++;

    if (guess === item) {
      console.log(`Total number of steps to find '${item}' in array of ${list.length} items is ${stepsCount}`);
      return mid;
    }

    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  console.log(`${item} in array of ${list.length} items was not found. ${stepsCount} steps required`);

  return -1;
};

module.exports = {
  name: `Binary Search`,
  description: `Binary Search Algorithm`,
  binarySearch
};
