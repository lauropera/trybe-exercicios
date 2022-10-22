const bodyParser = require('body-parser');
const express = require('express');

const app = express();
const accountController = require('./controllers/account.controller');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/accounts/:id/comments', accountController.getComments);
app.post('/accounts/:id/comment', accountController.addNewComment);
app.post('/accounts', accountController.createAccount);
app.get('/accounts/:id', accountController.getAccountById);
app.get('/accounts-v2/:id', accountController.lazyGetAccountById);

module.exports = app;
