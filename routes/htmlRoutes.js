var db = require("../models");
var path = require("path");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
  app.get("/hacks", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/html/hacks.html"));
  });

  // // Load example page and pass in an example by id
  // app.get("/hack/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(
  //     dbHacks
  //   ) {
  //     res.render("example", {
  //       example: dbHacks
  //     });
  //   });
  // });

  // // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
};
