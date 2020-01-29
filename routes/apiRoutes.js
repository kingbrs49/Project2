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

module.exports = function (app) {
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
    // console.log(shuffledResult);
    // req.send(shuffledResult[0].url)
    var hackImg = shuffledResult[0].url
    res.send(hackImg);
    // console.log(shuffledResult[0].url)
    res.json(shuffledResult);
    // Math.floor(Math.random() * shuffledResult[0].url);
  });
});



  // app.post("/api/file", function(req, res) {
  //   console.log(img);
  //   cloudinary.uploader.upload(
  //     req.files.image.path,
  //     {
  //       width: 300,
  //       height: 300,
  //       crop: "limit",
  //       tags: req.body.tags,
  //       moderation: "manual"
  //     },
  //     function() {
  //       console.log(result);
  //       res.json(result);
  //     }
  //   );
  // });
};
// // ==============================================================================
// module.exports = function (app) {
//   // Get all the lifeHacks_db data
//   app.get("/api/hacks", function (req, res) {
//     db.Hacks.f indAll({}).then(function (dbHacks) {
//       res.json(dbHacks);
//       // res.end("yoyoyoyooy")
//     });
//   });

//   // Create a life hack
//   app.post("/api/hacks", function (req, res) {
//     db.Hacks.create(req.body).then(function (dbHacks) {
//       res.json(dbHacks);
//     });
//   });

//   // Delete an hack by id
//   app.delete("/api/hacks/:id", function (req, res) {
//     db.Hacks.destroy({ where: { id: req.params.id } }).then(function (dbHacks) {
//       res.json(dbHacks);
//     });
//   });
// };

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
};

