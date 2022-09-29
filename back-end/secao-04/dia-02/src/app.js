const express = require('express');
const { readActivitiesData, writeNewMission } = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/myActivities', async (_req, res) => {
  const activitiesList = await readActivitiesData();
  return res.status(200).json(activitiesList);
});

app.get('/search/myActivities', async (req, res) => {
  const { q } = req.query;
  if (!q) return res.status(400).json({ message: 'Not found' });

  const activitiesList = await readActivitiesData();
  const result = activitiesList.filter(({ description }) =>
    description.toLowerCase().includes(q.toLowerCase())
  );
  if (result.length === 0) {
    return res.status(404).json({ message: 'Text not found' });
  }
  return res.status(200).json(result);
});

app.get('/filter/myActivities', async (req, res) => {
  const { status } = req.query;
  if (!status) return res.status(400).json({ message: 'Not found' });

  const activitiesList = await readActivitiesData();
  const result = activitiesList.filter((task) =>
    task.status.toLowerCase().includes(status.toLowerCase())
  );
  if (result.length === 0)
    return res.status(404).json({ message: 'Text not found' });

  return res.status(200).json(result);
});

app.get('/myActivities/:id', async (req, res) => {
  const { id } = req.params;
  const activitiesList = await readActivitiesData();
  const activity = activitiesList.find((task) => task.id === Number(id));
  return res.status(200).json({ activity });
});

app.post('/myActivities', async (req, res) => {
  const newActivity = req.body;
  console.log(newActivity);
  const newActivityWithId = await writeNewMission(newActivity);
  return res.status(201).json({ activity: newActivityWithId });
});

module.exports = app;
