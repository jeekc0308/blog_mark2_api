const express = require('express');
const router = express.Router();

const authentication = require('../common/middleware.authentication');
const error_template = require('../common/error_template');
const db_errors = require('../common/db_error');

const postSchema = require('../models/post');
router.post('/', authentication, (req, res) => {
    const { post, title, url } = req.body;
    if (!post || !title || !url) {
        return res.status(400).json(error_template(400, "빈 필드가 있습니다."));
    }
    postSchema.create({ title, post, url })
        .then(() => {
            res.status(201).json({ success: true });
        })
        .catch(e => {
            if (db_errors.isUniqueError(e)) {
                return res.status(200).json(error_template(200, "이미 url가 있습니다."));
            }
            throw e;
        })
});
module.exports = router;