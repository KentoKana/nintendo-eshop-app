const express = require("express");

class HomeController {
  path = "/";
  router = express.Router();

  constructor() {
    this.path = "/";
    this.router = express.Router();
    this.initRoutes();
  }

  initRoutes = () => {
    this.router.get("/", this.index);
  };

  index = (req, res) => {
    const users = [
      {
        id: 1,
        name: "Ali"
      },
      {
        id: 2,
        name: "Can"
      },
      {
        id: 3,
        name: "Ahmet"
      }
    ];

    res.json({ users });
  };
}

module.exports = HomeController;
