require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const logTag = '[index.js]';
const User = require('@/../../Models/User');
const Recognition = require('@/../../Models/Recognition');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
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

app.get('/user/:userId', (req, res, next) => {
    req.params
    const user = new User({
        discordId: "456",
        discordUsername: "Dont@Me",
        givePoints: 500,
        earnedPoints: 1000
    });
    console.log(`${logTag} default user returned`);
    res.status(200).json({
        status: "Success!",
        content: {user}
    });
});

//fix this to a process.env var
app.listen(3000, () => console.log(`${logTag} merapi server started`));