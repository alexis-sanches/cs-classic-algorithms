const rle = (str) => str.split('')
  .reduce((prev, curr, i, arr) =>
    (curr === arr[i - 1])
      ? [...prev.slice(0, prev.length - 1), prev.pop() + curr]
      : [...prev, curr], [])
  .map((it) =>
    it.length === 1
      ? it[0]
      : it[0] + it.length).join('');

module.exports = {
  name: `Run length encoding`,
  description: `Run length encoding Algorithm`,
  rle
};
