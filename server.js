'use strict'; // best practice, enforces stict rules, saves stupid errors

var express = require('express'), 
    routes = require('./app/routes/index.js');

var app = express();

routes(app);


app.use('/client', express.static(process.cwd() + '/client'));

app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

app.listen(8080, function () {
    console.log('Listening on port 8080...');
});