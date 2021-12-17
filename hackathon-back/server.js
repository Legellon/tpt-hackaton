require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const cors = require('cors');

const SubscriberRoutes = require('./routes/api/subscriber');
const ForecastRoutes = require('./routes/api/forecast');
const ApiRoutes = require('./routes/api/api');

const connection = require('./database');

const PORT = process.env.SERVER_PORT;

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api', ApiRoutes);

cron.schedule('*/1 * * * *', () => {
    console.log(1);
},{
    scheduled: true,
    timezone: "Europe/Tallinn"
});

server.listen(PORT, () => {
    console.log(`Server started on ${PORT} port.`);
});