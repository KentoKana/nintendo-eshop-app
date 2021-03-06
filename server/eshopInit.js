"use strict";

// -- Import Modules -- //
const EshopApp = require("./App.js");
const bodyParser = require("body-parser");
const logger = require("./middlewares/logger");

const GamesAmericaController = require("./controllers/GamesAmericaController");

const app = new EshopApp({
  port: 9793,
  controllers: [new GamesAmericaController()],
  middlewares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    logger
  ]
});

app.listen();
