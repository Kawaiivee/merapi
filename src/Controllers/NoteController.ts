import express from 'express';
var MongoAPI = require('@/../../src/APIs/MongoAPI');
var Note = require("@/../../src/Models/Note");
const logTag: String = "[NoteController.ts]";

exports.GetNoteList = (req: express.Request, res: express.Response) =>{
    console.log(`${logTag} GetNoteList called`);
    res.send("GetNoteList");
};

exports.AddNote = (req: express.Request, res: express.Response) => {
    console.log(`${logTag} AddNode called`);
    res.send("AddNote");
};

exports.GetNote = (req: express.Request, res: express.Response) => {
    console.log(`${logTag} GetNote called`);
    res.send("GetNote");
};

exports.EditNote = (req: express.Request, res: express.Response) => {
    console.log(`${logTag} EditNote called`);
    res.send("EditNote");
};

exports.DeleteNote = (req: express.Request, res: express.Response) => {
    console.log(`${logTag} DeleteNote called`);
    res.send("DeleteNote");
};