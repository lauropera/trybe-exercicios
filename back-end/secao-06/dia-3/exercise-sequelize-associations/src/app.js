const express = require('express');

const app = express();
app.use(express.json());

const errorMiddleware = require('./middlewares/error');

const {
  getPatientsAndPlans,
  getPatientsAndSurgeries,
  addNewPatient,
} = require('./controllers/patient.controller');

const { listPlanPacients } = require('./controllers/plan.controller');

app.get('/plans', getPatientsAndPlans);
app.get('/surgeries', getPatientsAndSurgeries);
app.get('/plans/pacients', listPlanPacients);
app.post('/patient', addNewPatient);

app.use(errorMiddleware);

module.exports = app;
