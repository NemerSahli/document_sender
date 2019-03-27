const express = require('express');
const router = express.Router();
const randomstring = require('randomstring');

router.get('/', (req, res) => {
  res.send({
    result: randomstring.generate(10)
  });
});

router.post('/send', (req, res) => {
  if (!req.body) {
    return res.send({ error: 'data is required' });
  }
  res.send({
    error: 0,
    somedata: 'hallo world ->' + req.body.userName + randomstring.generate(10)
  });
});

module.exports = router;
