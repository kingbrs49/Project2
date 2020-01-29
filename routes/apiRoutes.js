// /* eslint-disable prettier/prettier */
var db = require("../models");
// var app = require("express").Router();

// // #### Routes
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "integrated-information-consultants-llc",
  api_key: "328516388269339",
  api_secret: "dSz3LaW8nqZgTfl1OgcSz8n6wlE"
});

// Add email to database
module.exports = function (app) {
  app.post("/api/lifeHacks", function (req, res) {
    db.subscribers.create({
      name: req.body.name,
      mail: req.body.email
    }).then(function (dblifeHacks) {
      res.json(dblifeHacks);

    });
  });
  app.get("/api/lifeHacks", function (req, res) {
    cloudinary.search
      .expression('resource_type:image')
      .sort_by('public_id', 'desc')
      .max_results(30)
      .execute().then(result => {
        //console.log(result);
        const shuffledResult = shuffle(result.resources);
        console.log(shuffledResult);
        res.json(shuffledResult);
        Math.floor(Math.random() * shuffledResult[0].url);
      });
  });

  // module.exports = function (app) {
  //post to schedule
  app.post("/api/schedule", function (req, res) {
    // console.log(this);
    console.log(req.body);
    db.schedule.create(req.body).then(function (dbSchedule) {
      res.json(dbSchedule);
    });
  });
  //get from schedule
  app.get("/api/schedule", function (req, res) {
    db.schedule.findAll({}).then(function (data) {
      res.json(data);
    });
  });
};


