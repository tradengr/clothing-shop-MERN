require('dotenv').config();

const http = require('http');

const app = require('./app');
const { connectMongo } = require('./utils/mongo/mongo.utils');

const server = http.createServer(app);

const PORT = process.env.PORT;

async function startServer() {
  await connectMongo();
  
  server.listen(PORT, () => {
    console.log(`Listening on Port: ${PORT}`);
  });
}

startServer();