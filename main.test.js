const {
  getFirstItemFrom,
  getLastItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
} = require('./main.js')


describe('getFirstItemFrom', () => {
  it('returns the first item in an array', () => {
    expect(getFirstItemFrom([1, 1, 2, 3, 5, 8])).toBe(1);
    expect(getFirstItemFrom([-5])).toBe(-5);
  })
})


describe('getLastItemFrom', () => {
  it('returns the last item in an array', () => {
    expect(getLastItemFrom([1, 1, 2, 3, 5, 8])).toBe(8);
    expect(getLastItemFrom([-5])).toBe(-5);
  })
})


describe('getIndex3', () => {
  it('returns index 3 of an array with at least 4 items', () => {
    expect(getIndex3(['hello', 'darkness', 'my', 'old', 'friend'])).toBe('old')
    expect(getIndex3(['tyrell', 'jumary', 'tyrell', 'wilson', 'carlos'])).toBe('wilson')
  })
  
  it('returns the last index of an array with fewer than 4 items', () => {
    expect(getIndex3([1, 1, 2])).toBe(2)
    expect(getIndex3([4])).toBe(4)
  })
});


describe('firstItemIsNumber', () => {
  it('returns true if the first item is a number', () => {
    expect(firstItemIsNumber([1, 1, 2, 3, 5, 8])).toBe(true);
    expect(firstItemIsNumber([0])).toBe(true);
  })

  it('returns false if the first item is a string', () => {
    expect(firstItemIsNumber(['1'])).toBe(false);
    expect(firstItemIsNumber(['i am not a number.', 'I am a free man.'])).toBe(false);
  })

  it(`returns false if the first item is a string, even if its value is 'number'`, () => {
    expect(firstItemIsNumber(['not a number'])).toBe(false);
  })

  it('returns false if the first item is a boolean', () => {
    expect(firstItemIsNumber([true, false])).toBe(false);
    expect(firstItemIsNumber([false])).toBe(false);
  })

  it('returns false if the first item is an array', () => {
    expect(firstItemIsNumber([[]])).toBe(false);
    expect(firstItemIsNumber([['inception'], [`wasn't`], [`actually`], [`that`], [`good`]])).toBe(false);
  })

  it('returns false if the first item is a function', () => {
    expect(firstItemIsNumber([firstItemIsNumber])).toBe(false);
    expect(firstItemIsNumber([getFirstItemFrom, getIndex3])).toBe(false);
  })
})


describe('isLongList', () => {
  it('returns true if the array holds more than 10 items', () => {
    expect(isLongList([10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0])).toBe(true)
    expect(isLongList(['the', 'vowels', 'are', 'a', 'e', 'i', 'o', 'u', 'and', 'sometimes', 'y'])).toBe(true);
  })
  
  it('returns true if the array holds exactly 10 items', () => {
    expect(isLongList([10, 9, 8, 7, 6, 4, 3, 2, 1, 0])).toBe(true)
    expect(isLongList([10, 9, 8, 7, 6, 4, 3, 2, 1, 0])).toBe(true)
  })
  
  it('returns false if the array holds fewer than 10 items', () => {
    expect(isLongList([10, 8, 7, 6, 4, 3, 2, 1, 0])).toBe(false)
  })
})
