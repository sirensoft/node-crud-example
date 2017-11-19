var jwt = require('jsonwebtoken')
var jwtCheck = function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    // decode token
    if (token) {
        jwt.verify(token, 'secret', function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Invalid or Expired token.' });
            } else {
                req.decoded = decoded;
                next();
            }
        });

    } else {
        // if there is no token        
        return res.status(403).send({ success: false, message: 'No token' });
    }
}

module.exports = jwtCheck;