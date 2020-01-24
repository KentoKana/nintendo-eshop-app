"use strict";
// ---- Import Modules ---- //
const express = require("express");
const path = require("path");

class EshopApp {
  constructor({ port, middlewares, controllers }) {
    this.port = port;
    this.app = express();
    this.middlewares(middlewares);
    this.routes(controllers);
  }

  middlewares = middlewares => {
    middlewares.forEach(middleware => {
      this.app.use(middleware);
    });
  };

  routes = controllers => {
    controllers.forEach(controller => {
      this.app.use("/", controller.router);
    });
  };

  listen = () => {
    this.app.listen(this.port, () => {
      console.log(`Listening on port ${this.port}`);
    });
  };
}

module.exports = EshopApp;
