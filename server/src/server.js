require('dotenv').config();

const http = require('http');
const app = require('./app');
const connectMongo = require('./utils/mongo/mongo.utils');

const server = http.createServer(app);

async function startServer() {
  await connectMongo();
  server.listen(process.env.PORT, () => {
    console.log(`Listening on Port: ${process.env.PORT}`);
  });
}

startServer();