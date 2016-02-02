'use strict'; // best practice, enforces stict rules, saves stupid errors

var express = require('express'), 
    routes = require('./app/routes/index.js');

var app = express();

routes(app);

app.listen(8080, function () {
    console.log('Listening on port 8080...');
});