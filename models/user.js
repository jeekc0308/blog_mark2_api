const mongoose = require('mongoose');
const passwordCrypt = require('../common/password_crypt');
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true,
        unique: true
    }
});
userSchema.indexes({
    username: 1,
    nickname: 1,
});
userSchema.methods.comparePassword = function (pw) {
    return passwordCrypt(pw) == this.password;
}
userSchema.pre('save', function (next) {
    const user = this;

    if (!user.isModified('password')) return next();

    user.password = passwordCrypt(user.password);
    next();
});

module.exports = mongoose.model('User', userSchema);