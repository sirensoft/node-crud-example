var authCheck = function(req, res, next) {
    if (req.session.username && req.cookies.username) {
        next();
    } else {
        res.redirect('/auth');
    }
}

module.exports = authCheck;