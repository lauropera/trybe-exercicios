const randomNumber = () => Math.floor(Math.random() * 100);

const toUpper = (string) => string.toUpperCase();

const firstLetter = (string) => string.charAt(0);

const concatStrings = (first, second) => first + second;

async function fetchDog() {
  const ENDPOINT = 'https://dog.ceo/api/breeds/image/random';
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  randomNumber,
  toUpper,
  firstLetter,
  concatStrings,
  fetchDog,
};
