var express = require("express");

var router = express.Router();

var schedule = require("../models/schedule.js");

router.get("/", function (req, res) {

    //go to the models folder and run the all function in there
    schedule.all(function (data) {


        res.render("schedule", data)
    })

});

router.post("/api/schedule", function (req, res) {

    schedule.create(["topic", "createdAt", "updatedAt"], [req.schedule_items.topic, req.schedule_items.createdAt, req.schedule_items.updatedAt], function (result) {
        // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

router.put("/api/schedule/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    schedule.update(
        {
            sleepy: req.body.sleepy
        },
        condition,
        function (result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

// Export routes for server.js to use.
module.exports = router;