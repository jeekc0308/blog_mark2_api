const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    post: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = mongoose.model('Post', postSchema);