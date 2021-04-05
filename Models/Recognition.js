const User = require('@/../../Models/User');
const mongoose = require('mongoose');

const recognitionSchema = mongoose.Schema({
    author: { type: String },
    receiver: { type: String },
    timestamp: { type: Date, default: Date.now },
    shared: Boolean
});

module.exports = mongoose.model('Recognition', recognitionSchema);