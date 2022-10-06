require('dotenv').config();
const app = require('./app');

const port = 3001;

app.listen(port, async () =>
  console.log(`Running on port ${port}`));
