const model = require("./model");

class Controller {
    async saveTrackingData(trackingData, ipAddress) {
        try {
            const customMetadata = {};
            Object.keys(trackingData)
                .forEach((key) => {
                    if (key.startsWith('cmd_')) {
                        customMetadata[key] = trackingData[key];
                    }
                });

            const obj = {
                clientCode: trackingData.cc,
                event: trackingData.ev,
                eventData: trackingData.ed,
                timestamp: trackingData.ts,
                version: trackingData.v,
                documentLocation: trackingData.dl,
                referrerLocation: trackingData.rl,
                documentEncoding: trackingData.de,
                screenResolution: trackingData.sr,
                viewport: trackingData.vp,
                colorDepth: trackingData.cd,
                documentTitle: trackingData.dt,
                mobileDevice: trackingData.md,
                userAgent: trackingData.ua,
                timezoneOffset: trackingData.tz,
                cookies: trackingData.ck,
                customMetadata: customMetadata,
                ipAddress: ipAddress,
                createdDate: new Date(),
            }
            await model.saveData(obj);
        } catch (error) {
            console.error('Error saving tracking data:', error);
        }
    }
}

module.exports = new Controller();
