const patientService = require('../services/patient.service');

const getPatientsAndPlans = async (_req, res) => {
  const patients = await patientService.getPatientsAndPlans();
  return res.status(200).json(patients);
};

const getPatientsAndSurgeries = async (_req, res) => {
  const patients = await patientService.getPatientsAndSurgeries();
  return res.status(200).json(patients);
};

const addNewPatient = async (req, res) => {
  const newPatient = await patientService.addNewPatient(req.body);
  return res.status(201).json(newPatient);
};

module.exports = {
  getPatientsAndPlans,
  getPatientsAndSurgeries,
  addNewPatient,
};
