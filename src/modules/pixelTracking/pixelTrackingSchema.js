const mongoose = require('mongoose');

const pixelTrackingObj = new mongoose.Schema({
    clientCode: String,
    event: String,
    eventData: String,
    timestamp: String,
    version: String,
    documentLocation: String,
    referrerLocation: String,
    documentEncoding: String,
    screenResolution: String,
    viewport: String,
    colorDepth: String,
    documentTitle: String,
    mobileDevice: String,
    userAgent: String,
    timezoneOffset: String,
    cookies: String,
    customMetadata: { type: mongoose.Schema.Types.Mixed },
    ipAddress: String,
    createdDate: Date,
});

const pixelTrackingSchema = mongoose.model('pixelTrackingData', pixelTrackingObj, 'pixelTrackingData');

module.exports = pixelTrackingSchema;
