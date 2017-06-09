'use strict';

const express = require('express');
const dotenv = require('dotenv');
const debug = require('debug')('portfolio:server');

dotenv.load();

const app = express();
const PORT = process.env.PORT;

const server = module.exports = app.listen(PORT, () => {
  debug(`server up on ${PORT}`);
});

server.isRunning = true;
