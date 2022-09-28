const fs = require('fs').promises;
const readline = require('readline-sync');

const SIMPSONS_FILE_PATH = './simpsons.json';
const SIMPSON_FAMILY_PATH = './simpsonFamily.json'
const DEFAULT_ENCODE = 'utf-8';

async function readAll() {
  return await fs.readFile(SIMPSONS_FILE_PATH, DEFAULT_ENCODE);
}

async function readNames() {
  const data = await readAll();
  const allChars = JSON.parse(data);
  const strings = allChars.map(({ id, name }) => `${id} - ${name}`);
  strings.forEach((string) => console.log(string));
}

async function readNameById() {
  const id = readline.questionInt('Digite um id: ');
  try {
    const data = await readAll();
    const allChars = JSON.parse(data);
    const { name } = allChars.find((char) => Number(char.id) === id);
    return name;
  } catch (error) {
    console.error('id não encontrado.');
  }
}

async function removeCharacters() {
  const data = await readAll();
  const allChars = JSON.parse(data);
  try {
    const newSimpsons = allChars.filter(({ id }) => id !== '6' && id !== '10');
    await fs.writeFile(SIMPSONS_FILE_PATH, JSON.stringify(newSimpsons));
  } catch (error) {
    console.log('id não encontrado/já foi deletado');
  }
}

async function createSimpsonFamily() {
  const data = await readAll();
  const allChars = JSON.parse(data);
  const simpsonsId = [1, 2, 3, 4];
  const simpsons = allChars.filter(({ id }) => simpsonsId.includes(Number(id)));
  await fs.writeFile(SIMPSON_FAMILY_PATH, JSON.stringify(simpsons));
}

async function addSimpsonMember() {
  const data = await fs.readFile(SIMPSON_FAMILY_PATH, DEFAULT_ENCODE);
  const simpsons = JSON.parse(data);
  const nelson = { id: '8', name: 'Nelson Muntz' };
  simpsons.push(nelson);
}

async function editSimpsonMember() {
  const data = await fs.readFile(SIMPSON_FAMILY_PATH, DEFAULT_ENCODE);
  const simpsons = JSON.parse(data);
  const simpsonsWithoutNelson  = simpsons.filter(({ id }) => id !== '8');
  const maggie = { id: '15', name: 'Maggie Simpson' };
  await fs.writeFile(
    SIMPSON_FAMILY_PATH,
    JSON.stringify([...simpsonsWithoutNelson, maggie])
  );
}

module.exports = {
  readNames,
  readNameById,
  removeCharacters,
  createSimpsonFamily,
  addSimpsonMember,
  editSimpsonMember,
};
