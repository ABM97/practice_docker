const express = require("express");
const server = express();
const PORT = 3000;
const db = require("./server");

const connectSequelize = async () => {
  try {
    await db.authenticate();
    console.log("Successfully connected to the database");
  } catch (e) {
    console.log("error");
  }
};

connectSequelize();

server.listen(PORT, () => console.log(`Server running on ${PORT}`));
server.get("/", (req, res) => res.status(200).send("hello"));
