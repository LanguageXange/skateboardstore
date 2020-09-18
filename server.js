const express = require("express");
const path = require("path");
// path is a native module for node
const cors = require("cors");
const bodyParser = require("body-parser");

if (process.env.NODE_ENV !== "production") require("dotenv").config();

const app = express();

const port = process.env.port || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// make sure url not containing space and weird characters

app.use(cors());
// cross origin request - for safety if it is not the same origin - access denial
// we want to access backend server (5000) from localhost 3000

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, (error) => {
  if (error) throw error;
  console.log("server running on port `${port}`");
});
