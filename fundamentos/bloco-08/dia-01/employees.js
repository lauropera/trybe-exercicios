const generateInfos = (name) => {
  const emailCharacters = name.replace(/ /g, '_');
  const email = `${emailCharacters}@trybe.com`;
  const person = {
    name,
    email: email.toLowerCase(),
  };
  return person;
};

// console.log(generateInfos('Lauro Pereira'));

const newEmployees = (infos) => {
  const employees = {
    id1: infos('Jim Halpert'),
    id2: infos('Pam Beesly'),
    id3: infos('Dwight Schrute'),
  };
  return employees;
};

const dunderMifflinEmployees = newEmployees(generateInfos);
console.log(dunderMifflinEmployees);