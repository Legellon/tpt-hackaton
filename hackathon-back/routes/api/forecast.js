const express = require('express');
const ForecastController = require('../../controllers/forecast');

const router = express.Router();

router.get('/', ForecastController.getForecastData);

module.exports = router;