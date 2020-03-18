const express = require("express");
const app = express();

const htmlRoutes = require('./routes/html');
const apiRoutes = require('./routes/api');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.get("/", (req, res) => {
    response.sendfile(__dirname + "/public/home.html");
});

htmlRoutes.createRoutes(app);
apiRoutes.createRoutes(app);

// listen for requests
const listener = app.listen(process.env.PORT, () => {
    console.log("your app is listening on port " + listner.address().port);
});