const express = require("express");
const cardsRouter = express.Router();
const {getCardById} = require("../controllers/cardsController");
const {postCard} = require("../controllers/cardsController")
const {deleteCardById} = require("../controllers/cardsController")

//GET a card: /api/cards?id=1 
cardsRouter.get("/", getCardById);

//POST new card: /api/cards
cardsRouter.post("/", postCard);

//DELETE a card: /api/cards/:card_id (:冒号后代表动态参数)
cardsRouter.delete("/:card_id",deleteCardById);


module.exports = cardsRouter;