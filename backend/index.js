const express = require('express');
const cors = require('cors');
const ip = require('ip');
const dotenv = require('dotenv');

const app = express();
app.use(cors());
dotenv.config();

const APP_PORT = process.env.APP_PORT || 5000;

app.get('/', (req, res) => {
    res.send({
        status: 200,
        ip: ip.address()
    });
});

app.listen(APP_PORT, () => console.log("Application is running on", APP_PORT));