const express = require('express');
const SubscriberController = require('../controllers/subscriber');

const router = express.Router();

router.post('/subscribe', SubscriberController.subscribeHandle);
router.get('/activate/:token', SubscriberController.activateHandle);

module.exports = router;