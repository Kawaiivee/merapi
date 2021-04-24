require('dotenv').config();
import express from "express";
const app = express();
const mongoose = require('mongoose');

const logTag = '[index.js]';
const UserController = require("@/../../Controllers/UserController");
const NoteController = require("@/../../Controllers/NoteController");

mongoose.Promise = global.Promise;
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

//User Controller Endpoints
app.get('/user/list', (req, res) => {
	return UserController.GetUserList();
});

app.get('/user/:userId', UserController.GetUser);

app.post('/user/add', (req, res) => {
	return UserController.AddUser(req);
});

app.post('/user/edit', UserController.EditUser);

app.get('/user/:useId', UserController.DeleteUser);

//Note Controller Endpoints
app.get('/note/list', NoteController.GetNoteList);

app.get('/note/:noteId', NoteController.GetNote);

app.post('/note/add', NoteController.AddNote);

app.post('/note/edit', NoteController.EditNote);

app.get('/note/:noteId', NoteController.DeleteNote);

//fix this to a process.env var
app.listen(process.env.PORT, () => console.log(`${logTag} merapi server started`));