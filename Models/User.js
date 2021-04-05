const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: { type: String, required: true },
    discordId: { type: String, required: true},
    discordUsername: { type: String }, 
    givePoints: { type: Number },
    earnedPoints: { type: Number }
});

module.exports = mongoose.model('User', userSchema);