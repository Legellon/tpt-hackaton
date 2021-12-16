const mongoose = require('mongoose');

const dbUrl = 'mongodb+srv://admin:admin@cluster0.8q9jp.mongodb.net/test';

mongoose.connect(dbUrl, {useNewUrlParser: true});
const conn = mongoose.connection;

conn.on('connected', () => {
    console.log('Database is connected successfully');
});

module.exports = conn;