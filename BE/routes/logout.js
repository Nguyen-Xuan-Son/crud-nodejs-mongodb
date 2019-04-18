const logoutController = require("./../controller/logout");

module.exports = (app) => {
    app.route('/api/logout')
        .get(logoutController.logout)
};
