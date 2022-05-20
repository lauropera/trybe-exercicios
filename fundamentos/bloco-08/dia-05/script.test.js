const { sum, personLikes, alex, swap } = require('./script');

describe('Exercicio 2', () => {
  it('Expect sum() to return 9', () => {
    expect(sum(2, 3, 4)).toBe(9);
  });
  it('Expect sum() to return -2', () => {
    expect(sum(2, -5, 1)).toBe(-2);
  });
});
describe('Exercicio 3', () => {
  it('Expect to return "Alex is 26 years old and likes fly fishing."', () => {
    expect(personLikes(alex)).toBe('Alex is 26 years old and likes fly fishing.')
  });
});
describe('Exercicio 4', () => {
  it('Expect to return [3, 2, 1] when swap([1, 2, 3])', () => {
    expect(swap([1, 2, 3])).toEqual([3, 2, 1]);
  });
});
