const readline = require('readline-sync');

function calculateBMI(weight, height) {
  const heightInMeters = height / 100;
  const result = weight / heightInMeters ** 2;
  return result;
}

const BMI_MAX_AND_MIN = {
  Underweight: {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  Overweight: {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III': {
    minBMI: 40,
    maxBMI: 100,
  },
};

function getBMIResult(bmi) {
  const bmiTypes = Object.keys(BMI_MAX_AND_MIN);
  const resultFind = bmiTypes.find((type) => {
    const { maxBMI, minBMI } = BMI_MAX_AND_MIN[type];
    return bmi >= minBMI && bmi <= maxBMI;
  });
  return resultFind;
}

function main() {
  const weight = readline.questionInt('Type your weight: ');
  const height = readline.questionFloat('Type your height: ');
  const bmi = calculateBMI(weight, height).toFixed(2)
  console.log(getBMIResult(bmi));
}

main();
