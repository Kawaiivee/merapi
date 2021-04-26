import express from 'express';
var MongoAPI = require('@/../../src/APIs/MongoAPI');
var User = require("@/../../src/Models/User");

const logTag = "[UserController.ts]";

exports.GetUserList = async (req: express.Request, res: express.Response) => {
    console.log(`${logTag} GetUserList called`);
    var result = await MongoAPI.GetUserList();
    return result;
};

exports.AddUser = async (req: express.Request, res: express.Response) => {
    console.log(`${logTag} AddUser called`);

    const newUser: User = {
        userId: req.body.userId,
        name: req.body.name
    };
    var result = await MongoAPI.AddUser(newUser);
    return result;
};

exports.GetUser = (req: express.Request, res: express.Response) => {
    console.log(`${logTag} GetUserList called`);
    var result = MongoAPI.GetUserList();
    res.send(result);
};

exports.EditUser = (req: express.Request, res: express.Response) => {
    console.log(`${logTag} EditUser called`);
    res.send("EditUser");
};

exports.DeleteUser = (req: express.Request, res: express.Response) => {
    console.log(`${logTag} DeleteUser called`);
    res.send("DeleteUser");
};