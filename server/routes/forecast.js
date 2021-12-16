const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({
        message: "Forecast Main Page"
    })
});

module.exports = router;