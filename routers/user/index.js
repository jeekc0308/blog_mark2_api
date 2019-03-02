const express = require('express');
const router = express.Router();

const error_template = require('../../common/error_template');
const db_errors = require('../../common/db_error');

const userSchema = require('../../models/user');

router.use('/auth', require('./auth'));

router.post('/', (req, res) => {
    const { username, password, nickname } = req.body;

    if (!username || !password || !nickname) {
        res.status(400).json(error_template(400, "빈 필드가 있습니다."));
        return;
    }
    userSchema.create({
        username,
        password,
        nickname
    })
        .then(value => {
            res.status(201).json({ success: true });
        })
        .catch(error => {
            if (db_errors.isUniqueError(error)) {
                res.status(200).json(error_template(200, "이미 유저가 있습니다."));
                return;
            }
            res.status(500).json(error_template(500, "서버에서 에러가 발생했습니다."));
        })

});
module.exports = router;