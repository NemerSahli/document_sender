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
  let newDate = new Date();
  newDate = String(newDate);
  doc.text(
    'aktenzeichen: 645737 / Name: kunden / Date:' + newDate.slice(0, 23),
    20,
    10
  );
  doc.image(req.body.content, 20, 30, { width: 570, height: 700 });
  doc.end();

  let mailBody = `<h3>Mieter Engel</h3>
                  <p> KundenNummer: "user _id from database"</p> `;
  mailSender.sendMail('nemer.sahli@gmail.com', 'Contract document', mailBody);

  res.send({
    error: 0,
    somedata: 'hallo world ->' + req.body.userName + randomstring.generate(10)
  });
});

module.exports = router;
