var mysql = require('mysql');
var express = require('express');
var app = express();

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
    console.log(result);
    res.end( JSON.stringify(result) );
  });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)
})