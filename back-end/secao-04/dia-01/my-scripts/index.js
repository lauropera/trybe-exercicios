const {
  readNames,
  readNameById,
  removeCharacters,
  createSimpsonFamily,
  addSimpsonMember,
  editSimpsonMember,
} = require('./simpsons');

async function main() {
  // await createSimpsonFamily();
  // await addSimpsonMember();
  await editSimpsonMember();
}

main();
