require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const UserController = require("@/../../Controllers/UserController");
const NoteController = require("@/../../Controllers/NoteController");

const logTag = '[index.js]';

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true , user: process.env.USER, pass: process.env.PASS, dbName: process.env.DATABASE_NAME });
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log(`${logTag} connected to database`));


app.use((req, res, next) => {
	res.setHeader(
		"Access-Control-Allow-Origin",
		"*"
	);
	res.setHeader(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.setHeader(
		"Access-Control-Allow-Methods",
		"GET, POST, DELETE, PATCH, PUT, OPTIONS"
	);
	next();
});

app.use(express.json());

app.get('/user/list', UserController.GetUserList);

app.post('/user/add', UserController.AddUser);

app.put('/user/edit');

//fix this to a process.env var
app.listen(3000, () => console.log(`${logTag} merapi server started`));