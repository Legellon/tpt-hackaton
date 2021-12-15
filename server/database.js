const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/hackathon-mongodb', {useNewUrlParser: true});
const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('database is connected successfully');
});