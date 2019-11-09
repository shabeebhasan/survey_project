var mysql = require('mysql');
var express = require('express');
var app = express();
var shuffle = require('shuffle-array');
var bodyParser = require('body-parser');
 
// Parse incoming requests data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
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

app.post('/survey-picture', (req, res) => {
  var user_id = req.body.user_id;
  var points = req.body.points;
  console.log(points);

  var sql = "INSERT INTO user_survey_data (user_id, image_tags_point) VALUES ('"+ user_id + "','" +  points + "') ON DUPLICATE KEY UPDATE image_tags_point='"+ points + "'";
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    return res.status(200).send({
      success: 'true',
      message: result
     })
  });
});

app.post('/survey-two-data', (req, res) => {
  var user_id = req.body.user_id;
  var survey_data = req.body.survey_data;

  var sql = "INSERT INTO user_survey_data (user_id, survey_2_data) VALUES ('"+ user_id + "','" +  survey_data + "') ON DUPLICATE KEY UPDATE survey_2_data='"+ survey_data + "'";
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    return res.status(200).send({
      success: 'true',
      message: result
     })
  });
});

app.post('/survey-three-data', (req, res) => {
  var user_id = req.body.user_id;
  var survey_data = req.body.survey_data;

  var sql = "INSERT INTO user_survey_data (user_id, survey_3_data) VALUES ('"+ user_id + "','" +  survey_data + "') ON DUPLICATE KEY UPDATE survey_3_data='"+ survey_data + "'";
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    return res.status(200).send({
      success: 'true',
      message: result
     })
  });
});

app.post('/survey-one', (req, res) => {
  var user_id = req.body.user_id;
  var points = 0;
  var survey_data = req.body.survey_data;

  var values = Object.values(JSON.parse(survey_data));
  console.log(values);
  for(var i=0;i<values.length;i++){
    points += parseInt(values[i])
  }
  console.log(points);

  var sql = "INSERT INTO user_survey_data (user_id, survey_one_point,survey_1_data) VALUES ('"+ user_id + "','" +  points + "','" + survey_data + "') ON DUPLICATE KEY UPDATE survey_one_point='"+ points +"',survey_1_data='"+ survey_data +"'";
  
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    return res.status(200).send({
      success: 'true',
      message: result
     })
  });
});

app.post('/user-info', (req, res) => {
  console.log('/user-info',req.body);
  var name = req.body.Name;
  var age = req.body.Age;
  var nationality = req.body.Nationality;
  var gender = req.body.Gender;
  var sql = "INSERT INTO user_data ( age,nationality,gender,play_video_games_affine,play_video_games_frequently,play_video_games_passion) VALUES ('"+  age + "','" + nationality + "','" + gender + "','" + req.body.affine + "','" + req.body.frequently  + "','" + req.body.passion + "')";
  
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    return res.status(200).send({
      success: 'true',
      message: result
     })
  });
});

app.post('/add-tags', (req, res) => {
  console.log('/picture_tags',req.body);
  var user_id = req.body.user_id;
  var picture_id = req.body.picture_id;
  var tags = req.body.tags;
  var sql = "INSERT INTO picture_tags ( user_id,picture_id,tags) VALUES ('"+  user_id + "','" + picture_id + "','" + tags + "')";
  
  console.log(sql);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
    return res.status(200).send({
      success: 'true',
      message: result
     })
  });
});

app.get('/motivations-survey', function (req, res) {
  con.query("SELECT * FROM motivation_question", function (err, result, fields) {
    if (err) throw err;
    shuffle(result);
    result = JSON.stringify(result);
    res.end(result);
  });
})

app.get('/activity-flow', function (req, res) {
  con.query("SELECT * FROM activity_flow_question", function (err, result, fields) {
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