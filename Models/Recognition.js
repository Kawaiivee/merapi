const mongoose = require('mongoose');
const User = require('@/../../Models/User');

const recognitionSchema = mongoose.Schema({
    author: { discordId: String },
    receiver: { discordId: String },
    timestamp: { type: Date, default: Date.now },
    shared: Boolean
});

module.exports = Recognition = mongoose.model('Recognition', recognitionSchema);