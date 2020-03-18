//Start here

//Dependencies
var express = require("express");
var path = require("path");

// const htmlRoutes = require('.routes/html');
// const apiRoutes = require('.routes/api');

//Sets up the Express App
// ======================================================
var app = express();
var PORT = 3000;

//Sets up the Express app handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//Bottom
app.listen(PORT, () => {
    console.log("Your app is listening on PORT" + PORT)
});