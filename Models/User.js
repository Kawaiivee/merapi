const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: { type: String, required: true },
    name: { type: String, required: true }
});

module.exports = User =  mongoose.model('User', userSchema);