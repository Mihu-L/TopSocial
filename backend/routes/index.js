const express = require("express");
const axios = require('axios');
const profileRouter = require("./profile");

//create 总 router
const router = express.Router();
router.use(profileRouter); //将router挂载到总router上
module.exports = router;