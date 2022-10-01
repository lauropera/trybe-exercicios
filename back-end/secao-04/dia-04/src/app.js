const express = require('express');
const errorHandle = require('./middlewares/errorHandle');
require('express-async-errors');

const app = express();
app.use(express.json());
const activities = require('./routes/activitiesRoutes');
const signup = require('./routes/signUpRoutes');

app.use('/activities', activities);
app.use('/signup', signup);

app.use(errorHandle);

module.exports = app;
