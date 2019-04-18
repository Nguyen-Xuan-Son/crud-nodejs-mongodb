const User = require('./../schemas/user');

exports.account = (req, res) => {
    const token = req.headers.token.split(' ')[1];
    User.findOne({token}).then((user) => {
        if (!user) return res.status(400).json({mes: 'User not found!'});
        return res.json(user);
    }).catch((err) => res.status(500).json(err));
};

exports.accountById = (req, res) => {
    User.findOne({_id: req.query.id}).then((user) => {
        if (!user) return res.status(400).json({mes: 'User not found!'});
        return res.json(user);
    }).catch((err) => res.status(500).json(err));
};

exports.updateAccount = (req, res) => {
    const timeNow = new Date();
    const token = req.headers.token.split(' ')[1];
    User.findOneAndUpdate({token}, {...req.body, updateAt: timeNow}, {new: true}).then(() => res.json({mes: 'Update user success!'})).catch((err) => res.status(500).json(err));
};

exports.userQuery = (req, res) => {
    let page = Number(req.query.page);
    let size = Number(req.query.size);
    User.find().limit(size)
        .skip(size * page).then((users) => res.json(users)).catch(err => res.json(err));
};
