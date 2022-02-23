const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
    console.log('Login router /');
    res.render('login', { title: 'Login' });
});

module.exports = router;