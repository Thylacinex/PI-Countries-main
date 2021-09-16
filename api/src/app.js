const express = require('express');
<<<<<<< HEAD
// Middlewares
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
// Routes
const countries = require('./routes/countries.js');
const activity = require('./routes/activity.js');
=======
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');
>>>>>>> 4893d8516300c4330b2b412c0e25812e4587a867

const server = express();

server.name = 'API';

<<<<<<< HEAD
// Middlewares
=======
>>>>>>> 4893d8516300c4330b2b412c0e25812e4587a867
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

<<<<<<< HEAD
// Routes
server.get('/', async (req, res) => {
  res.json({message: 'API ready to be used on endpoints: /countries /countries?name /countries/countryId'});
});

server.use('/countries', countries);
server.use('/activity', activity);

=======
server.use('/', routes);
>>>>>>> 4893d8516300c4330b2b412c0e25812e4587a867

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
