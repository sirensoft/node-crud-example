var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken')

var User = require('../models/user');
var mUser = new User();

router.get('/', function(req, res) {
    res.render('../views/auth/index')
})



router.post('/login', async function(req, res) {
    let username = req.body.username,
        password = req.body.password;

    let logged = await mUser.login(username, password);


    if (logged) {
        req.session.username = username;
        var token = await jwt.sign({ user: username, pass: password }, 'secret', { expiresIn: 60 })
        req.session.token = token;
        console.log(token)

        res.redirect('/person');
    } else {
        res.redirect('/auth');
    }
})

router.get('/logout', function(req, res) {
    req.session.destroy();
    res.clearCookie('username');
    res.redirect('/auth');
});


module.exports = router;