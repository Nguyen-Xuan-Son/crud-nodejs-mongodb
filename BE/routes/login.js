const loginController = require("./../controller/login");

module.exports = (app) => {
    app.route('/api/login')
        .post(loginController.login)
};