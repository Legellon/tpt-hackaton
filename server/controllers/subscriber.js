const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const Subscriber = require('../models/subscriber');
const emailer = require('../../emailer.js');

const SECRET_KEY = 'cf498712eeca69ffa1ac32aec178fc4d7f8a1c236b89173a5ceb154575fdfbca2814bbbd24eb387773a50d24c9cc9d5dca91';

exports.subscribeHandle = (req, res) => {
    const { email } = req.body;

    Subscriber.findOne({ "email": email })
        .then(sub => {
            if (sub) {
                res.json({
                    message: 'Email alredy exists',
                    status: false
                });
            }
            else {
                const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '30m' });
                const verifyURL = `http://localhost:3000/user/activate/${token}`;

                emailer.send(email, "subject", verifyURL);

                //send activate mail
                console.log(verifyURL);

                res.json({
                    message: 'Confirm your email',
                    status: true
                });
            }
        });
}

exports.activateHandle = (req, res) => {
    const { token } = req.params;

    if (token) {
        jwt.verify(token, SECRET_KEY, async (err, tokenBody) => {
            if (err) {
                res.json({
                    message: 'Incorrect or expired link',
                    status: false
                });
            }
            else {
                const { email } = tokenBody;

                Subscriber.findOne({ "email": email })
                    .then(async sub => {
                        if (sub) {
                            res.json({
                                message: 'Email alredy exist',
                                status: false
                            });
                        }
                        else {
                            const subscriber = new Subscriber({
                                _id: mongoose.Types.ObjectId(),
                                email: email
                            });
                            await subscriber.save();

                            res.json({
                                message: 'Account activated',
                                status: true
                            });
                        }
                    });
            }
        });
    }
    else {
        res.json({
            message: 'Somehting went wrong',
            status: false
        });
    }
}