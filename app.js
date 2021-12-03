//* Imports
require('dotenv').config();
require('express-async-errors');

//? create your app

const express = require('express');
const { sendEmail, resetEmail } = require('./controller/emailController');
const app = express();

//? Use the json middleware

app
  .use(express.json())
  .use(express.static('./public'))
  .use('/reset/:id', express.static('./form'))

  //? create a path for home that returns an h1 with EMAIL PROJECT and an anchor with an href to /send

  .get('/', (req, res) => {
    res.send('<h1>Email Project </h1> <a href="/send">Send mail </a>');
  })

  //? Create a /send route with  a GET method
  .get('/send', sendEmail)
  .get('/reset', resetEmail);

//? Create your port variable

const port = process.env.PORT || 3000;

//? Create your app startup function

const start = () => {
  try {
    app.listen(port, console.log(`Listening @ ${port}`));
  } catch (err) {
    console.log(err);
  }
};
//? Run the app startup function
start();
