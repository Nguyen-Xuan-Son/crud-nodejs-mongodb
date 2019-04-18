const skillController = require("./../controller/skill");

module.exports = (app) => {
    app.route('/api/skill')
        .put(skillController.update)
        .post(skillController.create);

    app.route('/api/skillById')
        .get(skillController.getDetailById)
        .delete(skillController.removeById);

    app.route('/api/skillQuery')
        .get(skillController.query);
};
