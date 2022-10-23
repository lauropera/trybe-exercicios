const { Plan, Patient } = require('../models');

const getPlanPacients = async () => {
  const planPacients = await Plan.findAll({
    include: { model: Patient, as: 'patients' },
  });
  return planPacients;
};

module.exports = {
  getPlanPacients,
};
