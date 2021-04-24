// index.js contains mongo process.env vars
const mongoose = require('mongoose');
var User = require("@/../../Models/User");

const logTag = "[MongoAPI.js]";
const collectionName = "User";

exports.GetUserList = async () => {
    console.log(`${logTag} GetUserList called`);
    const rawsult = await User.find({});
    console.log(rawsult);
    return {...rawsult, 'YEET': 'YEET'};
}

exports.AddUser = async () => {
    console.log(`${logTag} AddUser called`);
    const rawsult = await User.create({
        userId: "testUserId",
        name: "Ramir"
    });
}