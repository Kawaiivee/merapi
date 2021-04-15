const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    author: { type: String },
    receiver: { type: String },
    note: { type: String },
    timestamp: { type: Date, default: Date.now },
    shared: Boolean
});

module.exports = Note = mongoose.model('Note', noteSchema);