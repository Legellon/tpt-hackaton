const express = require('express');
const bodyParser = require('body-parser');
const AuthRoute = require('./routes/auth');

const SERVER_PORT = 15000;

const server = express();

server.use(express.json());
server.use(express.urlencoded({
    extended: false
}));

server.use('/', AuthRoute);

server.listen(SERVER_PORT, () => {
    console.log(`Server started on ${SERVER_PORT} port.`);
});