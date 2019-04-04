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
  if (!req.body || !req.body.content) {
    return res.send({ error: 1000, message: 'Document is required!' });
  }

  var doc = new PDFDocument();
  doc.pipe(fs.createWriteStream('document.pdf'));
  let newDate = new Date();
  newDate = String(newDate);
  doc.text(
    'Aktenzeichen: User_Id / Name: Kunde / Datum:' + newDate.slice(0, 23),
    20,
    10
  );
  doc.image(req.body.content, 20, 30, { width: 570, height: 700 });
  doc.end();
  if (!fs.existsSync('document.pdf')) {
    res.send({
      error: 1001,
      message: 'Error: not able to create to PDF document!'
    });
  } else {
    console.log('file exist');
  }

  let mailBody = `<h3>Mieter Engel</h3>
                  <p> KundenNummer: "user _id from database"</p> `;
  mailSender.sendMail(
    'nemer.sahli@gmail.com',
    'Contract document',
    mailBody,
    res
  );
});

module.exports = router;
