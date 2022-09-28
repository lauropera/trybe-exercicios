const service = require('./service');

describe('randomNumber tests', () => {
  it('Expects that "randomNumbers()" returns 10', () => {
    service.randomNumber = jest.fn().mockReturnValue(10);
  
    service.randomNumber();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber()).toBe(10);
  });
  
  it('Checks if "A" divided by "B" works by implementation', () => {
    service.randomNumber = jest.fn().mockImplementation((a, b) => a / b);
  
    expect(service.randomNumber(4, 2)).toBe(2);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenLastCalledWith(4, 2);
  });
  
  it('Checks if the multiplication by implementation works', () => {
    service.randomNumber = jest.fn()
      .mockImplementation((a, b, c) => a * b * c);
  
    expect(service.randomNumber(3, 2, 2)).toBe(12);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenLastCalledWith(3, 2, 2);
  });

  it('Checks if returns the double of his argument', () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toHaveBeenCalledTimes(0);
  
    service.randomNumber.mockImplementation((a) => a * 2);
    
    expect(service.randomNumber(12)).toBe(24);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
    expect(service.randomNumber).toHaveBeenLastCalledWith(12);
  })
})

describe('Implementation tests', () => {
  it('Expects to return a lower case only string', () => {
    const toLowerMock = jest
    .spyOn(service, 'toUpper')
    .mockImplementation((a) => a.toLowerCase());

    expect(toLowerMock('MINUSCULO')).toBe('minusculo');
    expect(service.toUpper).toHaveBeenCalledTimes(1);
    expect(service.toUpper).toHaveBeenLastCalledWith('MINUSCULO');
  });

  it('Expects to have the last letter from the word', () => {
    const mockLastLetter = jest
      .spyOn(service, 'firstLetter')
      .mockImplementation((a) => a.at(-1));

    expect(mockLastLetter('Goldlewis')).toBe('s');
    expect(service.firstLetter).toHaveBeenCalledTimes(1);
    expect(service.firstLetter).toHaveBeenLastCalledWith('Goldlewis');
  })

  it('Expects to concat three strings and return them', () => {
    const mockConcat = jest
      .spyOn(service, 'concatStrings')
      .mockImplementation((first, second, third) => first + second + third);

    expect(mockConcat('bon', 'de', '+')).toBe('bonde+');
    expect(service.concatStrings).toHaveBeenCalledTimes(1);
    expect(service.concatStrings).toHaveBeenLastCalledWith('bon', 'de', '+');

    service.concatStrings.mockRestore();
    expect(service.concatStrings('su', 'pim', 'pa')).toBe('supim');
  })

  it('Checks if upperCase function has been restored and working', () => {
    service.toUpper.mockRestore();

    expect(service.toUpper('minusculo')).toBe('MINUSCULO');
  })
})

describe('fetchDog tests', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

  it('fetches a Dog if everything is ok', async () => {
    service.fetchDog.mockResolvedValue('request ok');

    service.fetchDog();
    expect(service.fetchDog).toHaveBeenCalled();
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
    await expect(service.fetchDog()).resolves.toBe('request ok');
    expect(service.fetchDog).toHaveBeenCalledTimes(2);
  })

  it('throws an error if the request goes wrong', async () => {
    service.fetchDog.mockRejectedValue('request failed');

    expect(service.fetchDog).toHaveBeenCalledTimes(0);
    await expect(service.fetchDog()).rejects.toMatch('request failed');
    expect(service.fetchDog).toHaveBeenCalledTimes(1);
  })
});