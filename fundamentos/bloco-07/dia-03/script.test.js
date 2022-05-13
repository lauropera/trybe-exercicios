const { sum, myRemove, myFizzBuzz} = require('./script');

describe('Testes Função sum()', () => {
  it('Returns 9 if sum(4,5)', () => {
    expect(9).toBe(sum(4, 5));
  });
  it('Returns 0 if sum(0,0)', () => {
    expect(0).toBe(sum(0, 0));
  });
  it('Show a error if sum(4,"5")', () => {
    expect(() => sum(4, '5')).toThrow(Error);
  });
  it('Check if error message is "parameters must be numbers"', () => {
    expect(() => sum(4, '5')).toThrow('parameters must be numbers');
  });
});

describe('Testes Função myRemove()', () => {
  it('Returns [1, 2, 4] if myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });

  it('Not return [1, 2, 3, 4] if myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('Returns [1, 2, 3, 4] if myRemove([1, 2, 3, 4], 5)', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Testes Função myFizzBuzz()', () => {
  it('Returns fizzbuzz if myFizzBuzz(15)', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })
})