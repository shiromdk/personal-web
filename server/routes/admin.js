const express = require('express');
const router = express.Router();
const path = require('path');


router.get('/', function(req, res, next) {
    res.render('layout', {
        user: req.user,
    });
});


module.exports = router;
