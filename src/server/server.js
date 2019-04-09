const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mail = require('./routes/mail');
const config = require('../../src/config.json');
const app = express();

// cors configurations
const corsOptions = {
  origin: config.host,
  optionsSuccessStatus: 200
  // credentials: true
};

app.use(cors(corsOptions));

// to extend the req.body limit size
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/mail', mail);

app.listen(8000);
console.log('app listining on port 8000');
