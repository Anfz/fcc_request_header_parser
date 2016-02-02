'use strict'; // best practice, enforces stict rules, saves stupid errors

var express = require('express'), 
    routes = require('./app/routes/index.js'), 
    mongo  = require('mongodb').MongoClient;

var app = express();

mongo.connect('mongodb://localhost:27017/template', function (err, db) {

  if (err) {
      throw new Error('Database failed to connect!');
  } else {
      console.log('MongoDB successfully connected on port 27017.');
  }

  app.use('/client', express.static(process.cwd() + '/client'));
  
  app.use('/controllers', express.static(process.cwd() + '/app/controllers'));
  
  routes(app, db);

  app.listen(8080, function () {
      console.log('Listening on port 8080...');
  });
});