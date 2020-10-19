const express = require('express');
const router = express.Router();
const randomstring = require('randomstring');
const mailSender = require('../mailHandler/mailSender');

const PDFDocument = require('pdfkit');
const fs = require('fs');

router.post('/send', (req, res) => {
  if (!req.body || !req.body.content) {
    return res.send({ error: 204, message: 'Document is required!' });
  }
  let pdfFileName = randomstring.generate(10);

  var doc = new PDFDocument();
  let stream = fs.createWriteStream(pdfFileName + '.pdf');
  doc.pipe(stream);
  let newDate = new Date();
  newDate = String(newDate);
  doc.text(
    'Aktenzeichen: User_Id / Name: Kunde / Datum:' + newDate.slice(0, 23),
    20,
    10
  );

  doc.image(req.body.content, 20, 30, { width: 570, height: 700 });
  doc.end();

  stream.on('finish', () => {
    if (!fs.existsSync(pdfFileName + '.pdf')) {
      res.send({
        error: 500,
        message: 'Error: not able to create PDF document!'
      });
    }

    let mailBody = `<h3>Mieter Engel</h3>
                    <p> KundenNummer: "user _id from database"</p> `;
    mailSender.sendMail(
      'example@domain.com',
      'Contract document',
      mailBody,
      pdfFileName,
      res
    );
  });
});

module.exports = router;
