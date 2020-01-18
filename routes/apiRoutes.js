// /* eslint-disable prettier/prettier */
// var db = require("../models");

// // #### Routes

var cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "integrated-information-consultants-llc",
  api_key: "328516388269339",
  api_secret: "dSz3LaW8nqZgTfl1OgcSz8n6wlE"
});

module.exports = function(app) {
  app.post("/api/file", function(req, res) {

    const img = req.body.img;
    cloudinary.uploader.upload(img, function(error, result) {
if(error) throw error;

      console.log(result);
      res.json(result);
    });
  });
};
// // ==============================================================================
// module.exports = function (app) {
//   // Get all the lifeHacks_db data
//   app.get("/api/hacks", function (req, res) {
//     db.Hacks.findAll({}).then(function (dbHacks) {
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
