const { getGamesAmerica } = require("nintendo-switch-eshop");
const express = require("express");

class GamesAmericaController {
  path = "/getGamesAmerica";
  router = express.Router();
  constructor() {
    this.path = "/getGamesAmerica";
    this.router = express.Router();
    this.getGamesAmerica = getGamesAmerica;
    this.initRoutes();
  }

  initRoutes = () => {
    this.router.get("/getGamesAmerica", this.getAllGamesAmerica);
  };

  getAllGamesAmerica = (req, res) => {
    let offset;
    let gamesPerPage = 1;

    offset = req.query.offset
      ? parseInt((offset = req.query.offset))
      : (offset = 1);

    this.getGamesAmerica({ limit: gamesPerPage }, offset)
      .then(games => {
        return res.json({
          offset: offset,
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
