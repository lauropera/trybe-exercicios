// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./ex-08");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    function callback(error, msg) {
        expect(error).toEqual(expectedError);
        done();
    }

    getPokemonDetails(({ name }) => name === 'Eevee', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expected = 'Olá, seu pokémon é o Bulbasaur, o tipo dele é Grass e a habilidade principal dele é Razor Leaf';

    function callback(error, msg) {
        expect(msg).toBe(expected);
        done();
    }

    getPokemonDetails(({ name }) => name === 'Bulbasaur', callback);
  });
});