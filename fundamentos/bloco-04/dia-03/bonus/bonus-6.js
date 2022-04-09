let i = 48;

for (let index = 2; index <= i; index += 1) {
  if(i % index === 0) {
    console.log('Não é primo');
  } else {
    console.log('É primo');
  }
}