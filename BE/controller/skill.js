const Skill = require('./../schemas/skill');
const User = require('./../schemas/user');

exports.create = (req, res) => {
    const {name, logo} = req.body;
    const token = req.headers.token.split(' ')[1];
    User.findOne({token}).then((user) => {
        const skill = new Skill({name, logo, userId: user._id});
        skill.save().then(() => res.json({mes: 'Create skill success!'})).catch(onrejected => res.status(403).json(onrejected));
    }).catch(err => res.status(500).json(err));
};

exports.update = (req, res) => {
    const {token} = req.headers.token.split(' ')[1];
    User.findOne({token}).then(() => {
        const timeNow = new Date();
        Skill.findOneAndUpdate({_id: req.body._id}, {...req.body, updateAt: timeNow}, {new: true}, (err, doc) => {
            if (err) return res.json(err);
            return res.json({mes: 'Update skill success!'});
        });
    }).catch((err) => res.status(500).json(err));
};

exports.getDetailById = (req, res) => {
    const id = req.query.id;
    Skill.findOne({_id: id}).then((skill) => res.json(skill)).catch(err => res.json(err));
};

exports.removeById = (req, res) => {
    const id = req.query.id;
    Skill.findOneAndRemove({_id: id}).then(() => res.json({mes: 'Remove success!'})).catch(err => res.json(err));
};

// Get skills
exports.query = (req, res) => {
    let page = Number(req.query.page);
    let size = Number(req.query.size);
    let userId = req.query.userId;
    if (userId) {
        Skill.find({userId: userId}).limit(size)
            .skip(size * page).then((skills) => res.json(skills)).catch(err => res.json(err));
    } else {
        Skill.find().limit(size)
            .skip(size * page).then((skills) => res.json(skills)).catch(err => res.json(err));
    }
};

