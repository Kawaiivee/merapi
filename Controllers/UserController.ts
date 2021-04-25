var MongoAPI = require('@/../../APIs/MongoAPI');
var User = require("@/../../Models/User");

const logTag = "[UserController.js]";

exports.GetUserList = async (req, res) => {
    console.log(`${logTag} GetUserList called`);
    var result = await MongoAPI.GetUserList();
    res.send(result);
};

exports.AddUser = async (req, res) => {
    console.log(`${logTag} AddUser called`);

    const newUser = {
        userId: req.body.userId,
        name: req.body.name
    };
    var result = await MongoAPI.AddUser(newUser);
    console.log(result);
    res.send();
};

exports.GetUser = (req, res) => {
    console.log(`${logTag} GetUserList called`);
    var result = MongoAPI.GetUserList();
    res.send(result);
};

exports.EditUser = (req, res) => {
    console.log(`${logTag} EditUser called`);
    res.send("EditUser");
};

exports.DeleteUser = (req, res) => {
    console.log(`${logTag} DeleteUser called`);
    res.send("DeleteUser");
};