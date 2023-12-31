const express = require('express');
const profileRouter = express.Router();

const {getProfile} = require('../controllers/profileController');

// /api/profile GET profile
// http://localhost/api/profile

profileRouter.get("/", getProfile);

module.exports = profileRouter;
