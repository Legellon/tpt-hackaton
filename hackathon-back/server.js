require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const cors = require('cors');

const SubscriberRoutes = require('./routes/subscriber');
const ForecastRoutes = require('./routes/forecast');

const connection = require('./database');

const PORT = process.env.SERVER_PORT;

const server = express();

server.use(express.json());
server.use(cors());

server.use('/', ForecastRoutes);
server.use('/user', SubscriberRoutes);

cron.schedule('*/1 * * * *', () => {
    console.log(1);
},{
    scheduled: true,
    timezone: "Europe/Tallinn"
});

server.listen(PORT, () => {
    console.log(`Server started on ${PORT} port.`);
});