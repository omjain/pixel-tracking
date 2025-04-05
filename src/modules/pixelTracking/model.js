const pixelTrackingSchema = require('./pixelTrackingSchema');
const model = {};

model.saveData = (obj) => {
    const data = new pixelTrackingSchema(obj);
    return data.save();
};

module.exports = model;