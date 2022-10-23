const { Patient, Plan, Surgery } = require('../models');

const getPatientsAndPlans = async () => {
  const patients = await Patient.findAll({
    include: { model: Plan, as: 'plan' },
    attributes: { exclude: 'planId' },
  });
  return patients;
};

const getPatientsAndSurgeries = async () => {
  const patients = await Patient.findAll({
    include: {
      model: Surgery,
      as: 'surgeries',
      through: { attributes: [] },
      attributes: { exclude: 'doctor' },
    },
    attributes: { exclude: 'doctor' },
  });
  return patients;
};

const addNewPatient = async ({ fullname, planId }) => {
  const { patientId } = await Patient.create({ fullname, planId });
  return { patientId, fullname, planId };
};

module.exports = {
  getPatientsAndPlans,
  getPatientsAndSurgeries,
  addNewPatient,
};
