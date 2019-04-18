const Strategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const keys = require('./keys');
const mongoose = require('mongoose');
const Users = mongoose.model('users');

const otps = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: keys.keyToken
};

module.exports = passport => {
    passport.use(new Strategy(otps, (jwt, done) => {
        Users.findById(jwt.id).then((user) => {
            if(user) {
                return done(null, user);
            }
            return done(null, false);
        }).catch((err) => console.error(err));
    }));
};

