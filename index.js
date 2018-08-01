const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/hotel');

const app = express();

mongoose.connect('mongodb://localhost/sid');

app.use(bodyParser.json());

app.use('/api',routes);


app.listen(1000, function () {
   console.log('Port is running on 1000');
});