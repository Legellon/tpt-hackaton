const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/', async (req, res) => {
    const currentTime = new Date(1639605600 * 1000);

    console.log(currentTime);

    axios.get('https://dashboard.elering.ee/api/nps/price?start=2021-12-15T22%3A00%3A00.000Z&end=2021-12-16T21%3A00%3A00.000Z')
        .then((result) => {
            const forecast = result.data.data.ee;
            const array = [forecast];

            array.sort((a, b) => a.price - b.price)
 
            console.log(array)
        }).catch((err) => {
            console.log(err);
        });
});

module.exports = router;