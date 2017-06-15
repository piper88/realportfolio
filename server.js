'use strict';

const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const express = require('express');
const debug = require('debug')('portfolio:server');

dotenv.load({path: `${__dirname}/.server.env`});

const PORT = process.env.PORT;
const app = express();

app.use(cors());

let production = process.env.NODE_ENV === 'production';
let morganFormat = production ? 'common' : 'dev';
app.use(morgan(morganFormat));

app.use(express.static(`${__dirname}/build`));

const server = module.exports = app.listen(PORT, () => {
  debug(`server up on ${PORT}`);
});

server.isRunning = true;
