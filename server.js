var fs = require("fs");
var os = require("os");
const notes = require("./note.js");
const express = require("express");
const app = express();
const db = require("./database");
const person = require("./models/person");
var user = os.userInfo();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const router = express.Router();

fs.appendFile("greeting.txt", "Hi" + user.username, () => {
  console.log("file created");
});
const personRouter = require("./routes/personRouters");
app.use("/person", personRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
