const nodemailer = require('nodemailer');
require('dotenv').config();

const sendEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'lela.hermiston76@ethereal.email',
      pass: 'swUC9e33jaKaAmU9r1',
    },
  });

  let info = await transporter.sendMail({
    to: 'jaxson33398@gmail.com',
    from: 'MrGoogle@google.org',
    subject: 'NodeMailer Test',
    html: '<h1>Hello World!</h1><p>Testing <em>Nodemailer</em></p>',
  });
  res.json(info);
};

const resetEmail = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'lela.hermiston76@ethereal.email',
      pass: 'swUC9e33jaKaAmU9r1',
    },
  });

  let randomNum = Math.floor(Math.random() * (9999999999 - 1000000000) + 1000000000);

  let info = await transporter.sendMail({
    to: 'jaxson33398@gmail.com',
    from: 'MrGoogle@google.org',
    subject: 'NodeMailer Test',
    html: `<h1>Hello!</h1><p>Your password is ${randomNum}</p>`,
  });
  res.json(info);
};

module.exports = { sendEmail, resetEmail };
