const express = require('express');
const { insert, findAll, findById, update, remove } = require('../db/tasksDB');

const router = express.Router();

router.post('/', async (req, res) => {
  const task = req.body;
  await insert(task);
  res.status(201).json({ message: 'Tarefa adicionada com sucesso!' });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const task = req.body;
  await update(task, id);
  res.status(200).json({ message: 'Tarefa atualizada com sucesso!' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await remove(id);
  res.status(204).end();
});

router.get('/', async (_req, res) => {
  const [missions] = await findAll();
  res.status(200).json(missions);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const [[mission]] = await findById(id);
  res.status(200).json(mission);
});

module.exports = router;
