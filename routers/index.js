const express = require('express');
const mongoose = require('mongoose');

const errorTemplate = require('../common/error_template');

function getDBURL() {
    const dbUsername = process.env.DB_USERNAME || null;
    const dbPassword = process.env.DB_PASSWORD || null;
    let dbPort = process.env.DB_PORT || null;
    const dbHost = process.env.DB_HOST || "localhost";

    let dbAuth = "";
    if (dbUsername && dbPassword) {
        dbAuth = `${dbUsername}:${dbPassword}@`;
    }
    if (dbPort) {
        dbPort = ":" + dbPort;
    }
    const dbName = process.env.DB_NAME || "blog";

    return `mongodb://${dbAuth}${dbHost}${dbPort || ""}/${dbName}`;
}
module.exports = () => {
    const app = express();
    const db = mongoose.connection;
    const PORT = process.env.PORT;

    db.on('error', console.error);
    db.once('open', () => {
        console.log("Connected on mongodb server");
    });

    mongoose.connect(getDBURL(), {
        useNewUrlParser: true
    });

    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    app.use("/user", require('./user'));

    app.use((err, req, res, next) => {
        const statusCode = err.statusCode || 500;
        res.status(statusCode).json(errorTemplate(statusCode, err.message));
    });

    app.use((req, res, next) => {
        res.status(404).json(errorTemplate(404, "Page not found"))
    });

    app.listen(PORT, () => {
        console.log(`App listens port ${PORT}`);
    });
};