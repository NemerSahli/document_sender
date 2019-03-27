var nodemailer = require('nodemailer');

function sendMail(recipientAddress, subject, body, doc) {
  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'mieter.engel24@gmail.com',
      pass: 'Engel2019'
    }
  };

  var transporter = nodemailer.createTransport(smtpConfig);

  var mailOptions = {
    from: ' "Mieter Engel" <mieter.engel24@gmail.com>',
    to: recipientAddress,
    subject: subject,
    text: 'Hello World',
    html: body,
    attachments: [
      {
        filename: doc,
        contentType: 'application/pdf'
      }
    ]
  };
  transporter.sendMail(mailOptions, function(err, info) {
    if (err) console.log('mail was not delivered');
  });
}
module.exports.sendMail = sendMail;
