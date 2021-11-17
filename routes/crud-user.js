const crudController = require("../controllers/crud-user");
const express = require("express");
const api = express.Router();

api.post("/create-user", crudController.createUser);
module.exports = api;
