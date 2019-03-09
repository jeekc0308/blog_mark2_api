const error_template = require('./error_template');
const JWT = require('jsonwebtoken');

const jwt_secret = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
    const accessToken = req.headers['x-access-token'];
    if (!accessToken) {
        return res.status(403).json(error_template(403, "토큰이 필요합니다."));
    }
    try {
        JWT.verify(accessToken, jwt_secret);
        next();
    } catch (e) {
        return res.status(403).json(error_template(403, "토큰이 유효하지 않습니다."));
    }
};