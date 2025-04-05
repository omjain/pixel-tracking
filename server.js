require('dotenv').config();
const http = require('http');
const { connectToMongoDB } = require('./src/config/mongoConfig');
const app = require('./app');

const port = process.env.PORT || 2000;

(async () => {
    try {
        await connectToMongoDB();
        http.createServer(app).listen(port, () => {
            console.log(`Server is listening on localhost:${port}`);
        });
    } catch (error) {
        console.error(`[Server] Failed to start due to an error:`, error);
        process.exit(1);
    }
})();
