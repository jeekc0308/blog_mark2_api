const express = require('express');
const router = express.Router();

const codeSchema = require('../../models/code');
router.get('/code/:code', (req, res) => {
    res.json({
        success: true
    });
});
module.exports = router;