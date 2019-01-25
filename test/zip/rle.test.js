const assert = require(`assert`);
const { rle } = require(`../../src/zip/rle`);

describe(`RLE`, () => {
  it(`should zip the string correctly`, () => {
    assert.equal(rle(`AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB`), `A4B3C2XYZD4E3F3A6B28`);
  });
});
