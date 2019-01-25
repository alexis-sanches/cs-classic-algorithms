const assert = require(`assert`);
const { binarySearch } = require(`../../src/search/binary-search`);

describe(`Binary Search`, () => {
  it(`should return element for numbers`, () => {
    assert.equal(binarySearch(Array(1000).fill(0).map((it, i) => i + 1), 4), 3);
  });

  it(`should return element for strings`, () => {
    assert.equal(binarySearch(['Alex', 'Michael', 'Oprah', 'Sarah', 'Tim'], 'Alex'), 0);
  });

  it(`should not return element if not found`, () => {
    assert.equal(binarySearch(['Alex', 'Michael', 'Oprah', 'Sarah', 'Tim'], 'John'), -1);
  });
});
