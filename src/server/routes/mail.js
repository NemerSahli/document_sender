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

  var doc = new PDFDocument({ margins: 50, padding: 50 });
  doc.pipe(fs.createWriteStream('output.pdf'));
  // PDF Creation logic goes here
  doc.image(req.body.content, 20, 20, { width: 550, height: 550 });
  // Add a 50 point margin on all sides

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
