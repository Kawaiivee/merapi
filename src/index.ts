require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const mongoose = require('mongoose');

const logTag = '[index.ts]';
const UserController = require('@/../../src/Controllers/UserController');
const NoteController = require('@/../../src/Controllers/NoteController');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true , user: process.env.USER, pass: process.env.PASS, dbName: process.env.DATABASE_NAME });
const db = mongoose.connection;
db.on('error', (error: Error) => console.error(error));
db.once('open', () => console.log(`${logTag} connected to database`));

//init express + cors
app.use(express.json());
app.use((req: express.Request, res: express.Response, next: express.NextFunction) => {
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

//User Controller Endpoints
app.get('/user/list', async (req: express.Request, res: express.Response) => {
	const result = await UserController.GetUserList(req, res);
	res.send(result);
});

app.get('/user/:userId', UserController.GetUser);

app.post('/user/add', async (req: express.Request, res: express.Response) => {
	const result = await UserController.AddUser(req);
	res.send(result);
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