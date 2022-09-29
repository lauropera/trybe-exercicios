const fs = require('fs').promises;
const path = require('path');

const ACTIVITIES_DATA_PATH = '../database/data.json';

async function readActivitiesData() {
  try {
    const data = await fs.readFile(
      path.resolve(__dirname, ACTIVITIES_DATA_PATH)
    );
    const activities = JSON.parse(data);
    return activities;
  } catch (err) {
    console.error(`Error at reading file: ${err}`);
  }
}

async function writeNewMission(newActivity) {
  try {
    const oldActivities = await readActivitiesData();
    const newActivityWithId = { id: oldActivities.length + 1, ...newActivity };
    const allActivities = JSON.stringify([...oldActivities, newActivityWithId]);
    await fs.writeFile(
      path.resolve(__dirname, ACTIVITIES_DATA_PATH),
      allActivities
    );
    return newActivityWithId;
  } catch (err) {
    console.error(`Error writing in file: ${err}`);
  }
}

module.exports = { readActivitiesData, writeNewMission };
