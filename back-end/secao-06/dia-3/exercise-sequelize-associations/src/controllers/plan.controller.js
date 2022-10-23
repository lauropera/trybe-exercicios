const planService = require('../services/plan.service');

const listPlanPacients = async (req, res) => {
  const planPacients = await planService.getPlanPacients();
  return res.status(200).json(planPacients);
};

module.exports = {
  listPlanPacients,
};
