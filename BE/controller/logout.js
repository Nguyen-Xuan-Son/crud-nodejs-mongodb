const User = require('./../schemas/user');

exports.logout = (req, res) => {
    const token = req.headers.token.split(' ')[1];
    User.findOne({token}).then((user) => {
        if (!user) return res.status(400).json({mes: 'User not found!'});
        return res.json({mes: 'Logout success!'});
    }).catch((err) => res.status(500).json(err));
};
