// chalanRoutes.js

const express = require('express');
const router = express.Router();
const chalanController = require('../controllers/chalanController');

router.post('/add', chalanController.addChalanDetails);

module.exports = router;
