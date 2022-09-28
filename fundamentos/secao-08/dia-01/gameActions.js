const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damage = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dragonDamage = () => {
  const maxDamage = dragon.strength;
  return damage(15, maxDamage);
};

const warriorDamage = () => {
  const baseDamage = 15;
  const maxDamage = warrior.strength * warrior.weaponDmg;
  return damage(baseDamage, maxDamage);
};

const mageDamage = () => {
  const intelligence = mage.intelligence;
  const status = {
    damage: damage(intelligence, intelligence * 2),
    mana: mage.mana,
  };
  if (mage.mana < 15) {
    status.damage = 'Não possui mana suficiente';
  }
  return status;
};

const warriorTurn = (damageInfo) => {
  const atkPoints = damageInfo;
  warrior.damage = atkPoints;
  dragon.healthPoints -= atkPoints;
};

const mageTurn = (mageInfo) => {
  const atkPoints = mageInfo.damage;
  mage.damage = atkPoints;
  if (mageInfo.mana > 15) {
    dragon.healthPoints -= atkPoints;
    mage.mana -= 15;
  }
};

const dragonTurn = (damageInfo) => {
  const atkPoints = damageInfo;
  dragon.damage = atkPoints;
  warrior.healthPoints -= atkPoints;
  mage.healthPoints -= atkPoints;
};

const gameActions = {
  warrior: () => warriorTurn(warriorDamage()),
  mage: () => mageTurn(mageDamage()),
  dragon: () => dragonTurn(dragonDamage()),
  members: () => { console.log(battleMembers) }
};
