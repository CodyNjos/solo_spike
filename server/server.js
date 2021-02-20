const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require('body-parser');
const imageRouter = require('./routes/image.router.js')

const port = process.env.PORT || 5000;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for angular requests
app.use(express.static('build'));


/** ---------- ROUTES ---------- **/
app.use('/images', imageRouter);


/** ---------- START SERVER ---------- **/
app.listen(port, function () {
    console.log('Listening on port: ', port);
});
