const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
    const currentTime = new Date(1639605600 * 1000);

    console.log(currentTime);

    axios.get('https://dashboard.elering.ee/api/nps/price?start=2021-12-15T22%3A00%3A00.000Z&end=2021-12-16T21%3A00%3A00.000Z')
        .then((result) => {
            const forecast = result.data.data.ee;
            const originForecast = [...forecast];

            forecast.sort((a, b) => a.price - b.price);

            const cheapHours = []
            const expensiveHours = []

            for (let i = 1; i <= 4; i++) {
                cheapHours.push(forecast[i - 1]);
                expensiveHours.push(forecast[forecast.length - i]);
            }

            res.json({
                status: true,
                cheaps: cheapHours,
                expensives: expensiveHours,
                forecast: originForecast
            });
        }).catch((err) => {
            res.json({
                status: false,
                message: 'API connection failed'
            });
        });
});

module.exports = router;