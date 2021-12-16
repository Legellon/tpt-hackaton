const mongoose = require('mongoose');

const dbUrl = 'mongodb://localhost:27017/hackathon-db';

mongoose.connect(dbUrl, {useNewUrlParser: true});
const conn = mongoose.connection;

conn.on('connected', () => {
    console.log('Database is connected successfully');
});

module.exports = conn;