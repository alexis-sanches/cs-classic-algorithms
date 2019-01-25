const assert = require(`assert`);
const { binarySearch } = require(`../../src/search/binary-search`);

describe(`Binary Search`, () => {
  it(`should return element for numbers`, () => {
    assert.equal(binarySearch([1, 2, 3, 4, 5], 4), 3);
  });

  it(`should return element for strings`, () => {
    assert.equal(binarySearch(['Alex', 'Michael', 'Oprah', 'Sarah', 'Tim'], 'Alex'), 0);
  });

  it(`should not return element if not found`, () => {
    assert.equal(binarySearch(['Alex', 'Michael', 'Oprah', 'Sarah', 'Tim'], 'John'), undefined);
  });
});
