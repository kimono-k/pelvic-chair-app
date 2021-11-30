const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 3000;
const path = require("path");
var mqttHandler = require('./mqtt_handler');

app.use("/css", express.static(__dirname + "/node_modules/bootstrap/dist/css"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

var mqttClient = new mqttHandler();
mqttClient.connect();

// Routes
app.post("/send-mqtt", function(req, res) {
  mqttClient.sendMessage(req.body.message);
  res.status(200).send("Message sent to mqtt");
});

// Express Middleware for serving static files
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/startbootstrap-sb-admin-2/index.html");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  
});
