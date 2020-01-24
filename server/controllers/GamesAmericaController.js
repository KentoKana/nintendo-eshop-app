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
    this.router.get("/getAllGamesAmerica", this.getAllGamesAmerica);
  };

  getAllGamesAmerica = (req, res) => {
    let offset = 1;
    let gamesPerPage = 10;
    this.getGamesAmerica({ limit: gamesPerPage }, offset)
      .then(games => {
        return res.json({
          offset: 1,
          gamesPerPage: gamesPerPage,
          games: games
        });
      })
      .catch(e => {
        console.log("Error", e);
      });
  };
}

module.exports = GamesAmericaController;
