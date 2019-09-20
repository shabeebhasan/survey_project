var mysql = require('mysql');
var express = require('express');
var app = express();
var shuffle = require('shuffle-array');

// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "survey_db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

app.get('/questions-one', function (req, res) {
  con.query("SELECT * FROM player_survey_1_questions", function (err, result, fields) {
    if (err) throw err;
    shuffle(result);
    result = JSON.stringify(result);
    res.end(result);
  });
})

app.post('/user-info', (req, res) => {
  if(!req.body.title) {
    return res.status(400).send({
      success: 'false',
      message: 'title is required'
    });
  } else if(!req.body.description) {
    return res.status(400).send({
      success: 'false',
      message: 'description is required'
    });
  }
 const todo = {
   id: db.length + 1,
   title: req.body.title,
   description: req.body.description
 }
 db.push(todo);
 return res.status(201).send({
   success: 'true',
   message: 'todo added successfully',
   todo
 })
});

app.get('/motivations-survey', function (req, res) {
  con.query("SELECT * FROM motivation_question", function (err, result, fields) {
    if (err) throw err;
    shuffle(result);
    result = JSON.stringify(result);
    res.end(result);
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})