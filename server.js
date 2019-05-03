const express = require("express");
const server = express();
const PORT = 3000;
const db = require("./database");

var msg;

const connectSequelize = async () => {
  try {
    await db.authenticate();
    msg = "Successfully connected to the database";
    console.log("Successfully connected to the database");
    server.listen(PORT, () => console.log(`Server running on ${PORT}`));
  } catch (e) {
    msg = e.message;
    server.listen(PORT, () => console.log(`Server running on ${PORT}`));
    console.log("error");
  }
};

connectSequelize();

server.get("/", (req, res) => res.status(200).send(msg));
