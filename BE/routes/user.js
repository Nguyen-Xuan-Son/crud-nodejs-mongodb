const userController = require("./../controller/user");

module.exports = (app) => {
    app.route('/api/account')
        .get(userController.account)
        .put(userController.updateAccount);

    app.route('/api/userById')
        .get(userController.accountById);

    app.route('/api/userQuery')
        .get(userController.userQuery);
};
