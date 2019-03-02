const mongoose = require('mongoose');
const codeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Code', codeSchema);