const express = require("express");
const controller = require("../controller/controller");
// const app = express();
const route = express.Router();
const services = require("../services/render");

route.get("/", services.homeRoute);

route.get("/add-user", services.add_user);

route.get("/update-user", services.update_user);

// All API endpoints

route.post("/api/users", controller.create);

route.get("/api/users", controller.findAll);

// route.get("/api/users/:id", controller.findOne);

route.put("/api/users/:id", controller.update);

route.delete("/api/users/:id", controller.delete);

module.exports = route;
