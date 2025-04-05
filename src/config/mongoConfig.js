const mongoose = require('mongoose');
const moment = require('moment');
const mongodbURI = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DATABASE}`;

let mongoConfig = '';

const connectToMongoDB = async () => {
    try {
       mongoConfig = await mongoose.connect(mongodbURI,{});
        console.info(`[+++] [${moment().format('HH:mm:ss')}] MongoDB Connected!`);
    } catch (error) {
        console.error(`[>>>] [${moment().format('HH:mm:ss')}] Error occurred while connecting MongoDB!`, error);
    }
};

module.exports = { connectToMongoDB };
