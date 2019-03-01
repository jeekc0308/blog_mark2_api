const express = require('express');
const errorTemplate = require('../common/error_template');

module.exports = () => {
    const app = express();
    const PORT = process.env.PORT;

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    app.use((req, res, next) => {
        res.status(404).json(errorTemplate(404, "Page not found"))
    })
    app.listen(PORT, () => {
        console.log(`App listens port ${PORT}`);
    });
};