var express = require('express')
var router = express.Router();

var Person = require('../models/person')
var mPerson = new Person();

var authCheck = require('../modules/authCheck');
router.use(authCheck);

router.get('/', async function(req, res) {
    let persons = await mPerson.findAll();


    res.render('../views/person/index', { title: 'Person', persons: persons })
})

router.get('/view/:id', async function(req, res) {
    let person = await mPerson.findOne(req.params.id);
    res.render('../views/person/view', { person: person })
})

router.get('/create', (req, res) => {
    res.render('../views/person/create')
})

router.post('/create', async(req, res) => {
    console.log(req.body)
    await mPerson.create(req.body);
    res.redirect('/person');
})

router.get('/update/:id', async(req, res) => {
    let person = await mPerson.findOne(req.params.id);
    res.render('../views/person/update', { id: req.params.id, person: person })
})

router.post('/update/:id', async(req, res) => {

    await mPerson.update(req.params.id, req.body);
    res.redirect('/person');
})

router.get('/delete/:id', async function(req, res, next) {
    console.log(req.params.id)
    await mPerson.delete(req.params.id)
    res.redirect('/person');
})


module.exports = router;