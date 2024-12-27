const express = require('express');
const router = express.Router();

router.get('/', (req ,res)=> { res.send("Hello")});
router.get('/home', (req ,res)=> { res.send(" welcom to my home page")});

module.exports = router