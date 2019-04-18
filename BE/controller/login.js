const jwt = require('jsonwebtoken');
const keys = require('./../config/keys');
const request = require('request');
const Users = require('./../schemas/user');

const updateTokenUser = (email, token, res) => {
    Users.findOneAndUpdate(email, {token}, {new: true}).then(() => res.json({token})).catch((err) => res.json(err));
};

const saveUser = (newUser, res, token) => {
    newUser.save().then(() => res.json({token})).catch(onrejected => res.json(onrejected));
};

exports.login = (req, res) => {
    const {idToken} = req.body;
    request('https://oauth2.googleapis.com/tokeninfo?id_token=' + idToken, (error, response) => {
        if (!error && response.statusCode === 200) {
            const {email, name, picture} = JSON.parse(response.body);
            if (/\@ntq\-solution\.com\.vn$/.test(email)) {
                Users.findOne({email}).then((user) => {
                    // Gen token and expires
                    const token = jwt.sign({email, name, picture}, keys.keyToken, {expiresIn: 1800});

                    let newUser = new Users({email, name, picture, token});
                    if (!user) {
                        saveUser(newUser, res, token);
                    } else {
                        updateTokenUser(user.email, token, res);
                    }
                }).catch((err) => res.status(500).json(err));
            } else {
                return res.status(403).json({msg: 'This is not email company'});
            }
        } else {
            res.status(response.statusCode).json(error);
        }
    });
};
