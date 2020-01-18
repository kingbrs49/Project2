/* eslint-disable prettier/prettier */
var db = require("../models");

<<<<<<< HEAD
module.exports = function (app) {
  // Get all examples
  app.get("/api/examples", function (req, res) {
    db.Example.findAll({}).then(function (dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function (req, res) {
    // eslint-disable-next-line prettier/prettier
    db.Example.create(req.body).then(function (dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function (req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function (
      dbExample
    ) {
      res.json(dbExample);
=======
// #### Routes
// ==============================================================================
module.exports = function (app) {
  // Get all the lifeHacks_db data
  app.get("/api/hacks", function (req, res) {
    db.Hacks.findAll({}).then(function (dbHacks) {
      res.json(dbHacks);
      // res.end("yoyoyoyooy")
    });
  });

  // Create a life hack
  app.post("/api/hacks", function (req, res) {
    db.Hacks.create(req.body).then(function (dbHacks) {
      res.json(dbHacks);
    });
  });

  // Delete an hack by id
  app.delete("/api/hacks/:id", function (req, res) {
    db.Hacks.destroy({ where: { id: req.params.id } }).then(function (dbHacks) {
      res.json(dbHacks);
>>>>>>> 3d373a536d302b5735d2b1166132babca1bb0f4d
    });
  });
};
