var User = require("@/../../Models/User");
const logTag = "[UserController.js]";

exports.GetUserList = (req, res) =>{
    console.log(`${logTag} GetUserList called`);
    res.send("GetUserList");
};

exports.AddUser = (req, res) => {
    console.log(`${logTag} AddUser called`);
    res.send("AddUser");
};

exports.GetUser = (req, res) => {
    console.log(`${logTag} GetUser called`);
    res.send("GetUser");
};

exports.EditUser = (req, res) => {
    console.log(`${logTag} EditUser called`);
    res.send("EditUser");
};

exports.DeleteUser = (req, res) => {
    console.log(`${logTag} DeleteUser called`);
    res.send("DeleteUser");
};