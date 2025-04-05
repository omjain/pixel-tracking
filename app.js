const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const controller = require('./src/modules/pixelTracking/controller');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/v1', async(req, res) => {
    const filePath = path.join(__dirname, './src/pixel.js');
    res.setHeader('Content-Type', 'application/javascript');
    fs.createReadStream(filePath)
        .pipe(res);
});

app.get('/pixel', async(req, res) => {
    const trackingData = req.query;
    const ipAddress = req.headers["x-forwarded-for"]?.split(",")
        .shift() || req.headers["x-real-ip"] || req.socket.remoteAddress;
    await controller.saveTrackingData(trackingData, ipAddress)
        .then();
    const pixelPath = path.join(__dirname, 'src/pixel.gif');
    res.setHeader('Content-Type', 'image/gif');
    fs.createReadStream(pixelPath)
        .pipe(res);
});

module.exports = app;
