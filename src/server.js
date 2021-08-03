require("dotenv").config();
const express = require("express");
const cors = require("cors");
const router = require("./routers");
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("./src/assets"));

server.use(router);

server.listen(process.env.SERVER_PORT, () => {
  console.log(`server is running on port ${process.env.SERVER_PORT}`);
});

server.use((req, res) => {
  res.status(404).send("Sorry cant find that!");
});
