const express = require('express');
const cors = require('cors');
const ip = require('ip');
const dotenv = require('dotenv');

const app = express();

const APP_PORT = process.env.APP_PORT || 5000;
const APP_HOST = process.env.APP_HOST || "localhost";

app.use(cors({ origin: `http://${APP_HOST}` }));
dotenv.config();


app.get('/', (req, res) => {
    res.send({
        status: 200,
        ip: ip.address()
    });
});

app.listen(APP_PORT, () => console.log("Application is running on", APP_PORT));