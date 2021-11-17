const helloWorldController = require("../controllers/hello-world");
const express = require("express");
const api = express.Router();

api.post("/hello-world", helloWorldController.helloWorld);

module.exports = api;
