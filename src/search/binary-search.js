const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = low + high;
    const guess = list[mid];

    if (guess === item) {
      return mid;
    }
    
    if (guess > item) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
};

module.exports = {
  name: `Binary Search`,
  description: `Binary Search Algorithm`,
  binarySearch
};