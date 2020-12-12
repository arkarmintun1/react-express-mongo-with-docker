const express = require('express');

const config = require('./utils/config');
const db = require('./utils/db');

db.connect();

const app = express();

app.get('/', (req, res) => {
  res.send('Server working');
});

app.listen(config.serverPort, () => {
  console.log(`Server running on port: ${config.serverPort}`);
});
