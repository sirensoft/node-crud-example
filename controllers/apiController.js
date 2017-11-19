var express = require('express');

var router = express.Router();
var Person = require('../models/person')
var mPerson = new Person();
var jwtCheck = require('../modules/jwtCheck')

router.get('/persons', jwtCheck, async(req, res) => {
    let persons = await mPerson.findAll();
    res.status(200).json(persons)
});


module.exports = router;