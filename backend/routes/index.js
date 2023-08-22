const express = require("express");
const axios = require('axios');
const profileRouter = require("./profile");
const requestRouter = require("./request");
const messageRouter = require("./message");
const highlineRouter = require("./highline");
const cardsRouter = require("./cards");

//create 总 router
const router = express.Router();

router.use('/profile',profileRouter); //将router挂载到总router上
router.use('/request',requestRouter);
router.use('/message',messageRouter);
router.use('/highline',highlineRouter);
router.use('/cards', cardsRouter);

module.exports = router;