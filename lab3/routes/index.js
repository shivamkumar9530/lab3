'use strict';
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {

    res.render('index', { title: 'Express' });

});

router.get('/shivam', function (req, res) {

    res.render('Shivam', { title: 'Shivam' });

});

router.get('/pankaj', function (req, res) {

    res.render('Pankaj', { title: 'Pankaj' });

});

router.get('/agyarani', function (req, res) {

    res.render('AgyaRani', { title: 'AgyaRani' });

});

router.get('/sukhdevsingh', function (req, res) {

    res.render('SukhdevSingh', { title: 'SukhdevSingh' });

});
module.exports = router;
