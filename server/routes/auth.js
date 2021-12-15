const express = require('express');
const mongoose = require('mongoose');
const User = require('../models/user');

const dbUrl = 'mongodb://localhost/hachathon-mongodb';

const router = express.Router();

mongoose.connect(dbUrl, err => {
    if (err) {
        console.log('Error in connect the database' + err);
    } else {
        console.log('Connected to Mongodb');
    }
})

router.get('/', (req, res) => {
    res.send('API Router');
});

router.post('/register', (req, res) => {
    const { email } = req.body;

    console.log('register triggered');

    User.find({
        "email": email
    }).then(
        result => {
            if (result.length !== 0) {
                res.json({
                    message: 'Email alredy exists',
                    status: false
                });
            } else {
                const userData = req.body
                const user = new User(userData)
                user._id = new mongoose.Types.ObjectId()
                console.log(user);
                user.save()
                    .then(
                        result => {
                            res.json({
                                message: 'User register success',
                                status: true,
                                send: (userData)
                            })
                        }
                    )
                    .catch(
                        error => {
                            res.json({
                                message: 'User Register fail',
                                status: false,
                            })
                        }
                    )
            }
        }
    );

});

module.exports = router;