const express = require('express');
const router = express.Router();
const randomstring = require('randomstring');
const mailSender = require('../mailHandler/mailSender');

router.get('/', (req, res) => {
  res.send({
    result: randomstring.generate(10)
  });
});

router.post('/send', (req, res) => {
  if (!req.body) {
    return res.send({ error: 'data is required' });
  }
  let mailBody = `<h3>Mieter Engel</h3>
  <p>Thanks for your contact</p>
  <p>yours sincerely</p> 
  <p>lawyer</p>`;
  mailSender.sendMail('nemer.sahli@gmail.com', 'Contract document', mailBody);

  res.send({
    error: 0,
    somedata: 'hallo world ->' + req.body.userName + randomstring.generate(10)
  });
});

module.exports = router;
