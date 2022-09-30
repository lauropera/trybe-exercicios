const express = require('express');
const app = express();
const cacaoTrybe = require('./cacaoTrybe');

app.use(express.json());

app.get('/chocolates', async (_req, res) => {
  const chocolates = await cacaoTrybe.getAllChocolates();
  return res.status(200).json({ chocolates });
});

app.get('/chocolates/total', async (req, res) => {
  const totalChocolates = (await cacaoTrybe.getAllChocolates()).length;
  return res.status(200).json({ totalChocolates });
});

app.get('/chocolates/search', async (req, res) => {
  const { name } = req.query;
  if (!name) res.status(404).json({ chocolates: [] });
  const chocolates = await cacaoTrybe.getChocolateByName(name);
  if (chocolates.length === 0) {
    return res.status(404).json({ chocolates: [] });
  }
  return res.status(200).json({ chocolates });
});

app.get('/chocolates/:id', async (req, res) => {
  const { id } = req.params;
  const chocolate = await cacaoTrybe.getChocolateById(Number(id));
  return res.status(200).json({ chocolate });
});

app.get('/chocolates/brand/:id', async (req, res) => {
  const { id } = req.params;
  const chocolates = await cacaoTrybe.getChocolateByBrand(Number(id));
  return res.status(200).json({ chocolates });
});

module.exports = app;
