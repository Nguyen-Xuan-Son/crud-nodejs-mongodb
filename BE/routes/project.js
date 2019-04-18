const projectController = require("./../controller/project");

module.exports = (app) => {
    app.route('/api/project')
        .put(projectController.update)
        .post(projectController.create);

    app.route('/api/projectById')
        .get(projectController.getDetailById)
        .delete(projectController.removeById);

    app.route('/api/projectQuery')
        .get(projectController.query);
};
