const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/admin"; // Replace with your MongoDB URL

mongoose.connect(url);

const db = mongoose.connection;

db.on("connection", () => {
  console.log("Mongoose is connected");
});

db.on("error", () => {
  console.log("Mongoose connection error");
});

db.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});
module.exports = db;