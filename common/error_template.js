module.exports = (statusCode, message) => {
    if (statusCode >= 200 && statusCode < 300) {
        return {
            success: false,
            message
        }
    }
    return {
        message,
        statusCode
    }
};