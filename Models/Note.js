const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    author: { type: String, required: true },
    receiver: { type: String },
    note: { type: String },
    timestamp: { type: Date, default: Date.now },
});

module.exports = Note = mongoose.model('Note', noteSchema);