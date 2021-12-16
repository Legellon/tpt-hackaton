const express = require('express');
const bodyParser = require('body-parser');
const Emitter = require('events');
const cron = require('node-cron');

const SubscriberRoutes = require('./routes/subscriber');
const ForecastRoutes = require('./routes/forecast');

const connection = require('./database');

const SERVER_PORT = 3000;

const server = express();

cron.schedule('*/1 * * * *', () => {
    console.log(1);
},{
    scheduled: true,
    timezone: "Europe/Tallinn"
});

server.use(express.json());

server.use('/', ForecastRoutes);
server.use('/user', SubscriberRoutes);

server.listen(SERVER_PORT, () => {
    console.log(`Server started on ${SERVER_PORT} port.`);
});