const express = require("express");
const server = express();
const PORT = 3000;
const db = require("./server");

var msg;

const connectSequelize = async () => {
  try {
    await db.authenticate();
    msg = "Successfully connected to the database";
    console.log("Successfully connected to the database");
  } catch (e) {
    msg = "error";
    console.log("error");
  }
};

connectSequelize();

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get("/", (req, res) => res.status(200).send(msg));
