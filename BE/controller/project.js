const Project = require('./../schemas/project');
const User = require('./../schemas/user');

exports.create = (req, res) => {
    const {name, detail, fromDate, toDate} = req.body;
    const token = req.headers.token.split(' ')[1];
    User.findOne({token}).then((user) => {
        const project = new Project({name, detail, fromDate, toDate, userId: user._id});
        project.save().then(() => res.json({mes: 'Create project success!'})).catch(onrejected => res.status(403).json(onrejected));
    }).catch(err => res.status(500).json(err));
};

exports.update = (req, res) => {
    const token = req.headers.token.split(' ')[1];
    User.findOne({token}).then(() => {
        const timeNow = new Date();
        Project.findOneAndUpdate({_id: req.body._id}, {
            ...req.body,
            updateAt: timeNow
        }).then(() => res.json({mes: 'Update project success!'})).catch((err) => res.json(err));
    }).catch((err) => res.status(500).json(err));
};

exports.getDetailById = (req, res) => {
    const id = req.query.id;
    Project.findOne({_id: id}).then((project) => res.json(project)).catch(err => res.json(err));
};

exports.removeById = (req, res) => {
    const id = req.query.id;
    Project.findOneAndRemove({_id: id}).then(() => res.json({mes: 'Remove success!'})).catch(err => res.json(err));
};

// Get projects
exports.query = (req, res) => {
    let page = Number(req.query.page);
    let size = Number(req.query.size);
    let {name, detail} = req.query;
    let userId = req.query.userId;
    if (userId) {
        Project.find({userId: userId}).limit(size)
            .skip(size * page).then((projects) => res.json(projects)).catch(err => res.json(err));
    } else {
        Project.find({$or: [{name}, {detail}]}).limit(size)
            .skip(size * page).then((projects) => res.json(projects)).catch(err => res.json(err));
    }
};

