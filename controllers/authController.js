var express = require('express');
var router = express.Router();

var User = require('../models/user');
var mUser = new User();

router.get('/', function(req, res) {
    res.render('../views/auth/index')
})

router.post('/login', async function(req, res) {
    let username = req.body.username,
        password = req.body.password;

    let logged = await mUser.login(username, password);
    console.log(logged)

    if (logged) {
        req.session.username = username;
        res.redirect('/');
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