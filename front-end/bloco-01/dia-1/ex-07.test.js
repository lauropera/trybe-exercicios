const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Verifica se a função deixa em letras maiusculas', (done) => {
  uppercase('lauro', (name) => {
    try {
      expect(name).toBe('LAURO');
      done();
    } catch (error) {
      done(error);
    }
  });
});
