const express = require('express');

module.exports = () => {
    const app = express();
    const PORT = process.env.PORT;

    app.get('/', (req, res) => {
        res.send("Hello World!");
    })
    app.listen(PORT, () => {
        console.log(`App listens port ${PORT}`);
    });
};