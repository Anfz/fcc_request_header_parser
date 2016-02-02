'use strict';

module.exports = function (app) {
    app.route('/').get(function (req, res) {
        res.sendFile(process.cwd()  + '/client/index.html');
    });
}