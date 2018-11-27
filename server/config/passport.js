const jwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
//const mongoose = require('mongoose');

const User = require('../models/User');
// const User = mongoose.model('users');
const keys = require('../config/keys');

const opts = {}; //empty object (options)
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {
    //console.log(keys);
    passport.use(
        new jwtStrategy(opts, (jwt_payload, done) => {
            // console.log(jwt_payload);
            User.findById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => console.log(err));
                
        })
    );

};