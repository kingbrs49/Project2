/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// Run: npm i express
//      npm i dotenv
//      npm i sequelize
//      npm i mysql2

// #### Dependencies
// ==============================================================================
require("dotenv").config();
var nodemailer = require("nodemailer");
var schedule = require("node-schedule");
var express = require("express");
// var exphbs = require("express-handlebars");

// #### Requiring models for syncing
// ==============================================================================
var db = require("./models");

// #### Express app
// ==============================================================================
var app = express();
var PORT = process.env.PORT || 8080;

// #### Express app tp handle data parsing
// ==============================================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


// #### Handlebars
// ==============================================================================
// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");


// #### Routes
// ==============================================================================
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

var syncOptions = { force: false };

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function () {
  app.listen(PORT, function () {
    console.log("Listening on PORT: " + PORT);
  });
});

module.exports = app;

//Nodemailer
var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "thedailylifehack@gmail.com",
    pass: "hackmylife123"
  }
});

var mailOptions = {
  from: "thedailylifehack@gmail.com",
  to: "rasilverthorn@ucdavis.edu, chriscoonwilliam@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!"
};



//Node-schedule
var j = schedule.scheduleJob("5 19 20 16 1 4", function () {
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  console.log("Scheduled!");
});