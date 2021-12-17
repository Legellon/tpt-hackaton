const express = require('express');
const SubscriberController = require('../controllers/subscriber');

const router = express.Router();

router.post('/subscribe', SubscriberController.handleSubscribe);
router.get('/activate/:token', SubscriberController.activateEmail);

module.exports = router;