const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//models come before router to inject into router
const Book = require('./models/bookModel');

// execute this?
const bookRouter = require('./routes/bookRouter')(Book);

const port = process.env.PORT || 3000;
const connectionString = process.env.CONNECTION_STRING || `mongodb://root:root@localhost:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false`;
const dbName = process.env.DB_NAME || `bookAPI`;

const db = mongoose.connect(connectionString, {
  dbName: dbName,
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Hello from merapi');
});

app.listen(port, () => {
  console.log(`Running on port: ${port}`);
});
