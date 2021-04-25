var Note = require("@/../../Models/Note");
const logTag: String = "[NoteController.js]";

exports.GetNoteList = (req, res) =>{
    console.log(`${logTag} GetNoteList called`);
    res.send("GetNoteList");
};

exports.AddNote = (req, res) => {
    console.log(`${logTag} AddNode called`);
    res.send("AddNote");
};

exports.GetNote = (req, res) => {
    console.log(`${logTag} GetNote called`);
    res.send("GetNote");
};

exports.EditNote = (req, res) => {
    console.log(`${logTag} EditNote called`);
    res.send("EditNote");
};

exports.DeleteNote = (req, res) => {
    console.log(`${logTag} DeleteNote called`);
    res.send("DeleteNote");
};