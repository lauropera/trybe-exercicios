const { sum, personLikes, alex, filterPeople, swap, toObject, shipLength, ships, greet } = require('./script');

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
  it('Expect to return an array of objects with people born in Australia and SEC XX', () => {
    expect(filterPeople()).toEqual([
      { name: 'Nicole', bornIn: 1992, nationality: 'Australian' },
      { name: 'Toby', bornIn: 1901, nationality: 'Australian' }
    ])
  });
});

describe('Exercicio 5', () => {
  it('Expect to return [3, 2, 1] when swap([1, 2, 3])', () => {
    expect(swap([1, 2, 3])).toEqual([3, 2, 1]);
  });
});

describe('Exercicio 6', () => {
  it('Expect to return an object with the car infos', () => {
    expect(toObject(['Palio', 'Fiat', 2019])).toEqual({
      name: 'Palio', maker: 'Fiat', year: 2019,
    });
  });
});

describe('Exercicio 7', () => {
  it('Expect to return "Titanic is 269.1 meters long"', () => {
    expect(shipLength(ships[0])).toBe('Titanic is 269.1 meters long');
  });
});

describe('Exercicio 8', () => {
  it('Expect to return "Hi John"', () => {
    expect(greet('John')).toBe('Hi John');
  });
  it('Expect to return "Good morning John"', () => {
    expect(greet('John', 'Good morning')).toBe('Good morning John');
  });
});
