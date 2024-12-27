const express = require('express');
const router = express.Router();

router.get('/', (req ,res)=> { 
    res.send("Hello it's great!")
});

module.exports = router