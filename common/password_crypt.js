const crypto = require('crypto');
const cryptPassword = process.env.CRYPT_PASSWORD || "Afnghfsdk@dsgds45tfgDSgfsd$";

module.exports = (pw) => {
    return crypto.pbkdf2Sync(pw, cryptPassword, 100000, 64, 'sha512').toString('base64');
}