const express = require('express');
const router = express.Router();
const randomstring = require('randomstring');
const mailSender = require('../mailHandler/mailSender');

const PDFDocument = require('pdfkit');
const fs = require('fs');

router.get('/', (req, res) => {
  res.send({
    result: randomstring.generate(10)
  });
});

router.post('/send', (req, res) => {
  if (!req.body) {
    return res.send({ error: 'data is required' });
  }

  var doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('output.pdf'));
  // PDF Creation logic goes here
  doc.image(req.body.content, 0, 20, { scale: 1 });
  doc.end();

  let mailBody = `<h3>Mieter Engel</h3>
  <p>Thanks for your contact</p>
  <p>yours sincerely</p> 
  <p>lawyer</p>`;
  mailSender.sendMail(
    'nemer.sahli@gmail.com',
    'Contract document',
    mailBody,
    './../../../output.pdf'
  );

  res.send({
    error: 0,
    somedata: 'hallo world ->' + req.body.userName + randomstring.generate(10)
  });
});

module.exports = router;
