var db = require("../models");

// #### Routes
// ==============================================================================
module.exports = function (app) {
  // Get all the lifeHacks_db data
  app.get("/api/hacks", function (req, res) {
    db.Hacks.findAll({}).then(function (dbHacks) {
      res.json(dbHacks);
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
    });
  });
};
