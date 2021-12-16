const express = require('express');
const bodyParser = require('body-parser');
const SubscriberRoutes = require('./routes/subscriber');
const connection = require('./database')

const SERVER_PORT = 3000;

const server = express();

server.use(express.json());

server.use('/user', SubscriberRoutes);

server.listen(SERVER_PORT, () => {
    console.log(`Server started on ${SERVER_PORT} port.`);
});