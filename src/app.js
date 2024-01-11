const express = require('express');
const bodyParser = require('body-parser');
const skillRouter = require('./controller/skill.controller');

const app = express();

app.use(bodyParser.json());

app.use('/skill', skillRouter);

app.use((error, _req, res, _next) => {
  res.send(error.message);
});

module.exports = app;
