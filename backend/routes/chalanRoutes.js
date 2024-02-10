// chalanRoutes.js

const express = require('express');
const router = express.Router();
const chalanController = require('../controllers/chalanController');

router.post('/add', chalanController.addChalanDetails);
router.get('/all', chalanController.getAllChalanDetails); // New route for fetching all chalan details

module.exports = router;
