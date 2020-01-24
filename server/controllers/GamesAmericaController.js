const { getGamesAmerica } = require("nintendo-switch-eshop");
const express = require("express");

class GamesAmericaController {
  path = "/GamesAmerica";
  router = express.Router();
  constructor() {
    this.path = "/GamesAmerica";
    this.router = express.Router();
    this.getGamesAmerica = getGamesAmerica;
    this.initRoutes();
  }

  initRoutes = () => {
    this.router.get("/GamesAmerica", this.gamesAmericaRoute);
  };

  getAllGames = () => {
    this.getGamesAmerica({ limit: 1 })
      .then(data => {
        // console.log(data);
        return Promise.resolve(data);
      })
      .catch(e => {
        console.log("Error", e);
      });
  };

  gamesAmericaRoute = (req, res) => {
    this.getGamesAmerica({ limit: 1 })
      .then(data => {
        // console.log(data);
        return res.json({ data });
      })
      .catch(e => {
        console.log("Error", e);
      });
  };
}

module.exports = GamesAmericaController;
