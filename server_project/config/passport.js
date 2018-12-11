const JwtStrategy = require('passport-jwt').Strategy; // JWT authentication 
const ExtractJwt = require('passport-jwt').ExtractJwt; // Extracting the JWT from the request ( can be from header, body, authHeader, urlQuery...)

const mongoose = require('mongoose');
const User = mongoose.model('users');
const secretKey = "scKeys";
const opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secretKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        console.log(jwt_payload)
        User.findById(jwt_payload.id)
            .then( user => {
                if(user){
                    console.log('user')
                    return done(null, user);
                }
                return done(null, false);
            })
            .catch(err => console.log( err));
        })
    )
};