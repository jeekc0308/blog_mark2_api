const TYPE = {
    UNIQUE: "UNIQUE_ERROR",
};

exports.TYPE = TYPE;
exports.isUniqueError = (err) => {
    if (err.name === 'MongoError' && err.code === 11000) {
        return true;
    }
    return false;
};
/**
 * @returns {TYPE}
 */
exports.getErrorType = (err) => {
    if (isUniqueError(err))
        return TYPE.UNIQUE;
    return null;
}