'use strict';


var HeaderParser = require(process.cwd() + '/app/controllers/headerParser.js');

module.exports = function (app) {
    
    var headerParser = new HeaderParser();
    
    app.route('/').get(function (req, res) {
        res.sendFile(process.cwd()  + '/client/index.html');
    });
}