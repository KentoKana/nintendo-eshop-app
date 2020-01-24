"use strict";

const EshopApp = require("./App.js");
const bodyParser = require("body-parser");
const logger = require("./middlewares/logger");

const HomeController = require("./controllers/HomeController");
const GamesAmericaController = require("./controllers/GamesAmericaController");

const app = new EshopApp({
  port: 9793,
  controllers: [new HomeController(), new GamesAmericaController()],
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    logger
  ]
});

app.listen();
